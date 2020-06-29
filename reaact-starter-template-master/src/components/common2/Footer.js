import React, { Component } from "react";

const Footer = () => {
    return(
    <div className="main-footer">
        <div className="container">
            <div className="row">
                {/* {Column1} */}
                <div className="col">
                    <h4>ABOUT US</h4>
                    <ul className="list-unstyled">
                        <li><h5>Adress:</h5></li>
                        <li>YogaBijam</li>
                        <li>123 45 Frösön</li>
                        <li><h5>Have any Questions?</h5></li>
                        <li>YogaBijam@gmail.com</li>
                        <li><h5>Telephone:</h5></li>
                        <li>070 - 123 45 67</li>
                    </ul>
                </div>
                        
                {/* {Column2} */}
                <div className="col">
                    <h4>QUICK LINKS</h4>
                    <ul className="list-unstyled">
                        <li>Home</li>
                        <li>Classes</li>
                        <li>Booking</li>
                    </ul>
                </div>
                                
                {/* {Column3} */}
              
                <div className="col">
                    <h4>FOLLOW US</h4>
                    <ul className="list-unstyled">
                        <li>Instagram</li>
                        <li>Youtube</li>
                    </ul>
                </div>
                </div>
                <hr/>
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} YOGA BIDJAM | All right reserved | Terms Of Service | Privacy
                    </p>
                </div>
            </div>
        </div>
   

    )
}

export default Footer;