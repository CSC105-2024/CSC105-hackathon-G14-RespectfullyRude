import jwt from "jsonwebtoken";

export const generateToken = (id: number) => {
  const secret = process.env.JWT_SECRET;

  if (!secret) {
    throw new Error("JWT_SECRET is not defined in environment variables");
  }

  return jwt.sign({ id: id }, secret, { expiresIn: "7d" });
};

export const verifyToken = (token: string) => {
  const secret = process.env.JWT_SECRET!;

  if (!secret) {
    throw new Error("JWT_SECRET is not defined in environment variables");
  }

  try {
    return jwt.verify(token, secret);
  } catch (error) {
    return null;
  }
};
