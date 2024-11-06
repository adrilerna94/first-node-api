import {type Request, type Response} from 'express';
import httpStatus from 'http-status-codes';

//Ejercicio 2: tabla de multiplicar con números (2-5)
const validateMultipTabInput = (numero: number): boolean => {
  return !isNaN(numero) && numero >= 2 && numero <= 5;
};

const multipTable = (req: Request, res: Response): Response => {
  const numero: number = Number(req.query.number); //accedemos al valor y transformamos de string a number
  const isValidRequest: boolean = validateMultipTabInput(numero);
  if (!isValidRequest) {
    return res.status(httpStatus.BAD_REQUEST).send({
      error: 'ERROR. Número no valido. Recuerde introducir un número del 2 al 5',
    });
  }
  let result = '';
  for (let i = 0; i < 10; i += 1) {
    const operation = numero * i;
    result += `${numero} * ${i} = ${operation}\n`;
  }
  return res.json({tablaMultiplicar:`${result}`});

};

export default multipTable;

// FORMATO TABLA

 // iniciamos etiqueta tabla y definimos estilo
//  let table = '<table border="1" cellpadding="5" cellspacing="0">';
//  // hacemos tabla de multiplicar generando filas de la tabla
//  for (let i = 0; i < 9; i += 1) {
//    const result = numero * i;
//    table += `<tr><td>${numero} * ${i}</td><td>= ${result}</td></tr>\n`;
//  }
//  table += '</table>'; //cerramos la tabla
//  return res.send(table);
