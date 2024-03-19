import fs from "fs";
import path from "path";
import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import todoServices from "./services/todoService";
import { ProtoGrpcType } from "../proto/todo_service";
import { TodoServiceHandlers } from "../proto/services/todo/v1/TodoService";

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

const PORT = process.env.PORT || 50051;
const server = new grpc.Server();
server.addService(todoPackage.TodoService.service, todoServices);

server.bindAsync(
  "0.0.0.0:" + PORT,
  grpc.ServerCredentials.createInsecure(),
  (err, port) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`Server running at 0.0.0.0:${port}`);
    // server.start();
  }
);
