import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDb = async (payload: IUser): Promise<IUser> => {
  const user = new User(payload);
  await user.save();
  // console.log(user);
  return user;
};

// get users from db
export const getUsersFromDB = async (): Promise<IUser[]> => {
  const users = User.find();
  return users;
};

// get user from DB
export const getUserByIDFromDB = async (
  payload: string
): Promise<IUser | null> => {
  const user = await User.findOne(
    { id: payload },
    { name: 1, email: 1, contactNo: 1 }
  );
  return user;
};
