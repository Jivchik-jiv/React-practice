import React from 'react';
import styles from './Articles.module.css';

class SearchForm extends React.Component {
    state={
        query: ""
    }

    handleChange = e => {
        this.setState({query: e.currentTarget.value})
    }

    handleSubmit = e => {
        e.preventDefault();

        this.props.onSubmit(this.state.query);
        this.setState({query: ""});
    }

    render () {
        return (
            <form onSubmit = {this.handleSubmit} className= {styles.form}>
                <input type="text"
                        value = {this.state.query}
                        onChange = {this.handleChange}
                        className = {styles.searchField}/>
                        
                <button className = {styles.searchBtn}>Search</button>
            </form>
        )
    }
}


export default SearchForm;