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
              <form onSubmit={this.handleSubmit.bind(this)}>
                <input
                  className="no_border"
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={this.handleChange}
                  placeholder="Your name..."
                  required
                ></input>
                <input
                  className="no_border"
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                  placeholder="Your email..."
                  required
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
                  required
                ></textarea>
                <input class="submit" type="submit" value="Submit"></input>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    // fetch("http://localhost:3002/send", {
    //   method: "POST",
    //   body: JSON.stringify(this.state),
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((response) => response.json)
    //   .then((response) => {
    //     if (response.status === "success") {
    //       alert("Message Send");
    //       this.resetForm();
    //     } else if (response.status === "fail") {
    //       alert("Message failed to send");
    //     }
    //   });
    const templateId = "template_glwru64";
    this.sendFeedback(templateId, {
      message_html: this.state.message,
      from_name: this.state.name,
      to_email: this.state.email,
    });
  };

  sendFeedback(templateId, variables) {
    window.emailjs
      .send("default_service", templateId, variables)
      .then((res) => {
        console.log("email sent");
      })
      .catch((err) => console.error("Email failed"));
  }

  resetForm() {
    this.setState({ name: "", email: "", message: "" });
  }

  handleChange = ({ target: { value, name } }) => {
    this.setState({ ...this.state, [name]: value });
  };
}

export default Contact;
