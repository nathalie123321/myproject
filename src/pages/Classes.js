import React, { Component } from 'react'
import Sections from "../components/dynamicLayout/Sections"
import classData from '../components/pagesData/classesdata';

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
            vals={data.privat}
          />
            <Sections        
            padding={sectionStyles.paddingTopBottom}
            vals={data.group}
          />
            <Sections
            padding={sectionStyles.paddingTopBottom}
            vals={data.online}
          />
            <Sections       
            padding={sectionStyles.paddingTopBottom}
            vals={data.custom}
          />
            <Sections       
            padding={sectionStyles.paddingTopBottom}
            vals={data.organisation}
          />      
        </React.Fragment>
        )
    }
}
 export default classes
        

        

