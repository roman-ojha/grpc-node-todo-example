import path from "path";
import fs from "fs";
import { UserResponse } from "../../proto/services/todo/v1/UserResponse";
import { TodoItemResponse } from "../../proto/services/todo/v1/TodoItemResponse";

const userRes = fs.readFileSync(path.resolve(__dirname, "../db/users.json"));
const users: UserResponse[] = JSON.parse(userRes.toString());

const todoRes = fs.readFileSync(path.resolve(__dirname, "../db/todos.json"));

const todos: TodoItemResponse[] = JSON.parse(todoRes.toString());

const writeUser = (users: UserResponse[]) => {
  fs.writeFile(
    path.resolve(__dirname, "../db/users.json"),
    JSON.stringify(users),
    function (err) {
      if (err) {
        console.error(err);
        return;
      }
    }
  );
};

const writeTodo = (todos: TodoItemResponse[]) => {
  fs.writeFile(
    path.resolve(__dirname, "../db/todos.json"),
    JSON.stringify(todos),
    function (err) {
      if (err) {
        console.error(err);
        return;
      }
    }
  );
};

export const db = {
  users,
  todos,
  writeUser,
  writeTodo,
};
