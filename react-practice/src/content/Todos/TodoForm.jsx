import React from "react";
import styles from "./Todos.module.css";

class TodoForm extends React.Component {
  state = {
    todoText: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.createTodo(this.state.todoText);
    this.setState({todoText: ""})
  };

  handleChange = (e) => {
    const value = e.currentTarget.value;
    this.setState({ todoText: value });
  };

  render() {
    const value  = this.state.todoText;
    return (
      <form onSubmit={this.handleSubmit} className={styles.todoForm}>
        <textarea
          className={styles.todoFormText}
          type="text"
          onChange={this.handleChange}
          value={value}
        />
        <button className={styles.todoFormBtn}>Add todo</button>
      </form>
    );
  }
}

export default TodoForm;
