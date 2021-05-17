import React from 'react';
import TodoFilter from './TodoFilter';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import styles from './Todos.module.css'

const Todos = (props) => {
                    
   

    return (
        <div className ={styles.todos}>
            <h1 className = {styles.title}>Todo List</h1>
            <TodoForm createTodo = {props.createTodo}/>
            <TodoFilter handleChange = {props.handleFilterChange} filterText = {props.filterText}/>
            <TodoList {...props}/>
            

           
        </div>
    )
}

export default Todos;