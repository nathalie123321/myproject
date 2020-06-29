import React, { Component } from 'react'
import Sections from "../components/dynamicLayout/Sections"
import classData from '../components/carousel/data';
import Banner from "../components/common/banner"

class classes extends Component {
  constructor(props) {
    super(props);
    this.state = {
    data:classData,
    };
  }
    render() {
      let data = classData; 
      let { sectionStyles } = this.props;
      return (
        <React.Fragment>  
            <Banner/>  
           <Sections     
            backgroundColors={sectionStyles.backgroundColors.grey}
            padding={sectionStyles.paddingTopBottom}
            vals={classData.privat}
          />
            <Sections
            backgroundColors={sectionStyles.backgroundColors.green}
            padding={sectionStyles.paddingTopBottom}
            vals={classData.group}
          />
            <Sections
            backgroundColors={sectionStyles.backgroundColors.green}
            padding={sectionStyles.paddingTopBottom}
            vals={classData.online}
          />
            <Sections
            backgroundColors={sectionStyles.backgroundColors.green}
            padding={sectionStyles.paddingTopBottom}
            vals={classData.custom}
          />
            <Sections
            backgroundColors={sectionStyles.backgroundColors.green}
            padding={sectionStyles.paddingTopBottom}
            vals={classData.organisation}
          /> 
        </React.Fragment>
        )
    }
}
 export default classes
        

        

