import { ServerUnaryCall, sendUnaryData } from "@grpc/grpc-js";
import { AddTodoItemRequest } from "proto/services/todo/v1/AddTodoItemRequest";
import { AddTodoItemResponse } from "proto/services/todo/v1/AddTodoItemResponse";

class TodoServices {
  addTodoItem(
    call: ServerUnaryCall<AddTodoItemRequest, AddTodoItemResponse>,
    callback: sendUnaryData<AddTodoItemResponse>
  ) {
    // console.log(call.request);
    // callback(null, { message: "Success" });
  }
  getTodoItems() {}
  getTodoItemsStream() {}
  addTodoStreamItems() {}
  addTodoStreamItemsResponseStream() {}
}

export default new TodoServices();
