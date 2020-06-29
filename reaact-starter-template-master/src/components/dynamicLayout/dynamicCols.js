import React, { Component } from "react";
export default class componentName extends Component {
  render() {
    let { vals } = this.props;
    let pageContent = vals.map((data, idx) => {
      return (
        <React.Fragment>
        <div key={idx} id={idx} className={data.colClass}>  
          <h2>{data.title}</h2>
          {data.body}
        </div>
        </React.Fragment>
      );
    });
    return (
      <React.Fragment>
        <div className="row"> {pageContent} </div>
      </React.Fragment>
    );
  }
}
