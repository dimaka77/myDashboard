module.exports = function(app, passport) {
  app.get('/logout', (req, res) => {
    req.logout();
    res.send(req.user);
  });

  app.get('/api/current_user', (req, res) => {
    console.log('req', req);
    res.send(req.user);
  });

  app.post('/api/signup', (req, res, done) => {
    if (!req.body.email) {
      return res.status(422).json({
        info: {
          status: 422,
          message: "email can't be blank."
        }
      });
    }
    if (!req.body.password) {
      return res.status(422).json({
        info: {
          status: 422,
          message: "password can't be blank."
        }
      });
    }
    passport.authenticate('local-signup', {}, (err, user, info) => {
      if (err) return done(err);

      return res.status(info.status).json({
        info,
        user
      });
    })(req, res, done);
  });

  app.post('/api/login', (req, res, done) => {
    if (!req.body.email) {
      return res.status(422).json({
        info: {
          status: 422,
          message: "email can't be blank."
        }
      });
    }
    if (!req.body.password) {
      return res.status(422).json({
        info: {
          status: 422,
          message: "password can't be blank."
        }
      });
    }

    passport.authenticate('local-login', {}, (err, user, info) => {
      if (err) return done(err);
      return res.status(info.status).json({
        info,
        user
      });
    })(req, res, done);
  });
};
