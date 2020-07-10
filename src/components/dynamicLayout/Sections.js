import React, { Component } from "react";
import DynamicCols from "./dynamicCols";
class Sections extends Component {
  render() {
    let { vals, backgroundColor, color, padding } = this.props;
    let fontColor = color ? color : "";
    let paddingTopBottom = padding ? padding : "";
    let backgroundColorLocal = backgroundColor ? backgroundColor : "";
    return (
      <section key="" className={backgroundColorLocal + " " + paddingTopBottom + " " + fontColor}>
        <div className="container">
          <DynamicCols key={vals.id} vals={vals}/>
        </div>
      </section>
    );
  }
}

export default Sections;