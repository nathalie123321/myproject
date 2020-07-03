import React, { Component } from "react";

import icon1 from "../../img/icons/phone.svg";
import icon2 from "../../img/icons/envelope.svg";
import icon3 from "../../img/icons/Instagram.svg";
import icon4 from "../../img/icons/youtube.svg";
import icon5 from "../../img/icons/gps.svg";

const Footer = () => {
        return(
        <React.Fragment>
            <div className="main-footer">
            <div className="container">
             <div className="row">
                {/* {Column1} */}
                <div className="col">
                    <h4>ABOUT US</h4>                   
                    <ul className="list-unstyled">                
                        <div className="icon" style={{ backgroundImage: `url(${icon5})`}}>
                            <li><h5>Adress:</h5></li>  
                        </div>    
                        <li>YogaBijam</li>
                        <li>123 45 Frösön</li>
                        <div className="icon" style={{ backgroundImage: `url(${icon2})`}}>
                            <li><h5>Have any questions?</h5></li>
                        </div>  
                        <li>YogaBijam@gmail.com</li>
                        <div className="icon" style={{ backgroundImage: `url(${icon1})`}}>
                            <li><h5>Telephone:</h5></li>
                        </div>  
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
                    <div className="icon" style={{ backgroundImage: `url(${icon3})`}}>
                        <li>Instagram</li>
                        </div>
                      <br></br>
                        <div className="icon" style={{ backgroundImage: `url(${icon4})`}}>
                        <li>Youtube</li>
                        </div>
                    </ul>
                </div>
            </div>
         </div>
    </div>
<div className="copy">
<div className="col-sm ">
          
<p className="container">
    &copy;{new Date().getFullYear()} YOGA BIDJAM | All right reserved | Terms Of Service | Privacy
</p>

</div>
</div>

</React.Fragment>
    )
}

export default Footer;