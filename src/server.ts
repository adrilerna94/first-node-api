import './loadEnvironment.js';
import express from 'express';

// Initialize express
const app = express();
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

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});


export default app;
