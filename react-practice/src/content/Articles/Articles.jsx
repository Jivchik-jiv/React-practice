import React from 'react';
import styles from './Articles.module.css';
import SearchForm from './SearchForm';
import {articlesApi} from './../../services/api'



class Articles extends React.Component {
    state = {
        articles: [],
        query: "",
        currentPage: 1,
        isLoading: false
    }

    componentDidUpdate(prevProps, prevState){

    }

    handleSubmit = (query) => {
        this.setState({query, aricles: [], currentPage: 1, isLoading: true})
        articlesApi.fetchArticles(query)
        .then((articles) => {
            this.setState({articles})
        }).finally(()=>{
            this.setState({isLoading: false})
        })
    }

    handleDownloadMore = () => {
        this.setState({isLoading: true})
        const {query, currentPage} = this.state;
        articlesApi.fetchArticles(query, currentPage + 1)
        .then((newArticles)=>{
            this.setState(({currentPage, articles})=> ({
                currentPage: currentPage + 1, 
                articles: [...articles, ...newArticles]}))
        }).finally(()=>{
            this.setState({isLoading: false})
        })
        

    }

    render(){
        return (
            <div className= {styles.articles}>
               <h1>Articles</h1>
               <SearchForm onSubmit = {this.handleSubmit}/>
               
                <ul>
                    {this.state.articles.map(({title, url})=>{
                        return (
                            <li key= {title}>
                                <a href={url}>{title}</a>
                              
                            </li>
                        )
                    })}
                    
                </ul>
                {this.state.isLoading? <h1>Downloading...</h1>: this.state.articles.length
                ?<div>
                <button type="button" onClick={this.handleDownloadMore}>Download more</button>
            </div>: null}
            </div>
        )
    }
}

export default Articles;