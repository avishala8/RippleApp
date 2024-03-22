exports.getUser = function (req, res) {
  return res.render("user", {
    title: "UserPage",
  });
};
exports.postUser = function (req, res) {
  return res.render("user", {
    title: "UserPage",
  });
};
exports.signupSchema = function (req, res) {
  return res.render("signup", {
    title: "RippleApp SignUp",
  });
};

exports.signinSchema = function (req, res) {
  return res.render("signin", {
    title: "RippleApp SignIn",
  });
};
// get the sign up page data
exports.create = function (req, res) {};

exports.createSession = function (req, res) {
  // todo
};
