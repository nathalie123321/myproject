import React, { Component } from 'react'
import Sections from "../components/dynamicLayout/Sections"
import classData from '../components/pagesData/classesdata';
import Footer2 from "../components/common/Footer2";
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
           <Sections     
        
            padding={sectionStyles.paddingTopBottom}
            vals={classData.privat}
          />
            <Sections
        
            padding={sectionStyles.paddingTopBottom}
            vals={classData.group}
          />
            <Sections
       
            padding={sectionStyles.paddingTopBottom}
            vals={classData.online}
          />
            <Sections
        
            padding={sectionStyles.paddingTopBottom}
            vals={classData.custom}
          />
            <Sections
        
            padding={sectionStyles.paddingTopBottom}
            vals={classData.organisation}
          /> 
          
           <Footer2 />
        </React.Fragment>
        )
    }
}
 export default classes
        

        

