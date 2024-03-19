import { UserResponse } from "proto/services/todo/v1/UserResponse";
import { TodoServiceHandlers } from "../../proto/services/todo/v1/TodoService";
import { db } from "../config/db";

const todoService: TodoServiceHandlers = {
  AddUser(call, callback) {
    // console.log(db);
    const newUser: UserResponse = {
      id: db.users.length + 1,
      ...call.request.user,
    };
    const findUser = db.users.find((user) => user.email === newUser.email);
    console.log(findUser);
    // db.users.push(newUser);
    // db.writeUser(db.users);
    callback(null, {
      user: newUser,
    });
  },
  AddTodoItem(call, callback) {
    console.log(call.request);
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
