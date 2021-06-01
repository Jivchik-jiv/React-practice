import React from "react";
import styles from "./ImageGallery.module.css";

class SearchBar extends React.Component {
  state = {
    query: "",
  };

  handleChange = (e) => {
    this.setState({
        query: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.state.query)
    this.setState({query:""})
  }

  render() {
    return (
      <header className={styles.searchbar}>
        <form className={styles.searchForm} onSubmit = {this.handleSubmit}>
          <button type="submit" className={styles.button}>
            <span className={styles.label}>Search</span>
          </button>

          <input
            className={styles.input}
            type="text"
            autoComplete="off"
            autoFocus
            required
            placeholder="Search images and photos"
            value={this.state.query}
            onChange ={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export default SearchBar;
