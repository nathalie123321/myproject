import React, { Component } from "react";

export default class ScrollToTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    };
  }
  componentDidMount = () => {
    let scrollComponent = this;
    document.addEventListener("scroll", function (e) {
      scrollComponent.toggleVisible();
    });
  };
  toggleVisible = () => {
    if (window.pageYOffset > 150) {
      this.setState({ isVisible: true });
    } else {
      this.setState({ isVisible: false });
    }
  };
  scrollToTop = () => {
    window.scrollTo({
      top: 0
    });
  };

  render() {
    const { isVisible } = this.state;
    return (
      <div className="scroll-to-top">
        {isVisible && (
          <div className="sTt" onClick={() => this.scrollToTop()}></div>
        )}
      </div>
    );
  }
}