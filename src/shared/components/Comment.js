import React, { Component } from "react";

class Comment extends Component {
  render() {
    return (
      <section className="wrapper style1 align-center">
        <div className="inner medium">
          <h2>聯絡我們</h2>
          <form method="post" action="#">
            <div className="fields">
              <div className="field half first">
                <label htmlFor="name">姓名</label>
                <input type="text" name="name" id="name" defaultValue="" />
              </div>
              <div className="field half">
                <label htmlFor="email">信箱</label>
                <input type="email" name="email" id="email" defaultValue="" />
              </div>
              <div className="field">
                <label htmlFor="message">內容</label>
                <textarea name="message" id="message" rows="6" />
              </div>
            </div>
            <ul className="actions special">
              <li>
                <input
                  type="submit"
                  name="submit"
                  id="submit"
                  defaultValue="Send Message"
                />
              </li>
            </ul>
          </form>
        </div>
      </section>
    );
  }
}

export default Comment;
