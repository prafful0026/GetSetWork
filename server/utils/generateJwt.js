import jwt from "jsonwebtoken";

const generateJwt = (id) => {
  return jwt.sign({ userId: id }, process.env.jwtsecret, { expiresIn: "24h" });
};
export default generateJwt;
