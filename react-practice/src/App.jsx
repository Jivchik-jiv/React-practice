import React from 'react';
import ColorPicker from './content/ColorPicker/ColorPicker';
import Counter from './content/Counter/Counter';
import Layout from './content/Layout/Layout';
import Profile from './content/Profile/Profile';
import Todos from './content/Todos/Todos';
import user from './content/user.json'

const colorPickerOptions = [
  {label: "crimson",color: "#DC143C"},
  {label: "darkorange",color: "#FF8C00"},
  {label: "khaki",color: "#F0E68C"},
  {label: "lime",color: "#00FF00"},
  {label: "teal",color: "#008080"},
  {label: "navy",color: "#000080"},
  {label: "indigo",color: "#4B0082"},
]


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


  render() { 
    const todos= this.state.todos;
    const deleteTodo = this.deleteTodo;
    return(
      <>
      <Layout >
        <Profile {...user}/>
        <ColorPicker colors = {colorPickerOptions}/>
        <Counter />
        <Todos todos = {todos} deleteTodo = {deleteTodo} />
      </Layout>
      </>
    );
  }
}
 
export default App;

