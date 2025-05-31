import { db } from "../index.js";
import type { User } from "../types/user.type.ts";
import { generateHash } from "../utils/hash.ts";

export const register = async ({ name, email, password }: User) => {
  const hashed = await generateHash(password);

  await db.user.create({
    data: {
      name: name,
      email: email,
      password: hashed,
    },
  });
};

export const findInfo = async (input: string | number) => {
  const user = await db.user.findUnique({
    where: typeof input === "string" ? { email: input } : { id: input },
  });

  return user;
};

export const updateInfo = async (name: string, email: string, id: number) => {
  const user = await db.user.update({
    where: { id: id },
    data: {
      name: name,
      email: email,
    },
    select: {
      email: true,
      name: true,
    },
  });

  return user;
};

export const updatePassword = async (password: string, id: number) => {
  const hash = await generateHash(password);
  await db.user.update({
    where: { id: id },
    data: {
      password: hash,
    },
  });
};

export const findImgId = async (id: number) => {
  const info = await db.user.findUnique({
    where: { id },
    select: {
      img_id: true,
    },
  });

  return info?.img_id;
};

export const uploadProfileAndID = async (
  id: number,
  img_url: string,
  img_id: string
) => {
  const info = await db.user.update({
    where: { id },
    data: {
      img_url: img_url,
      img_id: img_id,
    },
    select: {
      img_url: true,
      img_id: true,
    },
  });
  return info;
};
