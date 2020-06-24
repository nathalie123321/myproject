import React, { Component } from 'react'

import aboutMe from "../../img/earth.jpg";


const imageUrls = [
  {
    title: "About me",   
  
    image: (
<React.Fragment>
    <div style={{ margin: "0 auto", width: "150px", height: "150px" }}>
              <img
                style={{ width: "100%", height: "100%" }}
                src={aboutMe}
              />
            </div>
  
</React.Fragment>
    ),
    body: (
        <span>
        Non qui est cupidatat voluptate elit dolore nulla ipsum amet qui
        ea excepteur excepteur duis. Fugiat laborum anim reprehenderit
        commodo enim cillum qui aliqua sint dolore qui et consectetur.
        </span>
    ),
    id: 0,
    colClass: "col-6",
    

  },
  {
    title: "",
    image: (
        <React.Fragment>
            <div style={{ margin: "0 auto", width: "150px", height: "150px" }}>
                      <img
                        style={{ width: "100%", height: "100%" }}
                        src={aboutMe}
                      />
                    </div>
          
        </React.Fragment>
            ),
    body: (
        <span>
        Non qui est cupidatat voluptate elit dolore nulla ipsum amet qui
        ea excepteur excepteur duis. Fugiat laborum anim reprehenderit
        commodo enim cillum qui aliqua sint dolore qui et consectetur.
        </span>
    ),
    id: 2,
    colClass: "col-6"
  },
];

export default imageUrls;