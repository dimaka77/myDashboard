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
              const error = new Error(
                'An account with this username already exists.'
              );
              error.status = 400;
              error.name = 'ValidationError';

              return done(error, user);
            } else {
              const newUser = new User();

              newUser.email = email.trim();
              newUser.password = newUser.generateHash(password);
              newUser.name = req.body.name.trim();

              newUser.save(err => {
                if (err) throw err;
                return done(null, newUser);
              });
            }
          });
        });
      }
    )
  );
};
