import NextLink from "next/link";
import classes from "../styles/contact.module.css";
import Image from "next/image";
import React from "react";
//import { Alert } from "react-bootstrap";
import axios from "axios";
import { Component } from "react";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "name",
      subject: "enter your subject here...",
      email: "example@example.com",
      query: "text here",
      error: "",
    };
  }

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleSubjectChange = (event) => {
    this.setState({
      subject: event.target.value,
    });
  };
  handleMailChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  handleQueryChange = (event) => {
    this.setState({
      query: event.target.value,
    });
  };

  handleSubmit = (event) => {
    if (
      this.state.name.replace(/\s+/g, " ").trim() == "" ||
      this.state.name.replace(/\s+/g, " ").trim() == "name" ||
      this.state.name.replace(/\s+/g, " ").trim() == " "
    ) {
      this.errorHandler();
    } else {
      if (
        this.state.email.replace(/\s+/g, " ").trim() == "" ||
        this.state.email.replace(/\s+/g, " ").trim() == "example@example.com" ||
        this.state.email.replace(/\s+/g, " ").trim() == " "
      ) {
        this.errorHandler();
      } else {
        if (
          this.state.query.replace(/\s+/g, " ").trim() == "" ||
          this.state.query.replace(/\s+/g, " ").trim() == "text here" ||
          this.state.query.replace(/\s+/g, " ").trim() == " "
        ) {
          this.errorHandler();
        } else {
          if (
            this.state.subject.replace(/\s+/g, " ").trim() == "" ||
            this.state.subject.replace(/\s+/g, " ").trim() ==
              "enter your subject here..." ||
            this.state.subject.replace(/\s+/g, " ").trim() == " "
          ) {
            this.errorHandler();
          } else {
            this.successHandler();
          }
        }
      }
    }
    event.preventDefault();
  };

  errorHandler() {
    alert("components marked with * are necessary");
  }
  successHandler() {
    axios
      .post("https://kuku-backend.herokuapp.com/contacts", {
        name: this.state.name,
        email: this.state.email,
        subject: this.state.subject,
        queries: this.state.query,
      })
      .then(function (response) {
        if (response.data == "error") {
          alert("Error Sending Messages");
          window.location.reload();
        } else if (response.data == "success") {
          alert("Message Sent Successfully");
          window.location.reload();
        } else {
          alert(response.data);
        }
      });
  }

  render() {
    return (
      <section className={classes.main_section}>
        <div className={classes.main_page}>
          <div className={classes.main_container}>
            <form className={classes.form_main} onSubmit={this.handleSubmit}>
              <label htmlFor="name">
                Name <span className={classes.span}>*</span>
              </label>
              <input
                className={classes.form_text}
                type="text"
                id="name"
                placeholder={this.state.name}
                onChange={this.handleNameChange}
              />

              <label htmlFor="subject">
                Subject<span className={classes.span}>*</span>
              </label>
              <input
                className={classes.form_text}
                type="text"
                id="subject"
                placeholder={this.state.subject}
                onChange={this.handleSubjectChange}
              ></input>
              <label htmlFor="email">
                Email<span className={classes.span}>*</span>
              </label>
              <input
                className={classes.form_text}
                type="email"
                id="email"
                placeholder={this.state.email}
                onChange={this.handleMailChange}
              ></input>
              <label htmlFor="query">
                Post your question/comments
                <span className={classes.span}>*</span>
              </label>
              <textarea
                className={classes.form_textarea}
                id="query"
                placeholder={this.state.query}
                onChange={this.handleQueryChange}
              ></textarea>

              <input
                className={classes.button}
                type="submit"
                value="Submit"
              ></input>
            </form>
          </div>
          <div className={classes.socials_container}>
            <div className={classes.Heading_container}></div>
            <div className={classes.links}>
              <div className={classes.link_object}>
                <div className={classes.subheading}>Address:</div>

                <div>
                  Kuku Residency, Near Thrissur Medical College, Mundathickode
                  Rd,
                  <br />
                  Peringandoor, Kerala 680596, India
                </div>
              </div>
              <div className={classes.link_object}>
                <div className={classes.subheading}>Phone:</div>
                <div>
                  <a href="tel:+919020316400" passHref>
                    +91 902 031 6400
                  </a>{" "}
                  /
                  <a href="tel:+918075698275" passHref>
                    +91 807 569 8245
                  </a>
                </div>
              </div>
              <div className={classes.link_object}>
                <div className={classes.subheading}>Socials:</div>
                <div className={classes.social_media}>
                  <div>
                    <NextLink href="https://www.facebook.com" passHref>
                      <Image
                        alt="facebook"
                        src="/facebook_black.png"
                        width="30px"
                        height="30px"
                      />
                    </NextLink>
                  </div>
                  <div>
                    <NextLink href="https://www.twitter.com" passHref>
                      <Image
                        alt="twitter"
                        src="/twitter_black.png"
                        width="30px"
                        height="30px"
                      />
                    </NextLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
