import React from "react";
import NewContactForm from "./NewContact";
import styles from "./Phonebook.module.css";

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
  };

  handleNewContactChange = (e) => {
    const { value, name } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createContact(this.state.name, this.state.phone);
    this.setState({ name: "", phone: "" });
  };

  render() {
    return (
      <div className={styles.phonebook}>
        <h1>Phonebook</h1>
        <NewContactForm
          name={this.state.name}
          handleChange={this.handleNewContactChange}
          handleSubmit={this.handleSubmit}
          phone={this.state.phone}
        />
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
