import React, { Component } from 'react'
import Sections from "../components/dynamicLayout/Sections"
import imageUrls from "../components/carousel/carouselData";

class homePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: imageUrls,

      about: [
        {
          title: "About me",         
          body: (
            <p>
              Non qui est cupidatat voluptate elit dolore nulla ipsum amet qui
              ea excepteur excepteur duis. Fugiat laborum anim reprehenderit
              commodo enim cillum qui aliqua sint dolore qui et consectetur.
            </p>
          ),

          id: 1,
          colClass: "col-6"
        },
        {
          title: "",
          body: (
            <p>
              Non qui est cupidatat voluptate elit dolore nulla ipsum amet qui
              ea excepteur excepteur duis. Fugiat laborum anim reprehenderit
              commodo enim cillum qui aliqua sint dolore qui et consectetur.
            </p>
          ),
          id: 2,
          colClass: "col-6"
        }
      ],
      yogaBidjam: [
        {
        title: "Yoga Bidjam",       
        body: (
          <p>
            Non qui est cupidatat voluptate elit dolore nulla ipsum amet qui
            ea excepteur excepteur duis. Fugiat laborum anim reprehenderit
            commodo enim cillum qui aliqua sint dolore qui et consectetur.
          </p>
          ),
          id: 1,
          colClass: "col-6"
        },
        {
          title: "",
          body: (
            <p>
              Non qui est cupidatat voluptate elit dolore nulla ipsum amet qui
              ea excepteur excepteur duis. Fugiat laborum anim reprehenderit
              commodo enim cillum qui aliqua sint dolore qui et consectetur.
            </p>
          ),
          id: 2,
          colClass: "col-6"
        }
      ]
    };
  }

    render() {

      let { about, yogaBidjam, data } = this.state;
      let { sectionStyles } = this.props;
  
      return (
        <React.Fragment>
         
          <Sections
            backgroundColors={sectionStyles.backgroundColors.grey}
            padding={sectionStyles.paddingTopBottom}
            vals={about}
          />
           <Sections
            backgroundColors={sectionStyles.backgroundColors.green}
            padding={sectionStyles.paddingTopBottom}
            vals={yogaBidjam}
          />
            <Sections
            backgroundColors={sectionStyles.backgroundColors.green}
            padding={sectionStyles.paddingTopBottom}
            vals={data}
          />
        
        </React.Fragment>
        )
    }
}
export default homePage
        
