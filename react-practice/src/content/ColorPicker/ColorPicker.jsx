import React from "react";
import styles from "./ColorPicker.module.css";
import cx from "classnames";
import {colorsApi} from "./../../services/api";

class ColorPicker extends React.Component {
  state = {
    colors: [{label: "", color: ""}],
    selectedColorIndex: 0,
  };

  componentDidMount () {
    colorsApi.fetchColors().then(colors=>{
      this.setState({colors})
    })

  }


  setAtiveIndex = (index) => {
    this.setState({ selectedColorIndex: index });
  };

  makeOptionClasses = (index) => {
    return cx({
      [styles.colorBox]: true,
      [styles.active]: this.state.selectedColorIndex === index,
    });
  };

  render() {
   
    const colors = this.state.colors;
    const selectedColorIndex = this.state.selectedColorIndex;
    return (
      <div className="mainBox">
        <h1>Colors to pick</h1>
        <p>Picked {colors[selectedColorIndex].label} color</p>
        <div>
          {colors.map(({ label, color }, index) => {
            return (
              <button
                key={label}
                className={this.makeOptionClasses(index)}
                style={{ background: color }}
                onClick={() => this.setAtiveIndex(index)}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
