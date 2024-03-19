import { UserResponse } from "proto/services/todo/v1/UserResponse";
import { TodoServiceHandlers } from "../../proto/services/todo/v1/TodoService";
import { db } from "../config/db";
import { Status } from "@grpc/grpc-js/build/src/constants";
import { TodoItemResponse } from "proto/services/todo/v1/TodoItemResponse";

const todoService: TodoServiceHandlers = {
  AddUser(call, callback) {
    const newUser: UserResponse = {
      id: db.users.length + 1,
      ...call.request.user,
    };
    const findUser = db.users.find((user) => user.email === newUser.email);
    if (findUser) {
      callback(
        {
          message: "User already exists",
          code: Status.ALREADY_EXISTS,
        },
        null
      );
      return;
    }
    db.users.push(newUser);
    db.writeUser(db.users);
    callback(null, {
      user: newUser,
    });
  },
  AddTodoItem(call, callback) {
    console.log(call.request);
    const item = call.request.item;
    if (!item) {
      callback(
        {
          message: "Please provide a todo item",
          code: Status.ALREADY_EXISTS,
        },
        null
      );
      return;
    }
    const findUser = db.users.find(
      (user) => user.id === parseInt(item.userId as any)
    );
    if (!findUser) {
      callback(
        {
          message: "User not found",
          code: Status.NOT_FOUND,
        },
        null
      );
      return;
    }
    const newTodoItem: TodoItemResponse = {
      id: db.todos.length + 1,
      isCompleted: false,
      ...item,
      userId: parseInt(item.userId as any),
    };
    db.todos.push(newTodoItem);
    db.writeTodo(db.todos);
    callback(null, {
      item: { ...call.request.item, id: 1, isCompleted: false },
    });
  },
  GetTodoItems(call, callback) {},
  GetTodoItemsStream(call) {},
  AddTodoStreamItems(call, callback) {},
  AddTodoStreamItemsStreamReturn(call) {},
};

export default todoService;
