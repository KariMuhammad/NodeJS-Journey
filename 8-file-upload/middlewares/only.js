module.exports = function only(role) {
  return function (req, res, next) {
    if (req.user.role === role) next();

    res.status(403).json({
      success: false,
      message: "Access denied. You have no rights!",
    });
  };
};
