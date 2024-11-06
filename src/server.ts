import {calculatorRouter}  from "./api/routers/calculatorRouter"
import { factorialRouter } from "./api/routers/factorialRouter";
import { multiplyTableRouter } from "./api/routers/multiplyTableRouter";

import './loadEnvironment.js';
import express from 'express';

// Initialize express
const app = express();

app.use(express.json()) // <-- esto de aqui me convierte el body en json.
// https://www.geeksforgeeks.org/express-js-express-json-function/

const port = process.env.HOST_PORT ?? '3000';
const alumnos:string [] = [
  "Sofía Ramírez",
  "Javier Pérez",
  "Valentina López",
  "Andrés Gutiérrez",
  "Camila Torres",
  "Martín Vargas",
  "Lucía Herrera",
  "Diego Castillo",
  "Isabela Mendoza",
  "Mateo Morales",
  "Gabriela Sánchez",
  "Daniela Rojas",
  "Carlos Gómez",
  "Alejandra Fernández",
  "Ricardo Navarro",
  "Mariana Salazar",
  "Felipe Ortega",
  "Paula Aguirre",
  "Héctor Campos"
];
const totalAlumnos:number = alumnos.length;
const introMsn:string = "Hello internaut. This is my first Node API 💪🏽<br>Endpoints available:<br> /ping <br> /alumnos";

// Crear un array de objetos con las propiedades nombre y apellido
const alumnoObj : object = alumnos.map(persona => {
  const [nom,cognom] = persona.split(" "); // Desestructuramos el nombre y apellido
  return { nom, cognom }; // Creamos y devolvemos el objeto
});

app.get('/', (req, res) => {
  res.send(introMsn);
});

app.get('/ping', (req, res) => res.send('pong'));

app.get('/alumnos', (req, res) => {
  res.json({
    alumnes:alumnoObj,
    totalAlumnes:totalAlumnos
  })

});

app.use('/calculator' , calculatorRouter)
app.use('/multiplyTable', multiplyTableRouter)
app.use('/factorial', factorialRouter)

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  console.log(`⚡️[server]: Server is running at http://localhost:${port}/calculadora`);
});


export default app;
