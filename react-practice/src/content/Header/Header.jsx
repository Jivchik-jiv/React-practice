import React from 'react';
import Clock from '../Clock/Clock';
import styles from './Header.module.css'

const Header = () => {
    return <div className = {styles.header}>
        <Clock />
        
    </div>
}


export default Header;