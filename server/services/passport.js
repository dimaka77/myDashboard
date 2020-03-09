const LocalStrategy = require('passport-local').Strategy;
const JWTStrategy = require('passport-jwt').Strategy;
const jwt = require('jsonwebtoken');
const ExtractJWT = require('passport-jwt').ExtractJwt;
const uuidv4 = require('uuid').v4;
let User = require('../models/User');

module.exports = function(passport) {
  passport.serializeUser((user, done) => done(null, user.id));

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => done(err, user));
  });

  passport.use(
    'local-signup',
    new LocalStrategy(
      {
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
      },
      (req, email, password, done) => {
        try {
          process.nextTick(() => {
            User.findOne({ email: email.trim() }, (err, user) => {
              if (err) return done(err);

              if (user) {
                return done(null, false, {
                  status: 400,
                  name: 'ValidationError',
                  message: 'An account with this username already exists.'
                });
              } else {
                const newUser = new User();

                newUser.email = email.trim();
                newUser.uuid = uuidv4();
                newUser.password = newUser.generateHash(password);
                newUser.name = req.body.name.trim();

                newUser.save(err => {
                  if (err) throw err;
                  return done(null, newUser, {
                    status: 200
                  });
                });
              }
            });
          });
        } catch (err) {
          done(err);
        }
      }
    )
  );

  passport.use(
    'local-login',
    new LocalStrategy(
      {
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
      },
      (req, email, password, done) => {
        try {
          User.findOne({ email: email.trim() }, (err, user) => {
            // If there are any errors, return the error before anything else
            if (err) return done(err);

            // If no user is found, return the message
            if (!user) {
              return done(null, null, {
                status: 404,
                name: 'ValidationError',
                message: 'No user found.'
              });
            } else if (!user.validPassword(password)) {
              return done(null, null, {
                status: 401,
                name: 'AuthenticationError',
                message: 'Wrong password.'
              });
            }

            const token = jwt.sign({ id: user.uuid }, process.env.JWT_SECRET);
            // All is well, return successful user
            return done(null, user, {
              auth: true,
              token,
              status: 200
            });
          });
        } catch (err) {
          done(err);
        }
      }
    )
  );

  const opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
  };

  passport.use(
    'jwt',
    new JWTStrategy(opts, (jwt_payload, done) => {
      try {
        User.findOne({ uuid: jwt_payload.id }, (err, user) => {
          if (user) {
            done(null, user);
          } else {
            done(null, false);
          }
        });
      } catch (err) {
        done(err);
      }
    })
  );
};
