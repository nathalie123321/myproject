import React, { Component } from 'react'
import Sections from "../components/dynamicLayout/Sections"
import Banner from "../components/common/banner"
import image1 from "../img/earth.jpg";
import image2 from "../img/candleflower.jpg";
import { Carousel } from "../components/slider";
 import { EventSlider } from "../components/eventSlider";
import Footer2 from "../components/common/Footer2";
class homePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
            <React.Fragment>          
            <img style={{ width: "100%", height: "100%" }} src={image1} />
            </React.Fragment>
          ),         
          id: 2,
          colClass: "col-6"
        }
      ],
      yogaBidjam: [
        {
  
          title: "",
          body: (
            <React.Fragment>          
            <img style={{ width: "100%", height: "100%" }} src={image2} />
            </React.Fragment>
          ),
          id: 1,
          colClass: "col-6"
        },
        {       
          title: "Yoga Bidjam",       
          body: (
            <p>
              Non qui est cupidatat voluptate elit dolore nulla ipsum amet qui
              ea excepteur excepteur duis. Fugiat laborum anim reprehenderit
              commodo enim cillum qui aliqua sint dolore qui et consectetur.
            </p>
            ),
            id: 2,
        }
      ]
    };
  }

    render() {

      let { about, yogaBidjam} = this.state;
      let { sectionStyles } = this.props;
    
      return (
        <React.Fragment>  
        <Banner/>
       
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
        <EventSlider />
          <Footer2 />
        </React.Fragment>
        )
    }
}
export default homePage
        
