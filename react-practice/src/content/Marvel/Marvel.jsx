import React from "react";
import styles from "./Marvel.module.css";
import { marvelApi } from "./../../services/api";
import MarvelHeroes from "./MarvelHeroes";
import MarvelMovies from "./MarvelMovies";
import { NavLink, Route } from "react-router-dom";

class Marvel extends React.Component {
  state = {
    heros: [],
    movies: [],
  };


   getMovies = () =>{

    const heroId = +this.props.location.pathname.slice(-1);
    const heroMovies = this.state.movies.filter(movie=>{
        return movie.heroId===heroId
    })
     
      return heroMovies;
  }

  componentDidMount() {
    marvelApi.fetchHeros().then((heros) => {
      this.setState({ heros });
    });

    marvelApi.fetchMovies().then((movies) => {
      this.setState({ movies });
    });
  }

  render() {
    return (
      <div className="mainBox">
        <h1>Marvel</h1>
        <nav className = {styles.nav}>
          <NavLink to="/marvel/heros" activeClassName ={styles.active} className = {styles.link}>Heroes</NavLink>
          <NavLink to="/marvel/movies" activeClassName ={styles.active} className = {styles.link}>Movies</NavLink>
        </nav>
        
        <Route
          path="/marvel/movies"
          render={() => <MarvelMovies movies={this.state.movies} />}
        />
        <Route
          path="/marvel/heros"
          render={(props) => (
            <MarvelHeroes
              heroes={this.state.heros}
              {...props}
              movies={this.state.movies}
            />
          )}
        />
         <Route path="/marvel/heros/:heroId" render={()=><MarvelMovies movies={this.getMovies()}/>}/>
      </div>
    );
  }
}

export default Marvel;
