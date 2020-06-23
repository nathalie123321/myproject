import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";

// pages
import HomePage from "../pages/homePage";
import Classes from "../pages/classes";
import Booking from "../pages/booking";

// components

import HamburgerNav from "./common/hamburgerNav";
import history from "./common/history";

// styles
import "../sass/main.scss";

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: {
        value: "Yoga Bidjam",
        color: "title-text"
      },
      sectionStyles:{
        fontColors: {
          whiteFont: "white-font",  
          greyFont: "grey-font",
          lightGreyFont: "light-grey-font",
          blackFont: "black-font"  
        },
        backgroundColors: {
          white: "white",
          green: "green",
          grey: "grey",
          lightGrey: "light-grey"
        },
        paddingTopBottom: "padding-top-bottom"
      }
    };
  }
  render() {
    let { sectionStyles} = this.state;
    return (
      <React.Fragment>
        <Router history={history}>
          <HamburgerNav/>
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <HomePage sectionStyles={sectionStyles} {...props} />
              )}
            />
            <Route
              path="/classes"
              render={(props) => (
                <Classes sectionStyles={sectionStyles} {...props} />
              )}
            />        
            <Route
              path="/booking"
              render={(props) => (
                <Booking sectionStyles={sectionStyles} {...props} />
              )}
            />  
          </Switch> 
        </Router> 
      </React.Fragment>
    );
  }
}

