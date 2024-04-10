import jwt, { JwtPayload } from "jsonwebtoken";

const FORGET = process.env.NEXT_FORGET_JWT as string;

export const verifyForgetToken = (token: string, email: string): JwtPayload => {
  return jwt.verify(token, `${FORGET}+${email}`) as JwtPayload;
};

export const generateForgetToken = (id: string, email: string) => {
  return jwt.sign({ userId: id }, `${FORGET}+${email}`, {
    expiresIn: "1d",
  });
};
