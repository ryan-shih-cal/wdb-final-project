const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const token = req.header("token"); // just checking if there is a token
  if (!token) return res.status(401).json({ message: "Auth Error" });

  try {
    const decoded = jwt.verify(token, "randomString"); // using jwt to decode/verify our token, and saving that result
    req.user = decoded.user; // setting user to decoded user 
    next();
  } catch (e) {
    console.error(e);
    res.status(500).send({ message: "Invalid Token" });
  }
};