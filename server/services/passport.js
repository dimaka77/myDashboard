const LocalStrategy = require('passport-local').Strategy;
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
          }

          if (!user.validPassword(password)) {
            return done(null, null, {
              status: 401,
              name: 'AuthenticationError',
              message: 'Wrong password.'
            });
          }
          // All is well, return successful user
          return done(null, user, {
            status: 200
          });
        });
      }
    )
  );
};
