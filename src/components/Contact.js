import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  render() {
    const { name, email, message } = this.state;

    return (
      <div className="contact_container">
        <div className="contact">
          <h1 className="contact_header">Contact me</h1>
          <div className="contact_form">
            <div className="form_wrapper">
              <form method="POST">
                <input
                  className="no_border"
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={this.handleChange}
                  placeholder="Your name..."
                ></input>
                <input
                  className="no_border"
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                  placeholder="Your email..."
                ></input>
                <textarea
                  className="no_border"
                  style={{ minHeight: "40%" }}
                  type="textarea"
                  id="message"
                  name="message"
                  value={message}
                  onChange={this.handleChange}
                  placeholder="Your message..."
                ></textarea>
                <input
                  onSubmit={this.handleSubmit}
                  class="submit"
                  type="submit"
                  value="Submit"
                ></input>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

  handleSubmit = (e) => {
    e.preventDefault();
  };

  handleChange = ({ target: { value, name } }) => {
    this.setState({ ...this.state, [name]: value });
  };
}

export default Contact;
