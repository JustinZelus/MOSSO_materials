import React, { Component } from "react";
import { Link } from "react-router-dom";

class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    // const {index} = this.props.keyId;
    //console.log(this.props.keyId);
  }

  render() {
    // const title = this.props.title || "No Title";
    // const orient = this.props.orient || "orient-left";
    // const description = this.props.description || "none";
    //const containerClass =
    // "spotlight style1 " +
    // orient +
    //  " content-align-left image-position-center onscroll-image-fade-in";
    // const imgUrl = this.props.imgUrl || "/images/spotlight03.jpg";
    // const btnText = this.props.btnText || "button";
    const name = this.props.keyId == 1 ? "mera" : "chamber";

    return (
      <section
        className={
          "spotlight style1 " +
          this.props.orient +
          " content-align-left image-position-center onscroll-image-fade-in"
        }
        id="first"
      >
        <div className="content">
          <h2> {this.props.title} </h2>
          <p> {this.props.description} </p>
          <ul className="actions stacked">
            <li>
              <Link
                to={{
                  pathname:
                    this.props.keyId == 3
                      ? "/ticket"
                      : "/detail/" + `${this.props.keyId}` + "/" + `${name}`,
                  state: {
                    detailId: this.props.keyId
                    // jumbotronPic:this.props.keyId == 1 ? "/images/ip_top_mera.jpg" : "/images/ip_top_chamber.jpg"
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
          <img src={this.props.imgUrl} alt="" />
        </div>
      </section>
    );
  }
}

export default Section;
