import React, { Component } from "react";
import {
  ImageSlider,
  BannerBtn
} from "../eventSlider/";

import imageUrls from "./sliderData";

class EventSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNum: 0,
      maxIndex: imageUrls.length - 1,   
      buttonData: imageUrls,
      data: imageUrls
    };
  }

  componentDidMount = () => {
    this.setActiveClass();
  };

  setActiveClass = () => {
    let number = 0;
    this.addSlideActiveClass(number);
  };

  addSlideActiveClass = (pageNum) => {
    let { data } = this.state;
    const newData = [...data];
    newData.forEach((value) => {
      value.isActive = false;
    });
    if (newData[pageNum].isActive == true) {
      newData[pageNum].isActive = false;
    } else {
      newData[pageNum].isActive = true;
    }
    this.setState({ data: newData });
  };

  addActiveClass = (event) => {
    let ID = event.currentTarget.id,
    pageNumber = parseInt(ID),
    { data } = this.state;
    const newData = [...data];
    newData.forEach((value) => {
    value.isActive = false;
    });

    if (newData[pageNumber].isActive == true) {
      newData[pageNumber].isActive = false;
    } else {
      newData[pageNumber].isActive = true;
    }

    this.setState({ data: newData });
    this.setState({ pageNum: pageNumber });
  };

  render() {
    let { pageNum, buttonData } = this.state;
    let data = imageUrls[pageNum];
    return (     
        <section className="padding-top-bottom">
                         
        <ImageSlider data={data} />
        <BannerBtn class="row" data={buttonData} click={this.addActiveClass} />      
     
      </section>
    );
  }
}
export default EventSlider;
