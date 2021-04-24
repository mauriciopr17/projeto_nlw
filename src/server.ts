import express from "express";

import "./database";
import { routes } from "./routes";

const app = express();

//definindo que o express vai trabalhar com json
app.use(express.json());
app.use( routes );

/**
Principais métodos HTTP
GET
POST
PUT
DELETE
PATCH
Brownser só aceita métido GET para teste
 */

// app.get("/", (request, response) =>{
//   //return response.send("Olá NLW 05");
//   return response.json({
//     message: "Olá NLW 05"
//   });
// });

// app.post("/", (request, response) =>{
//     return response.json({
//       message: "Usuário salvo com sucesso"
//     })
// });


app.listen(3333, () =>{
  console.log('Server is running on port 3333');
});