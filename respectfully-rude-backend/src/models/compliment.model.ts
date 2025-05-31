import { db } from "../index.ts";

export const createList = async (
  name: string,
  img_url: string,
  img_id: string,
  text: string,
  backhanded_name: string,
  backhanded_text: string,
  backhanded_img: string,
  user_id: number
) => {
  const info = await db.backhandedCompliment.create({
    data: {
      user_id: user_id,
      name: name,
      img_url: img_url,
      img_id: img_id,
      text: text,
      backhanded_name: backhanded_name,
      backhanded_text: backhanded_text,
      backhanded_img: backhanded_img,
    },
  });
  return info;
};

export const findImgId = async (id: number, user_id: number) => {
  const info = await db.backhandedCompliment.findUnique({
    where: {
      id: id,
      user_id: user_id,
    },
    select: {
      img_id: true,
    },
  });

  return info?.img_id;
};

export const updateList = async (
  id: number,
  name: string,
  img_url: string,
  img_id: string,
  text: string,
  backhanded_name: string,
  backhanded_text: string,
  backhanded_img: string,
  user_id: number
) => {
  const info = await db.backhandedCompliment.update({
    where: {
      id: id,
    },
    data: {
      user_id,
      name,
      img_url,
      img_id,
      text,
      backhanded_name,
      backhanded_text,
      backhanded_img,
    },
  });
  return info;
};

export const deleteList = async (id: number, user_id: number) => {
  const list = await db.backhandedCompliment.delete({
    where: {
      id: id,
      user_id: user_id,
    },
  });

  return list;
};

export const getList = async (user_id: number) => {
  const lists = await db.backhandedCompliment.findMany({
    where: {
      user_id: user_id,
    },
  });

  return lists;
};
