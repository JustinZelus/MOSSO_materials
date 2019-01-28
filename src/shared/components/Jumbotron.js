import React, { Component } from "react";

class Jumbotron extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.jumbotronPic);
    this.state = {
      backgroundImage: "url(" + this.props.jumbotronPic + ")"
    };

    this.doJQueryToDOM = this.doJQueryToDOM.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    console.log("Jumbotron componentWillReceiveProps()");
    console.log(nextProps);
    this.setState({ backgroundImage: "url(" + nextProps.jumbotronPic + ")" });
  }

  componentWillMount() {}

  componentDidMount() {
    this.doJQueryToDOM();
    console.log("Jumbotron componentDidMount()");
  }

  componentWillUnmount() {}

  doJQueryToDOM() {
    if (__isBrowser__) {
      $(this.refs.jumbotronRef).jarallax({
        speed: 0.2
      });
    }
  }
  render() {
    // var $ = require("jquery")(require("jsdom").jsdom().parentWindow);

    //要改寫法，不建議寫在render裡面
    // var parallax = $(".parallax");
    // parallax.jarallax({ speed: 0.2 });
    // if (__isBrowser__) {
    //   $(".parallax").jarallax({
    //     speed: 0.2
    //   });
    // }

    return (
      <div>
        <div
          className="section-lg bg-image parallax"
          style={this.state}
          ref="jumbotronRef"
        >
          <div className="bg-black-07">
            <div className="container text-center">
              <h1 className="font-weight-light">{this.props.author_name}</h1>
              <ul className="myList list-horizontal-dash">
                <li>
                  <a href="#">{this.props.jumbotronMotto}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Jumbotron;
