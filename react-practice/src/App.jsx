import React from 'react';
import ColorPicker from './content/ColorPicker/ColorPicker';
import Counter from './content/Counter/Counter';
import Layout from './content/Layout/Layout';
import Profile from './content/Profile/Profile';
import Todos from './content/Todos/Todos';
import data from './content/data.json'
import Form from './content/Form/Form';



class App extends React.Component {
  state = { 
    todos: [
      {id:1, text: "I need to cill Rick", status: false},
      {id:2, text: "Buy three liters of milk", status: true},
      {id:3, text: "Meet with dr.Strange", status: true}
    ]
   }

   deleteTodo = (todoId) => {
      this.setState(prevState => ({
       todos: prevState.todos.filter((todo)=> {
         return todo.id !== todoId;
       })
      }))
   }

   formSubmitHandler = (data) => {
     console.log(data);
   }


  render() { 
    const todos= this.state.todos;
    const deleteTodo = this.deleteTodo;
    return(
      <>
      <Layout >
        <Profile {...data.user}/>
        <ColorPicker colors = {data.colors}/>
        <Counter />
        <Todos todos = {todos} deleteTodo = {deleteTodo} />
        <Form formSubmitHandler = {this.formSubmitHandler}/>
      </Layout>
      </>
    );
  }
}
 
export default App;

