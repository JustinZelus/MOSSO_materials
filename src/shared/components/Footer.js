import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="wrapper style1 align-center">
        <div className="inner">
          <ul className="icons">
            <li>
              <a href="https://yahoo.com" className="icon style2 fa-twitter">
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/MOSSOMOSSOSTRING/"
                className="icon style2 fa-facebook"
              >
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon style2 fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon style2 fa-linkedin">
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon style2 fa-envelope">
                <span className="label">Email</span>
              </a>
            </li>
          </ul>
          <p>&copy; For My Family</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
