import React, { Component } from "react";
import { Link } from "react-router-dom";
import logoImg from "../../img/logo.jpg";
class hamburgerNav extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        title: "",      
        open: false,
        path: ""
    };
  }

  componentDidMount = () => {
    this.setActiveStyle();
  };

  animateMenu = () => {
    this.setActiveStyle();
    this.setState({ open: !this.state.open });
  };

  setActiveStyle = () => {
    let currentUrl = window.location.pathname;
    console.log("current url : " + currentUrl);
    this.setState({ path: currentUrl });
  };

render() {
  let { open, path, title } = this.state;
    return (
    <React.Fragment>
      <div className="header-top">   </div>  
      <header className="header"> 
      <div className="container"> 
      <div className="col-12">
        <div id="nav-icon" className={open ? "open" : "closed"} onClick={this.animateMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="col-3 padding-top-bottom" id="logo" style={{backgroundImage: `url(${logoImg})`, backgroundRepeat: "no-repeat"}} > 
        
        </div>
      </div>
      
      <nav onClick={this.animateMenu}
         className={open ? "visible" : "hidden"}>
           {(() => {
             if (path === "/") {
                return (
                <Link className="active" to="/">
                  <h2>Home</h2>  
                </Link>
                );
              } else {
                return (
                <Link to="/">
                  <h2>Home</h2>  
                </Link>
                );
              }
            })()}
            
           {(() => {
             if (path === "/classes") {
                return (
                <Link className="active" to="/classes">
                  <h2>Classes</h2>
                </Link>
                );
              } else {
                return (
                <Link to="/classes">
                  <h2>Classes</h2>  
                </Link>
                );
              }
            })()}
            
           {(() => {
             if (path === "/booking") {
                return (
                <Link className="active" to="/booking">
                  <h2>Booking</h2>  
                </Link>
                );
              } else {
                return (
                <Link to="/booking">
                  <h2>Booking</h2> 
                </Link>
                );
              }
            })()}
            
        </nav>
      </div>
    </header>
   
  </React.Fragment>
    );
  }
}
export default hamburgerNav;