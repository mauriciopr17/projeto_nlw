import express from "express";
import { createServer } from "http";
import { Server, Socket} from "socket.io";
import path from "path";//para criar o caminho de uma aplicação

import "./database";
import { routes } from "./routes";

const app = express();

//para conseguirmos usar o conteúdo do html da pasta public do 
//para testar http://localhost:3333/pages/client/
app.use(express.static(path.join(__dirname, "..","public")));
app.set("views", path.join(__dirname, "..", "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");


app.get("/pages/client", (request, response) =>{
  return response.render("html/client.html");
});

const http = createServer( app );//criando protocolo http
const io = new Server(http); //criando protocolo websocket

//quando o usuário se conecta ao websocket
io.on("connection", ( socket: Socket) =>{
  console.log("Se conectou",socket.id);
});

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

export { http, io };