//importamos typos request y response
import { type Request, type Response } from 'express';
//importamos httpstatus. Antes instalar dependencia: npm install http-status-codes
import httpStatus from 'http-status-codes';

// Ejercicio 4: calculadora (suma, resta, multiplicación, división

// Calculamos las operaciones en funciones separadas

const _sum = (a: number, b: number) => a + b;
const _substract = (a: number, b: number) => a - b;
const _multiply = (m: number, y: number) => m * y;
const _validateDivision = (a: number, b: number): boolean =>  b === 0 ? false : true;
const _division = (a: number, b: number) => a / b;

// hacemos función calculadora que las agrupe todas
function sum(req: Request, res: Response) {
  //get from body the numbers
  const { a, b } = req.body;
  const result: number = _sum(a, b);
  return res.json({ suma: `${result}` });
}

function substract(req: Request, res: Response) {
  //get from body the numbers
  const { a, b } = req.body;
  const result: number = _substract(a, b);
  return res.json({ suma: `${result}` });
}

function division(req: Request, res: Response) {
  //get from body numbers
  const { a, b } = req.body;
  const isValidDivision = _validateDivision(a, b);
  if (!isValidDivision) {
    return res.status(httpStatus.UNPROCESSABLE_ENTITY).send('División por zero'); //status(422)
  }
  const result: number = _division(a, b);
  return res.json({ division: `${result}` });
}

function multiply (req: Request, res: Response) {
  const {a, b} = req.body;
  const result: number = _multiply(a,b);
  return res.json({multiplication : `${a} * ${b} = ${result}`});
}

export {sum, substract, division, multiply};

// if (req.query.number === undefined || req.query.number === '') {
//   return res.status(httpStatus.BAD_REQUEST).send({
//     error: "ERROR. Número requerido"
//   });
// }
// if (isNaN(numero)){
//   return res.status(httpStatus.BAD_REQUEST).send({
//     error: 'ERROR. Proporcione un número válido en la URL, ejemplo: /numero/3'
//   });
// }
// if (numero < 2 || numero > 5){
//   return res.status(httpStatus.BAD_REQUEST).send({
//     error: 'ERROR. Out of range.Proporciona un número del 2 al 5 ambos incluidos'
//   });
// }

// const validateMultipTabInput = (req: Request) : boolean => {
//   const numero : number = Number (req.query.number); //accedemos al valor del parametro de la query number a través de una solicitud GET y transformamos de string a number
//   if (req.query.number === undefined || req.query.number === '') {
//     return false;
//   }
//   if (isNaN(numero)){
//     return false;
//   }
//   if (numero < 2 || numero > 5){
//     return false;
//   }
//   return true;
// }
