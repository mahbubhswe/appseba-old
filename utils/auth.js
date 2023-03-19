import jwt from "jsonwebtoken";
export const studentSignToken = (user) => {
  return jwt.sign(
    {
      name: user.name,
      phone: user.phone,
      email: user.email,
    },
    process.env.JWT_Secreet,
    {
      expiresIn: "30d",
    }
  );
};
export const isAuth = (req, res, next) => {
  const { authorization } = req.headers;
  if (authorization) {
    const token = authorization.slice(7, authorization.length);
    jwt.verify(token, process.env.JWT_Secreet, (error, decode) => {
      if (error) {
        res.send("Token is not valid");
      } else {
        req.user = decode;
        next();
      }
    });
  } else {
    res.send("Token is empty");
  }
};
