import React, { Component } from "react";
import todoAPI from "./api/todoAPI";
import "./app.scss";
import Form from "./components/form/Form";
import List from "./components/list/List";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.handleSaveTodo = this.handleSaveTodo.bind(this);
    this.handlePrepareEdit = this.handlePrepareEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  initTodo = { id: undefined, name: "", status: undefined };
  state = {
    todos: [this.initTodo],
    todo: this.initTodo,
  };
  renderData(todo) {
    const response = todoAPI.get();
    this.setState({
      ...this.state,
      todos: response,
      todo: todo ? todo : this.state.todo,
    });
  }
  componentDidMount() {
    this.renderData();
  }
  handleSaveTodo(todo) {
    todoAPI.save({ ...todo, status: todo.status ?? 0 });
    if (todo.id === undefined) {
      todo = { ...this.initTodo };
    }

    this.renderData({ ...this.initTodo });
  }
  handlePrepareEdit(todo) {
    this.setState({
      ...this.state,
      todo: todo,
    });
  }
  handleDelete(id) {
    todoAPI.delete(id);
    this.renderData();
  }
  render() {
    return (
      <div className="App">
        <div className="todo-list">
          <div className="title">ToDoList-App</div>
          <Form
            handleSaveTodo={this.handleSaveTodo}
            todo={this.state.todo}
            check={Math.random()}
          />
          <List
            todos={this.state.todos}
            handlePrepareEdit={this.handlePrepareEdit}
            handleDelete={this.handleDelete}
            handleSaveTodo={this.handleSaveTodo}
          />
        </div>
      </div>
    );
  }
}
