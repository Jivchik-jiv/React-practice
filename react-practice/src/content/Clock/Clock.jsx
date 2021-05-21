import React from 'react';
import styles from './Clock.module.css'

class Clock extends React.Component {
    state = {
        time: new Date ().toLocaleTimeString()
    }

    componentDidMount () {
        this.intervalId = setInterval(
            () => this.setState({time: new Date ().toLocaleTimeString()}), 1000
        )
    }

    componentWillUnmount () {
        clearInterval(this.intervalId)
    }

    intervalId = null;

    render () {

        return (
            <div className = {styles.clock}>
                {this.state.time}

            </div>
        )
    }
}

export default Clock;