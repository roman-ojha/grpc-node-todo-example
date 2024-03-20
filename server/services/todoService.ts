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
      item: newTodoItem,
    });
  },
  GetTodoItems(call, callback) {
    const userId = call.request.userId;
    callback(null, {
      items: db.todos.filter((item) => item.userId === parseInt(userId as any)),
    });
  },
  GetTodoItemsStream(call) {
    const userId = call.request.userId;
    const items = db.todos.filter(
      (item) => item.userId === parseInt(userId as any)
    );
    let i = 0;
    const itemInterval = setInterval(() => {
      if (i < items.length) {
        call.write({ item: items[i] });
        i++;
      } else {
        clearInterval(itemInterval);
        call.end();
      }
    }, 200);
  },
  AddTodoStreamItems(call, callback) {
    let addedItems: TodoItemResponse[] = [];
    const todoLength = db.todos.length;
    call.on("data", ({ item }) => {
      const newTodoItem: TodoItemResponse = {
        id: todoLength + addedItems.length + 1,
        isCompleted: false,
        ...item,
        userId: parseInt(item.userId as any),
      };
      addedItems.push(newTodoItem);
    });
    call.on("end", () => {
      db.todos.push(...addedItems);
      db.writeTodo(db.todos);
      callback(null, { items: addedItems });
    });
  },
  AddTodoStreamItemsStreamReturn(call) {
    call.on("data", (data) => {
      console.log(data);
      call.write(data);
    });
    call.on("end", () => {
      console.log("Stream ended");
      call.end();
    });
  },
};

export default todoService;
