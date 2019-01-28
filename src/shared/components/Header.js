import React from "react";
import { Switch, Route } from "react-router-dom";
import "../sass/style.scss";
import { Link } from "react-router-dom";
import Home from "./Home";

const Header = props => (
  <header>
    <nav className="navbar navbar-sticky">
      <div className="container text-center">
        <a className="navbar-brand" href="/">
          <h5 className="special">MÓSSO</h5>
        </a>
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" href="#">
              最新消息
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              本月活動
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              歷史回顧
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              MÓSSO商品
            </a>
          </li>
        </ul>
        <ul className="list-horizontal-unstyled position-center position-lg-right">
          <li>
            <a href="#">
              <i className="icon style3 fa-user" />
            </a>
          </li>
        </ul>
        <button className="nav-toggle-btn">
          <span className="lines" />
        </button>
      </div>
    </nav>
  </header>
);

export default Header;
