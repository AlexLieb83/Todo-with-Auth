const passport = require("passport");
const validator = require("validator");
const User = require("../models/User");

//function for login, redirects user to their addCompany
exports.getLogin = (req, res) => {
  if (req.user) {
    return res.redirect("/addCompany"); //*** Should this be different? */
  }
  //???***
  res.render("login", {
    title: "Login",
  });
};

//for issues while logging in
exports.postLogin = (req, res, next) => {
  const validationErrors = [];
  if (!validator.isEmail(req.body.email))
    validationErrors.push({ msg: "Please enter a valid email address." });
  if (validator.isEmpty(req.body.password))
    validationErrors.push({ msg: "Password cannot be blank." });

  //if there are any validationErrors, flash them to the screen and redirect to login
  if (validationErrors.length) {
    req.flash("errors", validationErrors);
    return res.redirect("/login");
  }
  //use normalizeEmail to make validating emails easier
  req.body.email = validator.normalizeEmail(req.body.email, {
    gmail_remove_dots: false,
  });

  //use 'local' strategy for authentication
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      req.flash("errors", info);
      return res.redirect("/login");
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      //if no errors, return success and send user to their last saved session or /addCompany
      req.flash("success", { msg: "Success! You are logged in." });
      res.redirect(req.session.returnTo || "/addCompany");
    });
  })(req, res, next);
};


//NEED LOGOUT BUTTON
exports.logout = (req, res) => {
  //logout and destroy the saved session
  req.logout();
  req.session.destroy((err) => {
    if (err)
      console.log("Error : Failed to destroy the session during logout.", err);
    req.user = null;
    res.redirect("/");
  });
};

//successful sign up
exports.getSignup = (req, res) => {
  if (req.user) {
    return res.redirect("/addCompany");
  }
  //????
  res.render("signup", {
    title: "Create Account",
  });
};

//after signup
exports.postSignup = (req, res, next) => {
  const validationErrors = [];
  //different validation errors
  if (!validator.isEmail(req.body.email))
    validationErrors.push({ msg: "Please enter a valid email address." });
  if (!validator.isLength(req.body.password, { min: 8 }))
    validationErrors.push({
      msg: "Password must be at least 8 characters long",
    });
  if (req.body.password !== req.body.confirmPassword)
    validationErrors.push({ msg: "Passwords do not match" });

  //if there are any validation errors, redirect to signup
  if (validationErrors.length) {
    req.flash("errors", validationErrors);
    return res.redirect("../signup");
  }
  //???
  req.body.email = validator.normalizeEmail(req.body.email, {
    gmail_remove_dots: false,
  });

  //create new user from User model
  const user = new User({
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password,
  });

  //check if email or usename already exists, if so, redirect to signup page
  User.findOne(
    { $or: [{ email: req.body.email }, { userName: req.body.userName }] },
    (err, existingUser) => {
      if (err) {
        return next(err);
      }
      if (existingUser) {
        req.flash("errors", {
          msg: "Account with that email address or username already exists.",
        });
        return res.redirect("../signup");
      }
      //if everything is unique, save user and log in, redirect to their /addCompany
      user.save((err) => {
        if (err) {
          return next(err);
        }
        req.logIn(user, (err) => {
          if (err) {
            return next(err);
          }
          res.redirect("/addCompany");
        });
      });
    }
  );
};
