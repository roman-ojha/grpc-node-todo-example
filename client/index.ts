import { loadPackageDefinition, credentials } from "@grpc/grpc-js";
import { loadSync } from "@grpc/proto-loader";

const PROTO_PATH = __dirname + "/../protos/todo.proto";
const packageDefinition = loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
const todo: any = loadPackageDefinition(packageDefinition).todo;
const client = new todo.Todo("localhost:50051", credentials.createInsecure());
