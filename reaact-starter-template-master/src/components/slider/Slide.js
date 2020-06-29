import React, { Component } from "react";

class Slide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSlice: this.props.data
    };
  }
  render() {
    let { data, columns, togglePanel } = this.props;
    let cols = data.map((data, idx) => {
      return (
       
        <div className={data.columns} key={idx} id={data.id}  src={data.images.img}>

          {data.images.img ? (
            <div style={{ margin: "0 auto", width: "100%", height: "300px"}}>
              <img style={{ width: "100%", height: "100%"}} src={data.images.img}/>
            </div>           
          ) : (
            ""
          )}
          <h2>{data.title}</h2>
          <p>{data.body}</p>
          </div>
      
      );
    });
    return <div id="slider" className="row">{cols}</div>;
  }
}
export default Slide;
