import React, { Component } from "react";
import $ from "jquery";

class Old_Ticket extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {};
  }
  componentDidMount() {
    this.forceUpdate();
  }

  componentWillReceiveProps() {}

  render() {
    // var accordionTitle = $(".accordion-title");

    // accordionTitle.on("click", function() {
    //   var accordionList = $(this).parent("li");
    //   var accordionContent = this.nextElementSibling;

    //   if (accordionList.hasClass("active")) {
    //     accordionList.removeClass("active");
    //     accordionContent.style.maxHeight = null;
    //   } else {
    //     accordionList.addClass("active");
    //     if (
    //       $(this)
    //         .closest(".accordion")
    //         .hasClass("accordion-oneopen")
    //     ) {
    //       $(this)
    //         .closest(".accordion")
    //         .children("li")
    //         .removeClass("active");
    //       accordionList.addClass("active");
    //       $(".accordion-oneopen > li > .accordion-content").css(
    //         "max-height",
    //         "0"
    //       );
    //     }
    //     accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
    //   }
    // });

    // //
    // // Give max-height to Accordion's active content //
    // //
    // if ($(".accordion li").hasClass("active")) {
    //   var accordionActiveContent = $(
    //     ".accordion > li.active > .accordion-content"
    //   );
    //   var accordionHeight = accordionActiveContent.prop("scrollHeight");

    //   accordionActiveContent.css({ "max-height": accordionHeight + "px" });
    // }

    return (
      <div className="myTypography">
        <div className="section">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                <div className="section-title text-center">
                  <h3>Frequently Asked Questions</h3>
                </div>
                <ul ref={this.myRef} className="accordion accordion-oneopen">
                  <li className="active">
                    <div className="accordion-title">
                      <h6 className="heading-uppercase">Question?</h6>
                    </div>
                    <div className="accordion-content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit.
                      </p>
                    </div>
                  </li>

                  <li>
                    <div className="accordion-title">
                      <h6 className="heading-uppercase">Question?</h6>
                    </div>
                    <div className="accordion-content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Aenean massa. Cum sociis natoque penatibus et
                        magnis dis parturient montes, nascetur ridiculus mus.
                      </p>
                    </div>
                  </li>

                  <li>
                    <div className="accordion-title">
                      <h6 className="heading-uppercase">Question?</h6>
                    </div>
                    <div className="accordion-content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Aenean massa. Cum sociis natoque penatibus et
                        magnis dis parturient montes, nascetur ridiculus mus.
                      </p>
                    </div>
                  </li>

                  <li>
                    <div className="accordion-title">
                      <h6 className="heading-uppercase">Question?</h6>
                    </div>
                    <div className="accordion-content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Aenean massa. Cum sociis natoque penatibus et
                        magnis dis parturient montes, nascetur ridiculus mus.
                      </p>
                    </div>
                  </li>

                  <li>
                    <div className="accordion-title">
                      <h6 className="heading-uppercase">Question?</h6>
                    </div>
                    <div className="accordion-content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Aenean massa. Cum sociis natoque penatibus et
                        magnis dis parturient montes, nascetur ridiculus mus.
                      </p>
                    </div>
                  </li>

                  <li>
                    <div className="accordion-title">
                      <h6 className="heading-uppercase">Question?</h6>
                    </div>
                    <div className="accordion-content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Aenean massa. Cum sociis natoque penatibus et
                        magnis dis parturient montes, nascetur ridiculus mus.
                      </p>
                    </div>
                  </li>

                  <li>
                    <div className="accordion-title">
                      <h6 className="heading-uppercase">Question?</h6>
                    </div>
                    <div className="accordion-content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Aenean massa. Cum sociis natoque penatibus et
                        magnis dis parturient montes, nascetur ridiculus mus.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <div className="footer bg-dark-lighter">
            <div className="container text-center">
              <h3>Mono</h3>
              <ul className="myList list-horizontal-unstyled icon-lg margin-top-10">
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

          <div className="footer-bottom bg-dark">
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

export default Old_Ticket;
