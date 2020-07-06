import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";

// pages
import HomePage from "../pages/homePage";
import Classes from "../pages/classes";
import Booking from "../pages/booking";

// components
import HeaderNav from "./common/headerNav";
import ScrollToTop from "./common/scrollToTop";
import FooterDesktop from "./common/FooterDesktop";
import FooterMobTab from "./common/FooterMobTab";

import history from "./common/history";

// styles
import "../sass/main.scss";

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: {
      
       
      },
    sectionStyles:{
        fontColor: {
          whiteFont: "white-font",  
          greyFont: "grey-font",
          lightGreyFont: "light-grey-font",
          blackFont: "black-font"  
        },
        backgroundColor: {
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
        <div className="page-container">
        <div className="content-wrapper">
        <Router history={history}>
          <HeaderNav/>
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
        </div>
        <ScrollToTop />
        <FooterMobTab />
        <FooterDesktop />
        </div>
    </React.Fragment>
    );
  }
}

