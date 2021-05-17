import React from "react";
import styles from "./Todos.module.css";


const TodoFilter = ({handleChange, filterText}) => {

    

        return (
            <div className = {styles.todoFilter}>
                <label>
                    <p>Filter by name</p> 
                    <input name = "todoFlter" value = {filterText} onChange = {handleChange}/>
                </label>
                
            </div>
        )
    
}


export default TodoFilter;