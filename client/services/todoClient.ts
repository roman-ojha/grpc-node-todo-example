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
          email: "razzroman@gmail.com",
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

  getTodoItems() {
    this.todoClient.getTodoItems({ userId: 2 }, (err, response) => {
      if (err) {
        console.log(err.message);
        return;
      }
      console.log(response);
    });
  }

  getTodoItemsStream() {
    var call = this.todoClient.getTodoItemsStream({ userId: 2 });
    call.on("data", (response) => {
      console.log(response);
    });
    call.on("end", () => {
      console.log("Stream ended");
    });
    call.on("error", (err) => {
      console.log(err.message);
    });
  }
}

export default TodoClient;
