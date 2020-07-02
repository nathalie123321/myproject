import React, { Component } from "react";
class banner extends Component {
  constructor(props) {
    super(props);
    this.state = { 
    };
  }
  render() {
    return (
        <React.Fragment>
          <div className="banner" style={{ width: "100%", height: "300px"}}> 
          <div className="container" style={{ textAlign: "center", color: "white", paddingTop: "40px"}}>
          <h2>Welcome to</h2>
          <h1>Yoga Bidjam</h1>
          <h3>Together we grow</h3>
          </div>      
          </div>
 
      </React.Fragment>
    );
  }
}
export default banner;
