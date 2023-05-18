import express, { Application } from "express";
import cors from "cors";
import userRoute from "./app/modules/user/user.route";

const app: Application = express();

//using cors
app.use(cors());

//parsing data
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // to parse any type data.

app.use("/api/v1/user", userRoute);

export default app;

// res.send("Hello World!");
/*
  step1: interface
  step2: Schema
  step3: model
  step4: database query on Model
  */
// creating an interface

// creating schema using interface
// developers will be responsible for checking required or not.

/*
Pattern MVC, Modular

Interface--> interface.ts
model,schema-->model.ts
route--> routes.ts
router function--->controller.ts
Database query function---> service.ts
*/
