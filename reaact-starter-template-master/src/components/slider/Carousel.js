import React, { Component } from "react";
import data from "./data";
import { BackBtn, NextBtn, Slide } from "../slider";



class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageCount: null,
      pageNumber: 1,
      startingPage: 1,
      itemsPerPage: 1,
      totalCols: 12,
      columns: null,
      dataLenght: data.length + 1,
      data: data,
      dataSlice: [],
      maxIndex: null,
      intervalTime: 4000
    };
  }

  componentDidMount = async () => {
    let {
      itemsPerPage,
      dataLenght,
      startingPage,
      totalCols 
    } = this.state;


    let columnNumber = null,
      columns,
      pageCount;

    this.setState({
      pageCount: pageCount,
      columns: columns,    
    });
    this.getData();
  };

  next = () => {
    let { pageCount, pageNumber, startingPage } = this.state;
    if (pageNumber == pageCount) {
      this.setState({ pageNumber: startingPage }, function () {
        this.getData();
      });
    } else {
      this.setState({ pageNumber: this.state.pageNumber + 1 }, function () {
        this.getData();
      });
    }
  };

  prev = () => {
    let { pageCount, pageNumber, startingPage } = this.state;
    if (pageNumber == startingPage) {
      this.setState({ pageNumber: pageCount }, function () {
        this.getData();
      });
    } else {
      this.setState({ pageNumber: this.state.pageNumber - 1 }, function () {
        this.getData();
      });
    }
  };

  getData = () => {
    let { data, itemsPerPage, dataSlice, pageNumber } = this.state;
    const upperLimit = pageNumber * itemsPerPage;
    this.setState({ upperLimit: upperLimit });
    let newData = data.slice(upperLimit - itemsPerPage, upperLimit);
    this.setState({ dataSlice: newData });
  };

  render() {
    let {
      itemsPerPage,
      columns,
      dataLenght,
      pageCount,
      dataSlice,
      data,
      pageNumber,
    } = this.state;
    return (
        <React.Fragment>
          <div className="carousel">
            <BackBtn prev={this.prev} />
            <div className="container padding-top-bottom">           
              <Slide data={dataSlice} columns={"col-12"}/>
            </div>
            <NextBtn next={this.next} />
          </div>
        </React.Fragment>
      );
  }
}

export default Carousel;
