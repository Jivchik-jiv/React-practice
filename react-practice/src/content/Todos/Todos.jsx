import React from 'react';
import styles from './Todos.module.css'

const Todos = ({todos, deleteTodo}) => {

    const makeOptionClasses = (status) =>{
        const optionClasses = [styles.todosItem]
        if(status){
            optionClasses.push(styles.done)
        }
        return optionClasses.join(' ');
    }

    return (
        <div className ={styles.todos}>
            {todos.map(({id, text, status}) => {
                return (
                    <div 
                    className ={makeOptionClasses(status)}
                    key ={id}
                    >
                        <p>{text}</p>
                        <button 
                        className = {styles.todosBtn}
                        onClick = {()=>deleteTodo(id)}
                        >Delete</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Todos;