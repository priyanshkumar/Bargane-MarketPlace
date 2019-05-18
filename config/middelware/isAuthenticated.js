module.exports = function(reqq, res, next) {
  if (req.user) {
    return next;
  }

  res.redirect("/");
};
