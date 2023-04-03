import React, { Component } from "react";
import "./form.scss";
export default class Form extends Component {
  state = {
    id: undefined,
    name: "",
    status: 0,
  };
  handleChange(e) {
    this.setState({
      ...this.state,
      name: e.target.value,
    });
  }
  componentDidUpdate(preProps, preState) {
    if (preProps.check !== this.props.check) {
      this.setState({
        ...this.state,
        id: this.props.todo.id,
        name: this.props.todo.name,
        status: this.props.todo.status,
      });
    }
  }
  handleChangeFormToSave() {
    this.setState({
      id: undefined,
      name: "",
      status: 0,
    });
  }
  render() {
    return (
      <div className="todo-form">
        {this.state.id && (
          <button
            className="edit-tag"
            onClick={() => this.handleChangeFormToSave()}
          >
            EDIT : {this.props.todo.name}
          </button>
        )}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.props.handleSaveTodo(this.state);
          }}
        >
          <input
            type="text"
            placeholder=" "
            name="name"
            value={this.state.name}
            onChange={(e) => this.handleChange(e)}
          />
          <button className="todo-save" placeholder="" type="submit">
            ADD<span>+</span>
          </button>
        </form>
      </div>
    );
  }
}
