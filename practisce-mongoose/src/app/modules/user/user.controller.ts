import { NextFunction, Request, Response } from "express";
import { createUserToDb, getUsersFromDB } from "./user.services";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = req.body;
  const user = await createUserToDb(data);

  res.status(200).json({
    status: "success",
    data: user,
  });
};

// get users
export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const users = await getUsersFromDB();
  res.status(200).json({
    status: "success",
    data: users,
  });
};

// route will call-->controller--->services
