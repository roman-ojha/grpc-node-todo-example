class TodoServices {
  addTodoItem(call, callback) {
    console.log(call.request);
    callback(null, { message: "Success" });
  }
  getTodoItems() {}
  getTodoItemsStream() {}
  addTodoStreamItems() {}
  addTodoStreamItemsResponseStream() {}
}

export default new TodoServices();
