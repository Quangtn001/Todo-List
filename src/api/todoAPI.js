class todoAPI {
  todos = [
    {
      id: 1,
      status: 0,
      name: "learn React JS",
    },
    {
      id: 2,
      status: 1,
      name: "learn JS",
    },
    {
      id: 3,
      status: 2,
      name: "learn HTML",
    },
    {
      id: 4,
      status: 0,
      name: "learn CSS",
    },
  ];
  get(id = false) {
    if (!id) {
      return this.todos;
    }
    return this.todos.find((item) => item.id === id);
  }
  save(todo) {
    if (todo.id === undefined) {
      const ids = this.todos.map((todo) => todo.id);
      const lastedID = Math.max(...ids);
      //add id into object todo
      todo = {
        ...todo,
        id: lastedID + 1,
      };
      this.todos.push(todo);
      return todo;
    } else {
      //find by id
      this.todos = this.todos.map((oldTodo) =>
        oldTodo.id === todo.id ? todo : oldTodo
      );
      return todo;
    }
  }
  delete(id) {
    const newTodos = this.todos.filter((oldTodo) => oldTodo.id !== id);
    this.todos = newTodos;
    return true;
  }
}
export default new todoAPI();
