import React, {useState} from "react";
import Faq from "./Faq";

import icon1 from "../../img/icons/gps.svg";
import icon2 from "../../img/icons/envelope.svg";
import icon3 from "../../img/icons/phone.svg";


function Footer2 () {
  const [faqs, setfaqs] = useState([
      {  mainTitle: "ABOUT US",
         title:(
            <div className="icon" style={{ backgroundImage: `url(${icon1})`}}>
                <div className="icons-text"><p>Adress:</p></div>             
            </div>
         ),
         text1:"YogaBijam",
         text2:"Yogastreet 123",
         text3:"123 45 Frösön",
         title2:(
            <div className="icon" style={{ backgroundImage: `url(${icon2})`}}>
                <div className="icons-text"><p>Have any questions?</p></div>             
            </div>
         ),
         text4:"YogaBijam@gmail.com",
         title3:(
            <div className="icon" style={{ backgroundImage: `url(${icon3})`}}>
               <div className="icons-text"><p>Telephone:</p></div> 
            </div>
         ),
         text5:"070 - 123 45 67",
         open: false
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
        open: false    
      },    
    ]);

    const toggleFaq = index =>{
        setfaqs(faqs.map((faq,i) =>{
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
 <div className="Footer2">
     <div className="container">
    <div className="faqs">
        {faqs.map((faq, i) => (
            <Faq faq={faq} index={i} toggleFaq={toggleFaq} />          
        ))}
        </div>
    </div>
 </div>

 </React.Fragment>
 );
}

export default Footer2;
