import React, { Component } from 'react'

//importing components
import Sections from "../components/dynamicLayout/Sections"
import Banner from "../components/common/banner"
import { EventSlider } from "../components/eventSlider";

//importing data for my homepage
import homeData from '../components/pagesData/homedata';

class homePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    data:homeData,
    };
  }

  render() {
    let data = homeData; 
    let { sectionStyles } = this.props;
    return (
    <React.Fragment>
      <Banner/>
      <Sections
      backgroundColor={sectionStyles.backgroundColor.white}
      padding={sectionStyles.paddingTopBottom}
      vals={homeData.about}
      /> 
      <hr style={{width: "50%"}}></hr>
      <Sections
      backgroundColor={sectionStyles.backgroundColor.white}
      padding={sectionStyles.paddingTopBottom}
      vals={homeData.yogaBidjam}
      />
       <hr style={{width: "50%"}}></hr>
      <EventSlider />
    </React.Fragment>
    )
  }
}
export default homePage;
        
