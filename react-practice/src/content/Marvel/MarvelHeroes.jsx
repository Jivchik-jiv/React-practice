import React from 'react';
import { NavLink} from 'react-router-dom';
import styles from './Marvel.module.css';
import cx from "classnames";



const MarvelHeroes = ({heroes,match}) =>{

    const makeOptionClasses=(isGood)=>{
        return cx({
            [styles.heroBox]: true,
            [styles.good]: isGood,
            [styles.bad]: !isGood
        })
    }
   
        return (
            <div className = {styles.mainWrap}>
                {heroes.map(({id, name, image, age, isGood})=>{
                    return (
                        <div className = {makeOptionClasses(isGood)} key = {id}>
                            <h2 className = {styles.smallTitle}>{name}</h2>
                            <p className = {styles.text}>{age} years old</p>
                            <img src={image} alt={name} className = {styles.heroImg}/>
                            <NavLink  
                            to = {`${match.url}/${id}`} 
                            className = {styles.link} 
                            activeClassName= {styles.active}>Show movies</NavLink>
                        </div>
                    )
                })}
               
            </div>
        )
    
}


export default MarvelHeroes;