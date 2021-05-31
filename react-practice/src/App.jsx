import React from "react";
import ColorPicker from "./content/ColorPicker/ColorPicker";
import Counter from "./content/Counter/Counter";
import Layout from "./content/Layout/Layout";
import Profile from "./content/Profile/Profile";
import Todos from "./content/Todos/Todos";
import Form from "./content/Form/Form";
import Feedback from "./content/Feedback/Feedback";
import Phonebook from "./content/Phonebook/Phonebook";
import Modal from "./content/Common/Modal/Modal";
import Tabs from "./content/Tabs/Tabs";
import Articles from "./content/Articles/Articles";


class App extends React.Component {
  state = {
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

 
  formSubmitHandler = (data) => {
    console.log(data);
  };

 

  render() {
    return (
      <>
        <Layout>
        <button type = "button" onClick = {this.toggleModal} name = "profile">Profile</button>
        {this.state.showProfile && <Modal closeModal = {this.toggleModal}> <Profile /> </Modal>}
        <button type = "button" onClick = {this.toggleModal} name = "colorPicker">Color Picker</button>
        {this.state.showColorPicker 
        && <Modal closeModal = {this.toggleModal}> 
              <ColorPicker /> 
          </Modal>}
          
          <Counter />
          <Todos/>
          <Form formSubmitHandler={this.formSubmitHandler} />
          <Feedback />
          <Phonebook/>
          <Tabs/>
          <Articles/>

        </Layout>
        
        
      </>
    );
  }
}

export default App;
