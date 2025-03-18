import jwt from "jsonwebtoken";

const jwt_key = process.env.JWT_SECRET;
export const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "Unauthorized - no token provided" });
  }
  try {
    const decoded = jwt.verify(token, jwt_key);
    if (!decoded) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized - invalid token" });
    }
    req.userId = decoded.userId;
    next();
  } catch (error) {
    console.log("Error verifying token: ", error.message);
    res
      .status(401)
      .json({ success: false, message: "Unauthorized - invalid token" });
  }
};
