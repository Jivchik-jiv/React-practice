import React from 'react';
import {booksApi} from './../../services/api';

class Books extends React.Component {

    state = {
        books: []
    }

    componentDidMount() {
        booksApi.fetchRecommendedBooks()
        .then(books=>{
            this.setState({books})
        })
    }

    render () {
        return (
            <div className = "mainBox">
                <h1>Books</h1>
                <div className = {styles.booksWrap}>
                    <ul>
                        {this.state.books.map(book=> {
                            
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}



export default Books;