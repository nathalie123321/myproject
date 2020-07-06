import React, { Component } from 'react'
import image1 from "../../img/space.jpg";
import image2 from "../../img/sky.jpg";
import image3 from "../../img/water.jpg";
import image4 from "../../img/flame.jpg";
import image5 from "../../img/earth.jpg";


const privat = [
{      body: (
        <React.Fragment>          
        <img className="img-style" src={image1} />
        </React.Fragment>
      ),
      id: 1,
      colClass: "col-6",
    },
    {
      title: "Private",
      body: (
        <p>
          Non qui est cupidatat voluptate elit dolore nulla ipsum amet qui
          ea excepteur excepteur duis. Fugiat laborum anim reprehenderit
          commodo enim cillum qui aliqua sint dolore qui et consectetur.
        </p>
      ),
      id: 2,
      colClass: "col-6"
    },
  ],
  group = [
    {    
      body: (
        <React.Fragment>          
        <img className="img-style" src={image2} />
        </React.Fragment>
      ),
      id: 1,
      colClass: "col-6"
    },
    {
      title: "Group",
      body: (
        <p>
          Non qui est cupidatat voluptate elit dolore nulla ipsum amet qui
          ea excepteur excepteur duis. Fugiat laborum anim reprehenderit
          commodo enim cillum qui aliqua sint dolore qui et consectetur.
        </p>
      ),
      id: 2,
      colClass: "col-6"
    },
  ],
   online = [
    {
     
      body: (
        <React.Fragment>          
        <img className="img-style"  src={image3} />
        </React.Fragment>
      ),
      id: 1,
      colClass: "col-6"
    },
    {
      title: "Online",
      body: (
        <p>
          Non qui est cupidatat voluptate elit dolore nulla ipsum amet qui
          ea excepteur excepteur duis. Fugiat laborum anim reprehenderit
          commodo enim cillum qui aliqua sint dolore qui et consectetur.
        </p>
      ),
      id: 2,
      colClass: "col-6"
    },
  ],
  custom = [
    {
      body: (
        <React.Fragment>          
        <img className="img-style"  src={image4} />
        </React.Fragment>
      ),
      id: 1,
      colClass: "col-6"
    },
    {
      title: "Custom",
      body: (
        <p>
          Non qui est cupidatat voluptate elit dolore nulla ipsum amet qui
          ea excepteur excepteur duis. Fugiat laborum anim reprehenderit
          commodo enim cillum qui aliqua sint dolore qui et consectetur.
        </p>
      ),
      id: 2,
      colClass: "col-6"
    },
  ],
  organisation = [
    {
      body: (
        <React.Fragment>          
        <img className="img-style"  src={image5} />
        </React.Fragment>
      ),
      id: 1,
      colClass: "col-6"
    },
    {
      title: "Organisation",
      body: (
        <p>
          Non qui est cupidatat voluptate elit dolore nulla ipsum amet qui
          ea excepteur excepteur duis. Fugiat laborum anim reprehenderit
          commodo enim cillum qui aliqua sint dolore qui et consectetur.
        </p>
      ),
      id: 2,
      colClass: "col-6"
    },

  ];  

  const classData = { privat, group, online, custom, organisation};
  
export default classData;
