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
          text: "Todo item",
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

  addTodoStreamItems() {
    var call = this.todoClient.addTodoStreamItems((err, response) => {
      if (err) {
        console.log(err.message);
        return;
      } else {
        console.log(response);
      }
    });
    let i = 0;
    const itemInterval = setInterval(() => {
      if (i < 5) {
        call.write({
          item: {
            text: "Todo item",
            userId: 2,
          },
        });
        i++;
      } else {
        clearInterval(itemInterval);
        call.end();
      }
    }, 200);
  }
}

export default TodoClient;
