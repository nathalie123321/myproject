//class component banner
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
        <div className="banner"> 
          <div className="container">   
            <div className="banner-content">                 
              <h2>Welcome to</h2>
              <h1>Yoga Bidjam</h1>
              <h3>Together we grow</h3>
            </div> 
          </div>      
        </div> 
      </React.Fragment>
    );
  }
}
export default banner;
