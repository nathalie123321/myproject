import React, { Component } from "react";

const adressItem1 = 'Adress:'
const adressItem2 = 'YogaBidjam'
const adressItem3 = '123 45 Frösön'
const questionsItem1 = 'Have any Questions?'
const questionsItem2 = 'Have any Questions?'
const questionsItem3 = 'Have any Questions?'
const questionsItem4 = 'Have any Questions?'

const quickLinksItem1 = 'Home'
const quickLinksItem2 = 'Classes'
const quickLinksItem3 = 'Booking'

const data = [
  {
    title: 'ABOUT US',
    adressItem1,
     adressItem2,
     adressItem3,
     questionsItem1,
     questionsItem2,
     questionsItem3,
     questionsItem4
  }
//   ,
//   {
//     title: 'QUICK LINKS',
//    quickLinksItem1,
//    quickLinksItem2,
//     quickLinksItem3
//   }
 
];

class Accordion extends React.Component {
    render () {
      return (
        <div {...{ className: 'wrapper' }}>
          <ul {...{ className: 'accordion-list' }}>
            {data.map((data, key) => {
              return (
                <li {...{ className: 'accordion-list__item', key }}>
                  <AccordionItem {...data} />
                </li>
              )
            })}
          </ul>
        </div>
      )
    }
  }
  class AccordionItem extends React.Component {
    state = {
      opened: false
    }
    
    render () {
      const {
        props: {
            adressItem1,
            adressItem2,
            adressItem3,
            questionsItem1,
            questionsItem2,
            questionsItem3,
            questionsItem4,
          title
        },
        state: {
          opened
        }
      } = this
      
      return (
        <div
          {...{
            className: `accordion-item, ${opened && 'accordion-item--opened'}`,
            onClick: () => { this.setState({ opened: !opened }) }
          }}
        >
          <div {...{ className: 'accordion-item__line' }}>
            <h3 {...{ className: 'accordion-item__title' }}>
              {title}
            </h3>
            <span {...{ className: 'accordion-item__icon' }}/>
          </div>
            <div {...{ className: 'accordion-item__inner' }}>
              <div {...{ className: 'accordion-item__content' }}>
                <p {...{ className: 'accordion-item__paragraph' }}>
                {adressItem1}
                 {adressItem2}
                 {adressItem3}
                {questionsItem1}
                 {questionsItem2}
                {questionsItem3}
                 {questionsItem4}
                </p>
              </div>
            </div>
        </div>
      )
    }
  }
  ReactDOM.render(<Accordion />, document.getElementById('app'));