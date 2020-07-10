import React, {useState} from "react";
import DropdownMenu from "./DropdownMenu";

import icon1 from "../../img/icons/gps.svg";
import icon2 from "../../img/icons/envelope.svg";
import icon3 from "../../img/icons/phone.svg";
import icon4 from "../../img/icons/Instagram.svg";
import icon5 from "../../img/icons/youtube.svg";
import logoImg from "../../img/logoFot.jpg";

function FooterMobTab () {
  const [footer, setprops] = useState([
      {
        mainTitle: "ABOUT US",
         title:(
            <div className="icon" style={{ backgroundImage: `url(${icon1})`}}>
               <p>Adress:</p>            
            </div>
         ),
         text1:"YogaBijam",
         text2:"Yogastreet 123",
         text3:"123 45 Frösön",
         title2:(
            <div className="icon" style={{ backgroundImage: `url(${icon2})`}}>
               <p>Have any questions?</p>             
            </div>
         ),
         text4:"YogaBijam@gmail.com",
         title3:(
            <div className="icon" style={{ backgroundImage: `url(${icon3})`}}>
               <p>Telephone:</p> 
            </div>
         ),
         text5:"070 - 123 45 67",
         open: false,
         id: 1
      },
      { 
        mainTitle:"QUICK LINKS",
        title: "",
        text1: (
            <a href="http://localhost:8080/">Home</a>        
          ),
            text2: (
            <a href="http://localhost:8080/classes">Classes</a>      
          ),
          text3: (
            <a href="http://localhost:8080/booking">Booking</a>        
          ),
        title2:"",
        text4:"",
        title5:"",
        text5:"",
        open: false  ,
        id: 2  
      },    
    ]);

    const toggleDropDown = index =>{
        setprops(footer.map((faq,i) =>{
            if ( i === index) {
               faq.open = !faq.open 
            } else{
                faq.open = false;
            }
            return faq;
        }))
      }
   
return (
  <React.Fragment>
    <div className="footerMobTab">
      <div className="container">
        <div className="padding-top-bottom" id="logo" style={{backgroundImage: `url(${logoImg})`, backgroundRepeat: "no-repeat"}} > </div>
          <div className="row">
            <div className="footerMt">
             {footer.map((faq, i) => (
              <DropdownMenu faq={faq} key={faq.id} index={i} toggleDropDown={toggleDropDown} />
             ))}
            </div>
            
              <div className="col-4 follow">
                <h4>FOLLOW US</h4>
                  <div className="icon" style={{ backgroundImage: `url(${icon4})`}}>
                    <p>Instagram</p>
                   </div>  
                  <div className="icon" style={{ backgroundImage: `url(${icon5})`}}>
                   <p>Youtube</p>
                  </div>
              </div>
          </div>
      </div>
      
      <div className="copy">       
        <p> &copy;{new Date().getFullYear()} YOGA BIDJAM | All right reserved | Terms Of Service | Privacy</p>
      </div>
    </div>
  </React.Fragment>
  )
}
export default FooterMobTab;
