import React from "react";
import styles from "./Phonebook.module.css";


const NewContactForm = ({name, handleChange, handleSubmit, phone}) => {
    return (
      <form onSubmit = {handleSubmit} className = {styles.form}>
        <label>
            <p>Name</p>
            
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, 
            тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value = {name}
            onChange = {handleChange}
          />
        </label>
        <label >
            <p>Phone</p>
            
        <input
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value = {phone}
            onChange = {handleChange}
  
  
          />
        </label>
        <button>
            Add contact
        </button>
      </form>
    );
   
  };

  export default NewContactForm;