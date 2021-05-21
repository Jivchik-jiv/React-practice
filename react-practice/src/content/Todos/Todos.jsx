import React from 'react';
import IconButton from '../Common/IconButton/IconButton';
import Modal from '../Common/Modal/Modal';
import TodoFilter from './TodoFilter';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import styles from './Todos.module.css'
import {ReactComponent as AddIcon} from '../../Icons/add.svg'

class Todos extends React.Component {

    state = {
        showForm: false,
    }

    componentDidUpdate (prevProps, prevState) {
        if(this.props.todos.length>prevProps.todos.length) {
            this.setState(({showForm})=>({showForm: !showForm}))
        }
    }
          
    toggleModal = ()=> {
        this.setState(({showForm})=>({showForm: !showForm}))
    }

   render() {
        return (
        <div className ={styles.todos}>
            <h1 className = {styles.title}>Todo List</h1>
            <div className = {styles.addWrap}>
                <IconButton onClick = {this.toggleModal} aria-label = 'Add todo'>
                    <AddIcon width = "30" height = "30" stroke = "#fff"/>
                </IconButton>
                <span>Add todo</span>
                </div>
            
            {this.state.showForm && <Modal closeModal = {this.toggleModal}>
                <TodoForm createTodo = {this.props.createTodo}/>
                </Modal>}
           
            <TodoFilter handleChange = {this.props.handleFilterChange} filterText = {this.props.filterText}/>
            <TodoList {...this.props}/>
            

           
        </div>
    )
   }

   
}

export default Todos;