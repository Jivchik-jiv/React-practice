import React from 'react';
import styles from './Marvel.module.css';


const MarvelMovies = ({movies}) =>{

   
   
        return (
            <div className = {styles.mainWrap}>
                {movies.map(({id, name, image, productionYear})=>{
                    return (
                        <div className = {styles.heroBox} key = {id}>
                            <h2 className = {styles.smallTitle}>{name}</h2>
                            <p className = {styles.text}>Production year: {productionYear}</p>
                            <img src={image} alt={name} className = {styles.heroImg}/>
                        </div>
                    )
                })}

            </div>
        )
    
}


export default MarvelMovies;