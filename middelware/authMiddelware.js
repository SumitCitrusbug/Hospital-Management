const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: "Unauthorized User" });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    console.log(decoded);
    if (err) return res.status(403).json({ message: "Unauthorized User" });
    req.userId = decoded.id;
    req.userRole = decoded.role;
    next();
  });
};

const isStaff = (req, res, next) => {
  console.log(req);
  if (req.userRole !== "staff") {
    return res.status(403).json({
      message: "Access denied. Only staff members can perform this action.",
    });
  }
  next();
};

const isPatient = (req, res, next) => {
  //console.log(req);
  if (req.userRole !== "patient") {
    return res.status(403).json({
      message: "Access denied. Only patients can perform this action.",
    });
  }
  next();
};

module.exports = { verifyToken, isStaff, isPatient };
