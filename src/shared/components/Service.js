import React, { Component } from "react";
class Service extends Component {
  render() {
    //const icon = this.props.service.icon || 'fa-amazon';
    return (
      <section>
        <span className={"icon style2 major " + this.props.serviceIcon} />
        <h3> {this.props.title}</h3> <p> {this.props.description}</p>
      </section>
    );
  }
}

export default Service;
