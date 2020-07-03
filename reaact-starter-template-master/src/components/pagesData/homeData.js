import React, { Component } from 'react'
import image1 from "../../img/girl.jpg";
import image2 from "../../img/candleflower.jpg";

const about = [
    {
        title: "About me",
        body: (
            <React.Fragment>  
          <p>
            Non qui est cupidatat voluptate elit dolore nulla ipsum amet qui
            ea excepteur excepteur duis. Fugiat laborum anim reprehenderit
            commodo enim cillum qui aliqua sint dolore qui et consectetur.
         </p>
        
           <p>
            Non qui est cupidatat voluptate elit dolore nulla ipsum amet qui
            ea excepteur excepteur duis. Fugiat laborum anim reprehenderit
            commodo enim cillum qui aliqua sint dolore qui et consectetur.
          </p>
          </React.Fragment>  
        ),
        id: 1,
        colClass: "col-6"
      },
      {
        title: "",
        body: (
          <React.Fragment>          
          <img className="img-style" src={image1} />
          </React.Fragment>
        ),         
        id: 2,
        colClass: "col-6"
      }
  ],
  
  yogaBidjam = [
    {
        title: "",
        body: (
          <React.Fragment>          
          <img className="img-style" src={image2} />
          </React.Fragment>
        ),
        id: 1,
        colClass: "col-6"
      },

      {       
        title: "Yoga Bidjam",       
        body: (
            <React.Fragment>  
            <p>
              Non qui est cupidatat voluptate elit dolore nulla ipsum amet qui
              ea excepteur excepteur duis. Fugiat laborum anim reprehenderit
              commodo enim cillum qui aliqua sint dolore qui et consectetur.
         <br></br>
              Non qui est cupidatat voluptate elit dolore nulla ipsum amet qui
              ea excepteur excepteur duis. Fugiat laborum anim reprehenderit
              commodo enim cillum qui aliqua sint dolore qui et consectetur.
            </p>
            </React.Fragment> 
          ),
          id: 2,
          colClass: "col-6"
      }
  ];

  const homeData = { about, yogaBidjam};
  
  export default homeData;