import React from "react";
import styles from "./Todos.module.css";
import cx from "classnames";

const TodoList = ({ todos, onToggleCompleted, deleteTodo }) => {
  const makeOptionClasses = (completed) => {
    return cx({ [styles.todosItem]: true, [styles.done]: completed });
  };

  return (
    <div className={styles.todosBody}>
      {todos.map(({ id, text, completed }) => {
        return (
          <div className={makeOptionClasses(completed)} key={id}>
            {" "}
            <input
              type="checkbox"
              className={styles.todosCheckbox}
              checked={completed}
              onChange={() => onToggleCompleted(id)}
            />
            <p>{text}</p>
            <button className={styles.todosBtn} onClick={() => deleteTodo(id)}>
              X
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
