import { TodoServiceHandlers } from "../../proto/services/todo/v1/TodoService";

const todoService: TodoServiceHandlers = {
  AddTodoItem(call, callback) {
    console.log(call.request);
    callback(null, { item: call.request.item });
  },
  GetTodoItems(call, callback) {},
  GetTodoItemsStream(call) {},
  AddTodoStreamItems(call, callback) {},
  AddTodoStreamItemsStreamReturn(call) {},
};

export default todoService;
