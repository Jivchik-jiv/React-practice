import React from 'react';
import ColorPicker from './content/ColorPicker/ColorPicker';
import Counter from './content/Counter/Counter';
import Layout from './content/Layout/Layout';
import Profile from './content/Profile/Profile';
import Todos from './content/Todos/Todos';
import data from './content/data.json'
import Form from './content/Form/Form';
import shortid from 'shortid';



class App extends React.Component {
  state = { 
    todos: [
      {id:1, text: "I need to cill Rick", completed: false},
      {id:2, text: "Buy three liters of milk", completed: true},
      {id:3, text: "Meet with dr.Strange", completed: true}
    ]
   }

   deleteTodo = (todoId) => {
      this.setState(prevState => ({
       todos: prevState.todos.filter((todo)=> {
         return todo.id !== todoId;
       })
      }))
   }

   createTodo = (text) => {
     this.setState(({todos})=>({
        todos: [...todos, {id: shortid.generate(), text, completed: false}]
     }))
   }

   formSubmitHandler = (data) => {
     console.log(data);
   }

   toggleComleted = (todoId) => {
      this.setState(({todos})=> ({
        todos: todos.map((todo)=> {
          if (todoId ===todo.id){
            return {
              ...todo,
              completed: !todo.completed
            }
          }

          return todo;
        })
      }))
   }


  render() { 
    const todos= this.state.todos;
    return(
      <>
      <Layout >
        <Profile {...data.user}/>
        <ColorPicker colors = {data.colors}/>
        <Counter />
        <Todos todos = {todos} deleteTodo = {this.deleteTodo} onToggleCompleted = {this.toggleComleted} createTodo = {this.createTodo}/>
        <Form formSubmitHandler = {this.formSubmitHandler}/>
      </Layout>
      </>
    );
  }
}
 
export default App;

