import { TodoServiceClient } from "proto/services/todo/v1/TodoService";

class TodoClient {
  todoClient: TodoServiceClient;
  constructor(todoClient: TodoServiceClient) {
    this.todoClient = todoClient;
  }

  addUser() {
    this.todoClient.addUser(
      {
        user: {
          email: "razz@gmail.com",
          password: "roman123",
        },
      },
      (err, response) => {
        if (err) {
          console.log(err.message);
          return;
        }
        console.log("Response: \n" + JSON.stringify(response));
      }
    );
  }

  addTodoItem() {
    this.todoClient.addTodoItem(
      {
        item: {
          text: "First todo item",
          userId: 2,
        },
      },
      (err, response) => {
        if (err) {
          console.log(err.message);
          return;
        }
        console.log("Response: \n" + JSON.stringify(response));
      }
    );
  }
}

export default TodoClient;
