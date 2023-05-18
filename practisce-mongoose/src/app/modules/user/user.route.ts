import express from "express";
import { createUser } from "./user.controller";

const route = express.Router();

route.get("/", createUser);

export default route;
