import React, { Component } from "react";

class BackBtn extends Component {
  render() {
    return <a className="backBtn" onClick={this.props.prev} />;
  }
}
export default BackBtn;
