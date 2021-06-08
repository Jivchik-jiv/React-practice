import React from "react";
import NewContactForm from "./NewContact";
import styles from "./Phonebook.module.css";
import {ReactComponent as AddIcon} from '../../Icons/add.svg'
import IconButton from "../Common/IconButton/IconButton";
import Modal from "../Common/Modal/Modal";
import {phonebookApi} from './../../services/api';

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
    contacts:[{name:"", phone:"", id:""}],
    filterContacts: ""
  };

  componentDidMount (){
    phonebookApi.fetchContacts()
    .then(contacts=>{
      this.setState({contacts})
    })
  }

  handleContactsFilterChange = (e) => {
    
    const value = e.currentTarget.value;
    this.setState({ filterContacts: value });
  };

  handleNewContactChange = (e) => {
    const { value, name } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const contact = {name: this.state.name, phone: this.state.phone}
    phonebookApi.addContact(contact).then(contact=>{
      this.setState(({contacts})=> ({ 
        name: "", 
        phone: "", 
        showModal: false,
        contacts: [...contacts, contact]
      }));
    })

  };

  handleDeleteContact = (contactId)=> {
    phonebookApi.deleteContact(contactId).then(()=>{
      this.setState((prevState) => ({
        contacts: prevState.contacts.filter((contact) => {
          return contact.id !== contactId;
        }),
      }));
    })
  }

  toggleModal =()=> {
    this.setState(({showModal})=>({
      showModal: !showModal
    }))
  }

  render() {
    const normalizedFilterContacts = this.state.filterContacts.toLowerCase();
    const getFilteredContatcs = () => {
      return this.state.contacts.filter((contact)=> {
        return contact.name.toLowerCase().includes(normalizedFilterContacts)
      })
    }
    return (
      <div className="mainBox">
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
          handleChange={this.handleContactsFilterChange}
          filterContacts={this.props.filterContatcs}
        />
        <Contacts
          contacts={getFilteredContatcs()}
          onContactDelete={this.handleDeleteContact}
          
        />
      </div>
    );
  }
}

export default Phonebook;
