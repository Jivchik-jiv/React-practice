import React from "react";
import ColorPicker from "./content/ColorPicker/ColorPicker";
import Counter from "./content/Counter/Counter";
import Layout from "./content/Layout/Layout";
import Profile from "./content/Profile/Profile";
import Todos from "./content/Todos/Todos";
import data from "./content/data.json";
import Form from "./content/Form/Form";
import shortid from "shortid";
import Feedback from "./content/Feedback/Feedback";
import Phonebook from "./content/Phonebook/Phonebook";
import Modal from "./content/Common/Modal/Modal";
import Tabs from "./content/Tabs/Tabs";


class App extends React.Component {
  state = {
    todos: [
      { id: 1, text: "I need to cill Rick", completed: false },
      { id: 2, text: "Buy three liters of milk", completed: true },
      { id: 3, text: "Meet with dr.Strange", completed: true },
    ],
    filterTodo: "",
    feedback: {
      good: 0,
      neutral: 0,
      bad: 0,
    },
    contacts: [
      { id: 1, name: "Bob Rassel", phone: "123-433-434-34" },
      { id: 2, name: "Rosy Daimon", phone: "555-122-342-24" },
      { id: 3, name: "Kventin  Queen", phone: "777-556-533" },
      { id: 4, name: "Charosy Swings", phone: "343-356-774-36" },
    ],
    filterContacts: "",
    showModal: false,
    showColorPicker: false,
    showProfile: false,
  };

  toggleModal = (e) => {
    const name = e.currentTarget.name;
    if(name) {
      switch (name) {
        case 'profile':
         this.setState(({showProfile})=>({showProfile: !showProfile}))
         break;
        case 'colorPicker':
         this.setState(({showColorPicker})=>({showColorPicker: !showColorPicker}))
         break;
       default:
         this.setState(({showModal})=>({showModal: !showModal}))
      } 
    } else {
      this.setState(()=>({showProfile: false, showColorPicker: false, showModal: false}))
    }
   
    
  }

  deleteTodo = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => {
        return todo.id !== todoId;
      }),
    }));
  };

  createTodo = (text) => {
    this.setState(({ todos }) => ({
      todos: [...todos, { id: shortid.generate(), text, completed: false }],
    }));
  };

  formSubmitHandler = (data) => {
    console.log(data);
  };

  toggleComleted = (todoId) => {
    this.setState(({ todos }) => ({
      todos: todos.map((todo) => {
        if (todoId === todo.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }

        return todo;
      }),
    }));
  };

  handleTodoFilterChange = (e) => {
    const value = e.currentTarget.value;
    this.setState({ filterTodo: value });
  };

  handleFeedbackChange = (e) => {
    const name = e.currentTarget.name;
    this.setState(({ feedback }) => ({
      feedback: { ...feedback, [name]: feedback[name] + 1 },
    }));
  };

  getTotalFeedback = () => {
    return Object.values(this.state.feedback).reduce(
      (acc, item) => acc + item,
      0
    );
  };

  handleContactsFilterChange = (e) => {
    
    const value = e.currentTarget.value;
    this.setState({ filterContacts: value });
  };

  createContact = (name, phone) => {
    const mutchedName = this.state.contacts.find((contact)=>{
      return contact.name === name;
    }) 
    if(mutchedName) {
      alert("This name already exists");
      return;
    }
    this.setState(({ contacts }) => ({
      contacts: [
        ...contacts,
        { id: shortid.generate(), name: name, phone: phone },
      ],
    }));
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => {
        return contact.id !== contactId;
      }),
    }));
  }

  render() {
    const normalizedFilterTodo = this.state.filterTodo.toLowerCase();
    const getFilteredTodos = () => {
      return this.state.todos.filter((todo) => {
        return todo.text.toLowerCase().includes(normalizedFilterTodo);
      });
    };
    const positiveFeedback = this.state.feedback.good
      ? ((this.state.feedback.good / this.getTotalFeedback()) * 100).toFixed(2)
      : 0;

      const normalizedFilterContacts = this.state.filterContacts.toLowerCase();
      const getFilteredContatcs = () => {
        return this.state.contacts.filter((contact)=> {
          return contact.name.toLowerCase().includes(normalizedFilterContacts)
        })
      }
    return (
      <>
        <Layout>
        <button type = "button" onClick = {this.toggleModal} name = "profile">Profile</button>
        {this.state.showProfile && <Modal closeModal = {this.toggleModal}> <Profile {...data.user} /> </Modal>}
        <button type = "button" onClick = {this.toggleModal} name = "colorPicker">Color Picker</button>
        {this.state.showColorPicker 
        && <Modal closeModal = {this.toggleModal}> 
              <ColorPicker colors={data.colors} /> 
          </Modal>}
          
          <Counter />
          <Todos
            todos={getFilteredTodos()}
            deleteTodo={this.deleteTodo}
            onToggleCompleted={this.toggleComleted}
            createTodo={this.createTodo}
            handleFilterChange={this.handleTodoFilterChange}
          />
          <Form formSubmitHandler={this.formSubmitHandler} />
          <Feedback
            feedbackData={this.state.feedback}
            onFeedbackChange={this.handleFeedbackChange}
            getTotalFeedback={this.getTotalFeedback}
            positiveFeedback={positiveFeedback}
          />
          <Phonebook
            contacts={getFilteredContatcs()}
            createContact={this.createContact}
            handleFilterChange={this.handleContactsFilterChange}
            filterContacts = {this.state.filterContacts}
            deleteContact = {this.deleteContact}
          />
          <Tabs tabs = {data.tabs}/>

        </Layout>
        
        
      </>
    );
  }
}

export default App;
