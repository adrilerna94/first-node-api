import multipTable from "../controllers/multiplyTableController"
import { Router } from 'express';

export const multiplyTableRouter = Router();

// param = number
multiplyTableRouter.get("/", multipTable);
