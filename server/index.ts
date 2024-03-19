import fs from "fs";
import path from "path";
import {
  loadPackageDefinition,
  Server,
  ServerCredentials,
} from "@grpc/grpc-js";
import { loadSync } from "@grpc/proto-loader";
import todoServices from "./services/todo";

const PROTO_PATH = __dirname + "/../protos/todo.proto";
const packageDefinition = loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
const todo: any = loadPackageDefinition(packageDefinition).todo;

const PORT = process.env.PORT || 50051;
const server = new Server();
server.addService(
  {
    ...todo.Todo.service,
  },
  {
    AddTodoItem: todoServices.addTodoItem,
    GetTodoItems: todoServices.getTodoItems,
    GetTodoItemsStream: todoServices.getTodoItemsStream,
    addTodoStreamItems: todoServices.addTodoStreamItems,
    addTodoStreamItemsResponseStream:
      todoServices.addTodoStreamItemsResponseStream,
  }
);

server.bindAsync(
  "0.0.0.0:" + PORT,
  ServerCredentials.createInsecure(),
  (err, port) => {
    console.log("Server running at 0.0.0.0:" + port);
  }
);
