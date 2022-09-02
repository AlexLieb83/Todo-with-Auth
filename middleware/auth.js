module.exports = {
  ensureAuth: function (req, res, next) {
    //if there is a logged in user, keep it moving
    if (req.isAuthenticated()) {
      return next();
      //if nobody is logged in, send back to main page
    } else {
      res.redirect("/");
    }
  },

  //guest???
  ensureGuest: function (req, res, next) {
    if (!req.isAuthenticated()) {
      return next();
    } else {
      res.redirect("/dashboard");
    }
  },
};
