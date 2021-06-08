import React from 'react';
import styles from './Counter.module.css'

class Counter extends React.Component {

    state = {
        counterValue: 0,
    }

    handleIncrement = () =>{
        this.setState(prevState=> ({counterValue: prevState.counterValue + 1}))
    } 

    handleDecrement = () =>{
        this.setState(prevState=> ({counterValue: prevState.counterValue - 1}))
    } 

    render(){
        const counter = this.state.counterValue;
        return(
            <div className = "mainBox">
                <h2>Counter</h2>
                <p>{counter}</p>
                <button className = {styles.btn}
                        onClick = {this.handleIncrement}
                >Add</button>
                <button className = {styles.btn}
                        onClick = {this.handleDecrement}
                >Subtract</button>
            </div>
        )
    }
}

export default Counter;