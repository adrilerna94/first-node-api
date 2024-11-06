import factorial from '../controllers/factorialController'
import {Router} from 'express'

export const factorialRouter = Router();

factorialRouter.get('/', factorial);

