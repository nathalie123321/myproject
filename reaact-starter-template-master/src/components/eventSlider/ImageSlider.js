import React, { Component } from "react";

export default class componentName extends Component {
  render() {
    let { data } = this.props;
    return (
        <div>
        <h1>{data.title}</h1>
        <div className="event-slider-placeholder" >      
        <div className="event-slider" id={data.id} style={{ backgroundImage: `url(${data.image})`}}>
            </div> 
            <h2>{data.title}</h2>
          <p>{data.body}</p>
            </div> 
            </div>
          ); 
   

  }
}
