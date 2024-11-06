import {sum, substract, division, multiply } from "../controllers/mathController"
import { Router } from "express";

export const calculatorRouter = Router();

calculatorRouter.post("/sum" , sum);
calculatorRouter.post("/substract" , substract);
calculatorRouter.post("/division", division);
calculatorRouter.post("/multiply", multiply);
