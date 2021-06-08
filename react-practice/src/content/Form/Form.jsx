import React from "react";
import styles from "./Form.module.css";
import cx from 'classnames'

const Checkbox = (({value, item, onChange}) => {
 return(
   <label className = {styles.checkboxItem}>
     {item}
     <input 
     type = "checkbox"
     name ={item}
     checked ={value}
     onChange = {onChange}
   />
   </label>
   
 )
})

class Form extends React.Component {

languages = ["JS", "Java", "PHP", "C#", "Pyton"]  

languagesObj = this.languages.reduce((lngObj, lng)=>({
  ...lngObj, 
  [lng]: false
}), {})

  
 
  state = {
    firstName: "",
    lastName: "",
    level: "junior",
    checkboxes: {...this.languagesObj}
  }

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSubmit(this.state);
    this.setState({
      firstName: "",
      lastName: "",
      level: "junior",
      checkboxes: {...this.languagesObj}
    });
  }

  selectAllCheckboxes = (isSelected) => {
    Object.keys(this.state.checkboxes).forEach(checkbox=>{
      this.setState((prevState)=>({
          checkboxes: {...prevState.checkboxes,
          [checkbox]: isSelected}
      }))
    })
  }


  handleCheckboxChange = (e)=>{
    const {name} = e.target;
    this.setState((prevState)=> ({
      checkboxes: {...prevState.checkboxes,
      [name]: !prevState.checkboxes[name]}
    }))
    
  }

  selectAll = () => this.selectAllCheckboxes(true);
  deselectAll = () => this.selectAllCheckboxes(false);

  createCheckboxes = (options) => {
    return options.map((item)=> {
     return <Checkbox 
        key = {item}
        item = {item}
        value = {this.state.checkboxes[item]}
        onChange = {this.handleCheckboxChange}
        
        />
    })
  }
  

  render() {
    const { firstName, lastName } = this.state;
    const cancelBtnClasses = cx({[styles.checkboxBtn]: true, [styles.cancel]: true})
    return (
      <div className = "mainBox">
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <div className={styles.formBlock}>
          <label className={styles.textItem}>
            First Name:
            <input
              name="firstName"
              value={firstName}
              onChange={this.handleChange}
            />
          </label>
          <label className={styles.textItem}>
            Last Name:
            <input
              name="lastName"
              value={lastName}
              onChange={this.handleChange}
            />
          </label>
        </div>

        <div className={styles.formBlock}>
          <h2>Your level</h2>
          <label>
            <input type="radio" 
                   name="level" 
                   value="junior" 
                   checked = {this.state.level === "junior"}
                   onChange = {this.handleChange} />
            Junior
          </label>
          <label>
            <input type="radio" 
                   name="level" 
                   value="middle" 
                   checked = {this.state.level === "middle"}
                   onChange = {this.handleChange} />
            Middle
          </label>
          <label>
            <input type="radio" 
                   name="level" 
                   value="senior" 
                   checked = {this.state.level === "senior"}
                   onChange = {this.handleChange} />
            Senior
          </label>
        </div>
        <div className={styles.formBlock}>
          <h2>Your skills</h2>
          <div className = {styles.checkboxes}>
            {this.createCheckboxes(this.languages)}
          </div>
          <button className = {styles.checkboxBtn} onClick = {this.selectAll} type = "button" >Select all</button>
          <button className = {cancelBtnClasses} onClick = {this.deselectAll} type = "button">Select none</button>
          
        </div>
        <button type="submit">Submit</button>
      </form>
      </div>
    );
  }
}

export default Form;
