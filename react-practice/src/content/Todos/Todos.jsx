import React from "react";
import IconButton from "../Common/IconButton/IconButton";
import Modal from "../Common/Modal/Modal";
import TodoFilter from "./TodoFilter";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import styles from "./Todos.module.css";
import { ReactComponent as AddIcon } from "../../Icons/add.svg";
import {todosApi} from '../../services/api'

class Todos extends React.Component {
  state = {
    todos: [],
    showForm: false,
    filterTodo: "",
  };

  componentDidMount() {
   todosApi.fetchTodos().then((todos) => {
      this.setState({
        todos: todos,
      });
    });
  }


  toggleModal = () => {
    this.setState(({ showForm }) => ({ showForm: !showForm }));
  };

  toggleCompleted = (todoId) => {
      const todo = this.state.todos.find(({id})=> id===todoId);
      const {completed} = todo;
      const update = {completed: !completed};

    todosApi.updateTodo(todoId, update).then(updatedTodo=>{
        this.setState(({todos})=>({
            todos: todos.map(todo=>(todo.id === updatedTodo.id ? updatedTodo : todo))
        }))
    })
  };

  deleteTodo = (todoId) => {
    todosApi.deleteTodo(todoId).then((responce)=>{
        this.setState((prevState) => ({
            todos: prevState.todos.filter((todo) => {
              return todo.id !== todoId;
            }),
          }));
    })
   
  };

  createTodo = (text) => {
      const todo= {
          text,
          completed: false
      }

      todosApi.createTodo(todo).then(newTodo=>{
          this.setState(({todos})=> ({todos: [ ...todos, newTodo]}));
          this.toggleModal()
      })
   
     
  };


  handleTodoFilterChange = (e) => {
    const value = e.currentTarget.value;
    this.setState({ filterTodo: value });
  };

  render() {
    const normalizedFilterTodo = this.state.filterTodo.toLowerCase();
    const getFilteredTodos = () => {
        return this.state.todos.filter((todo) => {
          return todo.text.toLowerCase().includes(normalizedFilterTodo);
        });
      };
    return (
      <div className="mainBox">
        <h1 className={styles.title}>Todo List</h1>
        <div className={styles.addWrap}>
          <IconButton onClick={this.toggleModal} aria-label="Add todo">
            <AddIcon width="30" height="30" stroke="#fff" />
          </IconButton>
          <span>Add todo</span>
        </div>

        {this.state.showForm && (
          <Modal closeModal={this.toggleModal}>
            <TodoForm createTodo={this.createTodo} />
          </Modal>
        )}

        <TodoFilter
          handleChange={this.handleTodoFilterChange}
          filterText={this.state.filterTodo}
        />
        <TodoList
          todos={getFilteredTodos()}
          onToggleCompleted={this.toggleCompleted}
          deleteTodo={this.deleteTodo}
        />
      </div>
    );
  }
}

export default Todos;
