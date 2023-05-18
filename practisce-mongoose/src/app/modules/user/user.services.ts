import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDb = async (payload: IUser): Promise<IUser> => {
  const user = new User(payload);
  await user.save();
  // console.log(user);
  return user;
};

// get user from db
export const getUsersFromDB = async () => {
  const users = User.find();
  return users;
};
