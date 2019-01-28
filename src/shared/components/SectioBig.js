import React, { Component } from "react";
import { Redirect, Link, NavLink } from "react-router-dom";
class SectionBig extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   redirect: false
    // };
    // this.setRedirect = this.setRedirect.bind(this);
  }
  // setRedirect() {
  //   this.setState({
  //     redirect: true
  //   });
  // }
  render() {
    // const title = this.props.title || "none";
    // const orient = this.props.orient || "orient-left";
    //const description = this.props.description || "none";
    // const containerClass =
    // "banner style1 " +
    // orient +
    // " content-align-left image-position-right fullscreen onload-image-fade-in onload-content-fade-right";
    //const imgUrl = this.props.imgUrl || "/images/none.jpg";
    // const index = 0;
    return (
      <div>
        <section
          className={
            "banner style1 " +
            this.props.orient +
            "content-align-left image-position-right fullscreen onload-image-fade-in onload-content-fade-right"
          }
        >
          <div className="content">
            <h1> {this.props.section.title}</h1>
            <p className="major"> {this.props.section.description}</p>
            <ul className="actions stacked">
              <li>
                <Link
                  to={{
                    pathname: "/detail/" + "0" + "/jerry",
                    state: {
                      detailId: 0
                      // jumbotronPic:"/images/ip_top_jerry.jpg"
                    }
                  }}
                  className="button big wide smooth-scroll-middle"
                >
                  深入了解
                </Link>
              </li>
            </ul>
          </div>
          <div className="image">
            <img src={this.props.section.imgUrl} alt="" />
          </div>
        </section>
      </div>
    );
  }
}

export default SectionBig;
