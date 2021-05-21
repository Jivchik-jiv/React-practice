import React from "react";
import NewContactForm from "./NewContact";
import styles from "./Phonebook.module.css";
import {ReactComponent as AddIcon} from '../../Icons/add.svg'
import IconButton from "../Common/IconButton/IconButton";
import Modal from "../Common/Modal/Modal";

const ContactsFilter = ({ handleChange, filterContacts }) => {
  return (
    <div  className = {styles.filter}>
      <label>
      <p>Filter contatcs</p>
      <input
        type="text"
        name="filter"
        value={filterContacts}
        onChange={handleChange}
      />
    </label>
    </div>
    
  );
};

const Contacts = ({ contacts, onContactDelete }) => {
  return (
    <div className={styles.contacts}>
      <ul className={styles.list}>
        {contacts.map((contact) => {
          return (
            <li key={contact.id} className={styles.contactItem}>
             
              <span>{contact.name}:</span>  
              <span>{contact.phone}</span>
              <button
                className={styles.delete}
                type="button"
                onClick={()=>onContactDelete(contact.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

class Phonebook extends React.Component {
  state = {
    name: "",
    phone: "",
    showModal: false,
  };

  handleNewContactChange = (e) => {
    const { value, name } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createContact(this.state.name, this.state.phone);
    this.setState({ name: "", phone: "", showModal: false});
  };

  toggleModal =()=> {
    this.setState(({showModal})=>({
      showModal: !showModal
    }))
  }

  render() {
    return (
      <div className={styles.phonebook}>
        <h1>Phonebook</h1>
        <div className = {styles.iconWrap}>
        <IconButton onClick = {this.toggleModal} aria-label= "Add phone">
          <AddIcon width="40"/>
        </IconButton>
        <span>Add contact</span>
        </div>
        
        {this.state.showModal
         && 
        <Modal closeModal = {this.toggleModal}>
          <NewContactForm
          name={this.state.name}
          handleChange={this.handleNewContactChange}
          handleSubmit={this.handleSubmit}
          phone={this.state.phone}
        />
        </Modal>
        }
        <ContactsFilter
          handleChange={this.props.handleFilterChange}
          filterContacts={this.props.filterContatcs}
        />
        <Contacts
          contacts={this.props.contacts}
          onContactDelete={this.props.deleteContact}
          
        />
      </div>
    );
  }
}

export default Phonebook;
