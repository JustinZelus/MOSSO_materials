import React from "react";

class Ticket extends React.Component {
  render() {
    const padding = {
      backgroundColor: "#ffffff",
      paddingTop: "23px",
      paddingBottom: "23px"
    };
    return (
      <div className="myTypography">
        <div className="section">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                <div className="section-title text-center">
                  <h3>摩 手 售 票 F A Q</h3>
                </div>
                <div id="accordion">
                  <div className="card">
                    <div className="card-header" style={padding}>
                      <a
                        className="card-link"
                        data-toggle="collapse"
                        href="#collapseOne"
                        style={{ textDecoration: "none" }}
                      >
                        Q.Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit？
                      </a>
                    </div>
                    <div
                      id="collapseOne"
                      className="collapse show"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        Morbi id ante sed ex pharetra lacinia sit amet vel
                        massa. Donec facilisis laoreet nulla eu bibendum. Donec
                        ut ex risus.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" style={padding}>
                      <a
                        className="collapsed card-link"
                        data-toggle="collapse"
                        href="#collapseTwo"
                        style={{ textDecoration: "none" }}
                      >
                        Q.Fusce lorem lectus, pharetra pretium massa et？
                      </a>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Morbi id ante sed ex pharetra lacinia sit amet vel
                        massa.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" style={padding}>
                      <a
                        className="collapsed card-link"
                        data-toggle="collapse"
                        href="#collapseThree"
                        style={{ textDecoration: "none" }}
                      >
                        Q.Morbi id ante sed ex pharetra lacinia sit amet vel
                        massa.？
                      </a>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        Donec facilisis laoreet nulla eu bibendum. Donec ut ex
                        risus. Fusce lorem lectus, pharetra pretium massa et,
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" style={padding}>
                      <a
                        className="collapsed card-link"
                        data-toggle="collapse"
                        href="#collapseFour"
                        style={{ textDecoration: "none" }}
                      >
                        Q.Fusce lorem lectus, pharetra pretium massa et？
                      </a>
                    </div>
                    <div
                      id="collapseFour"
                      className="collapse"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Morbi id ante sed ex pharetra lacinia sit amet vel
                        massa. Donec facilisis laoreet nulla eu bibendum. Donec
                        ut ex risus.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" style={padding}>
                      <a
                        className="collapsed card-link"
                        data-toggle="collapse"
                        href="#collapseFive"
                        style={{ textDecoration: "none" }}
                      >
                        Q.Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit？
                      </a>
                    </div>
                    <div
                      id="collapseFive"
                      className="collapse"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Morbi id ante sed ex pharetra lacinia sit amet vel
                        massa. Donec facilisis laoreet nulla eu bibendum. Donec
                        ut ex risus. Fusce lorem lectus, pharetra pretium massa
                        et, hendrerit vestibulum odio lorem ipsum dolor sit
                        amet.
                      </div>
                    </div>
                  </div>
                </div>
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

export default Ticket;
