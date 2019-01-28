import React, { Component } from "react";
import fetch from "isomorphic-fetch";
import Jumbotron from "./Jumbotron";

class ImgaePost extends Component {
  constructor(props) {
    super(props);

    let initialData;

    if (__isBrowser__) {
      console.log("===ImgaePost===Client enter __isBrowser__");

      if (window) {
        initialData = window.__initialData__;
        console.log("initialData by window");
        delete window.__initialData__;
      }
    } else {
      console.log("===ImgaePost===Server enter staticContext");
      if (this.props.staticContext) {
        console.log("initialData by staticContext");
        initialData = this.props.staticContext.initialData;
      }
    }

    this.state = {
      initialData: initialData,
      detail: [
        { detailId: 0 },
        { jumbotronPic: "/images/none.jpg" },
        { jumbotronMotto: "/images/none.jpg" },
        { pic1Url: "/images/none.jpg" },
        { pic2Url: "/images/none.jpg" },
        { pic3Url: "/images/none.jpg" },
        { p1: "none" },
        { p2: "none" },
        { p3: "none" },
        { quote: "none" },
        { quote_author: "none" },
        { author_picUrl: "/images/none.jpg" },
        { author_name: "none" },
        { author_description: "none" }
      ], //打api要直接抓params，link就維持原樣
      jumbotronPic: this.props.match.params.name
    };
  }

  static requestInitailData(params) {
    console.log("params " + params.detailID);
    console.log("params " + params.name);
    return fetch(
      //Production版
      // `http://www.mossomusic.ml/api/detail/${params.detailID}/${params.name}`,
      //Development版
      `http://localhost:80/api/detail/${params.detailID}/${params.name}`,
      {}
    ).then(res => {
      if (res.status >= 400) throw new Error("Bad response from server");
      return res.json();
    });
  }

  componentWillMount() {
    console.log("===ImgaePost=== componentWillMount()");
    if (this.state.initialData) {
      console.log("update data by initialData");
      let data = this.state.initialData;
      this.state.detail = data;
    }
  }

  //componentDidMount只有client端會call
  componentDidMount() {
    console.log("===ImgaePost=== componentDidMount()");
    if (this.props.match.params.detailId && this.props.match.params.name) {
      const params = {
        detailID: this.props.match.params.detailId,
        name: this.props.match.params.name
      };
      if (this.state.initialData == null) {
        console.log("no initialData , need to fetch api");
        ImgaePost.requestInitailData(params)
          .then(data => {
            //console.log(data);
            this.setState({
              initialData: data,
              detail: data
            });
          })
          .catch(err => {
            console.error(err);
          });
      }
    } else return;
  }

  componentWillUnmount() {}

  render() {
    console.log("ImagePost render()");
    console.log(this.state.detail[0].jumbotronPic);
    return (
      <div className="myTypography">
        {/* <Jumbotron
          jumbotronPic={"/images/ip_top_" + this.state.jumbotronPic + ".jpg"}
          jumbotronMotto={this.state.detail[0].jumbotronMotto}
        /> */}
        <Jumbotron
          jumbotronPic={this.state.detail[0].jumbotronPic}
          jumbotronMotto={this.state.detail[0].jumbotronMotto}
        />

        <div className="section">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2">
                <div className="margin-bottom-30">
                  <img
                    className="myImage"
                    src={this.state.detail[0].pic1Url}
                    alt=""
                  />
                </div>

                <p>{this.state.detail[0].p1}</p>

                <blockquote className="blockquote margin-top-20">
                  <p>{this.state.detail[0].quote}</p>
                  <footer className="blockquote-footer">
                    <h6 className="heading-uppercase">
                      {this.state.detail[0].quote_author}
                    </h6>
                  </footer>
                </blockquote>

                <p>{this.state.detail[0].p2}</p>
                <div className="margin-top-30 margin-bottom-30">
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <img
                        className="myImage"
                        src={this.state.detail[0].pic2Url}
                        alt=""
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <img
                        className="myImage"
                        src={this.state.detail[0].pic3Url}
                        alt=""
                      />
                    </div>
                  </div>
                </div>

                <p>{this.state.detail[0].p3}</p>

                <div className="row margin-top-50">
                  <div className="col-6">
                    <h6 className="heading-uppercase">Tags</h6>
                    <ul className="myList list-horizontal">
                      <li>
                        <a className="hyperlink-1" href="#">
                          Clothing
                        </a>
                      </li>
                      <li>
                        <a className="hyperlink-1" href="#">
                          Lifestyle
                        </a>
                      </li>
                      <li>
                        <a className="hyperlink-1" href="#">
                          Travel
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-6 text-right">
                    <h6 className="heading-uppercase">Share On</h6>
                    <ul className="myList list-horizontal-unstyled-fontawesome-icon">
                      <li>
                        <a href="#">
                          <i className="icon style1 fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon style1 fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon style1 fa-google-plus" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section bg-grey-lighter">
          <div className="container text-center">
            <div className="row">
              <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                <img
                  className="myImage img-circle-lg margin-bottom-20"
                  src={this.state.detail[0].author_picUrl}
                />
                <h5>{this.state.detail[0].author_name}</h5>
                <p>{this.state.detail[0].author_description}</p>

                <ul className="myList list-horizontal-unstyled-fontawesome-icon margin-top-20">
                  <li>
                    <a href="#">
                      <i className="icon style1 fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon style1 fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon style1 fa-pinterest" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon style1 fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2">
                <h4 className="margin-bottom-50 text-center">Comments</h4>

                <div className="comment-box">
                  <div className="comment-user-avatar">
                    <i className="fa fa-user" />
                  </div>
                  <div className="comment-content">
                    <span className="comment-time">2 hours ago</span>
                    <h6 className="font-weight-normal">John Smith</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor.
                    </p>
                  </div>
                </div>

                <div className="comment-box">
                  <div className="comment-user-avatar">
                    <i className="fa fa-user" />
                  </div>
                  <div className="comment-content">
                    <span className="comment-time">5 hours ago</span>
                    <h6 className="font-weight-normal">Alexander Warren</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor.
                    </p>
                  </div>
                </div>

                <div className="comment-box">
                  <div className="comment-user-avatar">
                    <i className="fa fa-user" />
                  </div>
                  <div className="comment-content">
                    <span className="comment-time">1 day ago</span>
                    <h6 className="font-weight-normal">Melissa Bakos</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section border-top">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2">
                <h4 className="margin-bottom-50 text-center">
                  Write a Comment
                </h4>
                <div className="text-right">
                  <form>
                    <div className="form-row">
                      <div className="col-12 col-sm-6">
                        <input
                          className=""
                          type="text"
                          name="name"
                          placeholder="Name"
                          required
                        />
                      </div>
                      <div className="col-12 col-sm-6">
                        <input
                          className=""
                          type="email"
                          name="email"
                          placeholder="E-Mail"
                          required
                        />
                      </div>
                    </div>

                    <textarea
                      className="mt-1"
                      name="message"
                      placeholder="Message"
                    />

                    <div className="postBtn mt-3">
                      <button
                        className="button button-lg button-dark pCenter"
                        type="submit"
                      >
                        Post Comment
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <div className="footer bg-dark">
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-6 text-center text-md-left">
                  <p>&copy; 2018 FlaTheme, All Rights Reserved.</p>
                </div>
                <div className="col-12 col-md-6 text-center text-md-right">
                  <ul className="myList list-horizontal-unstyled">
                    <li>
                      <a href="#">Policy</a>
                    </li>
                    <li>
                      <a href="#">Terms &amp; Conditions</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default ImgaePost;
