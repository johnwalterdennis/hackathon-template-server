//has_access is any bool

module.exports = (req, res, next) => {
  if (req.user && req.user.has_access) {
    return next();
  }
  return res.status(403).json({ error: "Admin access required" });
};
