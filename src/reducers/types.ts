export type User = {
  id?: string;
  firstname: string;
  lastname: string;
  othernames?: string;
  email: string;
  password?: string;
  role: string;
};

export type UserState = {
  user: User | null;
};
