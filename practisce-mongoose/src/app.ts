import express, { Application, Response, Request, NextFunction } from "express";
import cors from "cors";
import { Schema } from "mongoose";
import { strict } from "assert";

const app: Application = express();

//using cors
app.use(cors());

//parsing data
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // to parse any type data.

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  // res.send("Hello World!");
  /*
  step1: interface
  step2: Schema
  step3: model
  step4: database query
  */
  // creating an interface
  interface IUser {
    id: string;
    role: "student";
    password: string;
    name: {
      firstName: string;
      middleName?: string;
      lastName: string;
    };
    dateOfBirth?: string;
    gender: "male" | "female";
    email?: string;
    contactNo: string;
    emergencyContactNO: string;
    presentAddress: string;
    permanentAddress: string;
  }
  // creating schema using interface
  const userSchema = new Schema<IUser>({
    id: { type: String, required: true, unique: true },
    role: { type: String, required: true },

    name: {
      firstName: {
        type: String,
        required: true,
      },
      middleName: {
        type: String,
      },
      lastName: {
        type: String,
        required: true,
      },
    },
    dateOfBirth: { type: String, required: true },
    gender: { type: String, enum: ["male", "female"] },
    email: { type: String },
    contactNo: { type: String, required: true },
    emergencyContactNO: { type: String, required: true },
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
  });
});

export default app;
