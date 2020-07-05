import React, { Component } from "react";
export default class componentName extends Component {
  render() {
    let { data } = this.props;
    return (

    <React.Fragment>
      <div className="container">
        <div className="row" > 
        <div className="col-12">  
          <h1>{data.title}</h1>
          <p>{data.body}</p>
          
          <div className="slide-img" id={data.id} style={{ backgroundImage: `url(${data.image})`}}>
         
          </div>
          <h2>{data.title2}</h2>
          <p>{data.body2}</p>
        </div>
        </div>
      </div>     
      </React.Fragment>
      );
    }
  }
