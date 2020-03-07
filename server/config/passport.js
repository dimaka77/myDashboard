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
      (requestAnimationFrame, email, password, done) => {
        process.nextTick(() => {
          User.findOne({ email: email }, (err, user) => {
            if (err) return done(err);

            if (user) {
              return done(
                null,
                false,
                req.flash('signupMessage', 'The emial is already taken,')
              );
            } else {
              const newUser = new User();

              newUser.email = email;
              newUser.password = newUser.generateHash(password);

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
