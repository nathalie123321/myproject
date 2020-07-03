import React, { Component } from 'react'
import Sections from "../components/dynamicLayout/Sections"
import Banner from "../components/common/banner"
import { EventSlider } from "../components/eventSlider";
import Footer2 from "../components/common/Footer2";
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
      <Sections
      backgroundColor={sectionStyles.backgroundColor.white}
      padding={sectionStyles.paddingTopBottom}
      vals={homeData.yogaBidjam}
      />
      <EventSlider />
      <Footer2 />
    </React.Fragment>
    )
  }
}
export default homePage;
        
