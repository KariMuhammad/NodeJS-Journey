module.exports = function only(role) {
  return function (req, res, next) {
    console.log("User Role", req.user.role);
    if (req.user.role === role) return next(); // must `return`

    res.status(403).json({
      success: false,
      message: "Access denied. You have no rights!",
    });
  };
};
