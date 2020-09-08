import React from "react";

const Contact = () => {
  return (
    <div className="contact_container">
      <div className="contact">
        <h1 className="contact_header">Contact me</h1>
        <div className="contact_form">
          <div className="form_wrapper">
            <form>
              <label for="name">Name</label>{" "}
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name..."
              ></input>
              <label for="email">Email</label>{" "}
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email..."
              ></input>
              <label for="message">Message</label>{" "}
              <textarea
                style={{ height: "200px" }}
                type="textarea"
                id="message"
                name="message"
                placeholder="Your message..."
              ></textarea>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
