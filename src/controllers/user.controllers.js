const userCtrl = {};
const User = require("../models/User");
const passport = require("passport");
const jwt = require("jsonwebtoken");

userCtrl.renderSignUpForm = (req, res) => {
  res.render("users/signup");
};

userCtrl.signup = async (req, res) => {
  const errors = [];
  const { name, email, password, confirm_password } = req.body;
  if (password != confirm_password) {
    errors.push({ text: "Passwords do not match" });
  }
  if (password.length < 4) {
    errors.push({ text: "Passwords must be at least 4 characters" });
  }
  if (errors.length > 0) {
    res.render("users/signup", {
      errors,
      name,
      email,
      password,
      confirm_password,
    });
  } else {
    const emailUser = await User.findOne({ email: email });
    if (emailUser) {
      req.flash("error_msg", "The email is already in use");
      res.redirect("/users/signup");
    } else {
      const newUser = new User({ name, email, password });
      newUser.password = await newUser.encrypPassword(password);
      await newUser.save();
      req.flash("success_msg", "You are registered");
      res.redirect("/users/signin");
    }
  }
};

userCtrl.renderSigninForm = (req, res) => {
  res.render("users/signin");
};

userCtrl.signin = passport.authenticate("local", {
  failureRedirect: "/users/signin",
  successRedirect: "/products",
  failureFlash: true,
});

userCtrl.logout = function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
  });
  req.flash("success_msg", "You are logged out now.");
  res.redirect("/users/signin");
};

module.exports = userCtrl;
