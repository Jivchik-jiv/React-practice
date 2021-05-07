import React from 'react';
import styles from './ColorPicker.module.css'


class ColorPicker extends React.Component {
    state = {
        selectedColorIndex: 0,
    }
    
    setAtiveIndex = (index) => {
        this.setState({selectedColorIndex: index})
    }

    makeOptionClasses = (index) =>{
        const optionClasses = [styles.colorBox]
        if(this.state.selectedColorIndex === index){
            optionClasses.push(styles.active)
        }
        return optionClasses.join(' ');
    }

    render (){
        const colors = this.props.colors;
        const selectedColorIndex = this.state.selectedColorIndex;
        return (
            <div className = {styles.colorPicker}>
                <h1>Colors to pick</h1>
                <p>Picked {colors[selectedColorIndex].label} color</p>
                <div>
                    {colors.map(({label, color}, index) =>{
                       return (<button 
                        key = {label}
                        className = {this.makeOptionClasses(index)}
                        style = {{background: color}}
                        onClick = {()=>this.setAtiveIndex(index)}
                        />)
                    })}
                </div>

            </div>
        )
    }
}


export default ColorPicker;