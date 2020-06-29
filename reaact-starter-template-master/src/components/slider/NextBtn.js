import React, { Component } from "react";
class NextBtn extends Component {
  render() {
    return <a className="nextBtn" onClick={this.props.next} />;
  }
}
export default NextBtn;
