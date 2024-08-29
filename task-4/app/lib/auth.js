import jwt from "jsonwebtoken";
import cookie from "cookie";

const SECRET_KEY = "your_secret_key"; // Use an environment variable for the secret key

export const setTokenCookie = (res, token) => {
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 3600,
      path: "/",
    })
  );
};

export const removeTokenCookie = (res) => {
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("token", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: -1,
      path: "/",
    })
  );
};

export const verifyToken = (token) => {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (err) {
    return null;
  }
};

export const createToken = (user) => {
  return jwt.sign(user, SECRET_KEY, { expiresIn: "1h" });
};
