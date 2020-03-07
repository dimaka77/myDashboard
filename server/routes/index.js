module.exports = function(app, passport) {
  app.get('/', isLoggedIn, (req, res) => {
    res.send(req.user);
  });

  app.get('/signup', (req, res) => {
    res.send(req.user);
  });

  app.post('/signup', passport.authenticate('local-signup', {}));

  app.get('/logout', (req, res) => {
    req.logout();
    res.send(req.user);
  });

  app.get('/login', (req, res) => {
    res.send(req);
  });

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }

    res.redirect('/login');
  }
};
