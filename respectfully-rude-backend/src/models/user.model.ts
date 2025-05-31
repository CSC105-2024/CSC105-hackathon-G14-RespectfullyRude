import { db } from "../index.js";
import type { createUser } from "../types/user.type.ts";
import { generateHash } from "../utils/hash.ts";

export const register = async ({ name, email, password }: createUser) => {
  const hashed = await generateHash(password);

  await db.user.create({
    data: {
      name: name,
      email: email,
      password: hashed,
    },
  });
};

export const findInfo = async (email: string) => {
  const user = await db.user.findUnique({
    where: { email: email },
  });

  return user;
};
