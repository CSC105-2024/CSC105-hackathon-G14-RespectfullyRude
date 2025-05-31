type User = {
  name: string;
  email: string;
  password: string;
};

type EditUser = {
  name: string;
  email: string;
  password: string;
  newPassword: string;
};

type Id = {
  id: number;
};

export type { User, EditUser, Id };
