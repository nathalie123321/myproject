import React, { Component } from 'react'
import Sections from "../components/dynamicLayout/Sections"
import Footer2 from "../components/common/Footer2";

class booking extends Component {
  constructor(props) {
    super(props);
    this.state = {

      privat: [
        {
          title: "Img",
          body: (
            <p>
              
            </p>
          ),
          id: 1,
          colClass: "col-6"
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
        }
      ],
      group: [
        {
          title: "Img",
          body: (
            <p>
              
            </p>
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
        }
      ],
      online: [
        {
          title: "Img",
          body: (
            <p>
              
            </p>
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
        }
      ],
      custom: [
        {
          title: "Img",
          body: (
            <p>
              
            </p>
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
        }
      ],  
      organisation: [
        {
          title: "Img",
          body: (
            <p>
              
            </p>
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
        }
      ],
    };
  }

    render() {
      
      let { privat, group, online, custom, organisation,} = this.state;
      let { sectionStyles } = this.props;
  
      return (
        <React.Fragment>
         
          <Sections
            backgroundColors={sectionStyles.backgroundColors.grey}
            padding={sectionStyles.paddingTopBottom}
            vals={privat}
          />
           <Sections
            backgroundColors={sectionStyles.backgroundColors.green}
            padding={sectionStyles.paddingTopBottom}
            vals={group}
          />
            <Sections
            backgroundColors={sectionStyles.backgroundColors.green}
            padding={sectionStyles.paddingTopBottom}
            vals={online}
          />
            <Sections
            backgroundColors={sectionStyles.backgroundColors.green}
            padding={sectionStyles.paddingTopBottom}
            vals={custom}
          />
            <Sections
            backgroundColors={sectionStyles.backgroundColors.green}
            padding={sectionStyles.paddingTopBottom}
            vals={organisation}
          />
           <Footer2 />
        </React.Fragment>
        )
    }
}
export default booking
        
