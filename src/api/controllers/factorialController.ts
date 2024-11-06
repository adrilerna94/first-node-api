import {type Request, type Response} from 'express'
import httpStatus from 'http-status-codes'

// Ejercicio 3: Factorial de un número
const validateFactInput = (num: number): boolean => {
  return !isNaN(num) && Number.isInteger(num) && num >= 0;
};
const factorial = (req: Request, res: Response): Response => {
  const num: number = Number(req.query.number);
  const isValidRequest = validateFactInput(num);
  if (!isValidRequest) {
    return res.status(httpStatus.BAD_REQUEST).send({
      error: 'ERROR. Número no válido. Recuerda indicar un número positivo y entero en la URL. Ej: number/2',
    });
  }
  if (num === 0 || num === 1) {
    return res.json({ factorial: 1 });
  }
  let factorial: number = num;
  for (let i: number = 1; i < num; i += 1) {
    factorial *= i;
  }
  return res.status(httpStatus.ACCEPTED).json({factorial: factorial});
};

export default factorial;
