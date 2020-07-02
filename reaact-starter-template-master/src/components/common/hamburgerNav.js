import React, { Component } from "react";
import { Link } from "react-router-dom";

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

  // UNSAFE_componentWillMount = () => {
  //   this.setActiveStyle();
  // };

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
 
    // this.setActiveStyle();

    let { open, path, title } = this.state;
    return (
        <React.Fragment>
        <div className="header-top">
        </div>
        <header className="header"> 
        <div className="container"> 
          <div className="col-12">
          <div id="nav-icon" className={open ? "open" : "closed"} onClick={this.animateMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
            <div className="col-2" id="logo">
            <h1 className={title.color}>
            {title.value ? title.value : "Yoga Bidjam"}
            </h1>           
          </div>
        </div>
        
        <nav onClick={this.animateMenu}
         className={open ? "visible" : "hidden"}>
            {(() => {

            if (path === "/") {
                return (
                <Link className="active" to="/">
                    <span className="home-icon" />
                    Home
                </Link>
                );
            } 
            else {
                return (
                <Link to="/">
                    <span className="home-icon" />
                    Home
                </Link>
                );
            }
          })()}

          {(() => {
            if (path === "/classes") {
                return (
                <Link className="active" to="/classes">
                    <span className="classes-icon" />
                    Classes
                </Link>
                );
            } 
            else {
              return (
                <Link to="/classes">
                    <span className="classes-icon" />
                    Classes
                </Link>
                );
            }
          })()}

          {(() => {
            if (path === "/booking") {
              return (
                <Link className="active" to="/booking">
                    <span className="booking-icon" />
                    Booking
                </Link>
              );
            } 
            else {
              return (
                <Link to="/booking">  
                 <span className="booking-icon" />               
                  Booking
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