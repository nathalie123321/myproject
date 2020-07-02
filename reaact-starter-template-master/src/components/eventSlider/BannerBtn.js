import React, { Component } from "react";

class BannerBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    };
  }

  render() {
    const { data } = this.state;
    let buttons = data.map((data, idx) => {
      return (
        <a
          title={data.title}
          className={data.isActive ? "banner-buttons active" : "banner-buttons"}
          key={data.id}
          id={data.id}
          onClick={this.props.click}
        />
      );
    });

    return <div className="banner-buttons-wrapper">
      <div className="center">
      {buttons}
      </div>
      </div>;
  }
}

export default BannerBtn;
