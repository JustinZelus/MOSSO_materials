import React, { Component } from "react";

class Article extends Component {


  componentDidMount() {
    // console.log("child");
    // console.log(this.props.gallery);
    // this.setState({
    //     galleryFullUrl: this.props.gallery
    // });
  }

  render() {
    // const galleryFullUrl =
    //   this.props.galleryFullUrl || "/images/none.jpg";
    // const galleryThumb = this.props.galleryThumb || "/images/none.jpg";
    // const title = this.props.title || "none";
    // const description = this.props.description || "none";
    // const btnText = this.props.btnText || "button";
    return (
      <article>
        <a href={this.props.galleryFullUrl} className="image">
          <img src={this.props.galleryThumb} alt="" />
        </a>
        <div className="caption">
          <h3> {this.props.title}</h3>
          <p>{this.props.description}</p>
          <ul className="actions fixed">
            <li>
              <span className="button small">"詳細資訊"</span>
            </li>
          </ul>
        </div>
      </article>
    );
  }
}

// Article.propTypes = {
//     galleryFullUrl: PropTypes.number
// };

export default Article;
