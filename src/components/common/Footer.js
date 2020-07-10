import React, { Component } from "react";

import icon1 from "../../img/icons/phone.svg";
import icon2 from "../../img/icons/envelope.svg";
import icon3 from "../../img/icons/Instagram.svg";
import icon4 from "../../img/icons/youtube.svg";
import icon5 from "../../img/icons/gps.svg";
import logoImg from "../../img/logoFot.jpg";

export default class Footer extends Component {
    render() {
        return (
        <React.Fragment>
        <section className="footer">          
            <div className="container">
            <div className="col-12 padding-top-bottom" id="logo" style={{backgroundImage: `url(${logoImg})`, backgroundRepeat: "no-repeat"}} > </div>
                <div className="row">

                <div className="col-4">
                    <h4>ABOUT US</h4>
                    <div className="icon" style={{ backgroundImage: `url(${icon5})`}}>
                        <h5>Adress:</h5>
                    </div>                 
                    <p>YogaBijam</p>
                    <p>123 45 Frösön</p>
                    <div className="icon" style={{ backgroundImage: `url(${icon2})`}}>
                        <h5>Email:</h5>
                    </div>  
                    <p>YogaBijam@gmail.com</p>               
                    <div className="icon" style={{ backgroundImage: `url(${icon1})`}}>
                        <h5>Telephone:</h5>
                    </div>  
                    <p>070 - 123 45 67</p>
                    </div>

                <div className="col-4">
                    <h4>QUICK LINKS</h4>
                    <a href="http://localhost:8080/">Home</a>
                    <a href="http://localhost:8080/classes">Classes</a>
                    <a href="http://localhost:8080/booking">Booking</a>
                </div>
                
                <div className="col-4">
                    <h4>FOLLOW US</h4>
                    <div className="icon" style={{ backgroundImage: `url(${icon3})`}}>
                    <p>Instagram</p>
                    </div>
                    <div className="icon" style={{ backgroundImage: `url(${icon4})`}}>
                    <p>Youtube</p>
                    </div>
                </div>
                </div>    
                </div>
                <div className="copy">  
                    <p> &copy;{new Date().getFullYear()} YOGA BIDJAM | All right reserved | Terms Of Service | Privacy </p>
                </div>
        </section>
        </React.Fragment>
        )
    }
}



