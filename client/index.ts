import fs from "fs";
import path from "path";
import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
// import todoServices from "./services/todoService";
import { ProtoGrpcType } from "../proto/todo_service";
import TodoClient from "./services/todoClient";

const PORT = process.env.SERVER_PORT || 50051;
const PROTO_PATH = path.resolve(
  __dirname,
  "../proto/services/todo/v1/todo_service.proto"
);
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const todoGrpcObj = grpc.loadPackageDefinition(
  packageDefinition
) as unknown as ProtoGrpcType;
const todoPackage = todoGrpcObj.services.todo.v1;

const todoClient = new todoPackage.TodoService(
  `0.0.0.0:${PORT}`,
  grpc.credentials.createInsecure()
);

const deadline = new Date();
deadline.setSeconds(deadline.getSeconds() + 5);
// We will wait for the server to be ready until the deadline
todoClient.waitForReady(deadline, (err) => {
  if (err) {
    console.error(err);
    return;
  }

  // Now we will call all the methods of the service here
  const todo = new TodoClient(todoClient);
  // todo.addUser();
  todo.addTodoItem();
});
