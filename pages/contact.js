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
    if (this.state.name == "" || this.state.name == "name") {
      this.errorHandler();
    } else {
      if (this.state.email == "" || this.state.email == "example@example.com") {
        this.errorHandler();
      } else {
        if (this.state.query == "" || this.state.query == "text here") {
          this.errorHandler();
        } else {
          if (
            this.state.subject == "" ||
            this.state.subject == "enter your subject here..."
          ) {
            this.errorHandler();
          } else {
            this.setState({
              error: "success",
            });
          }
        }
      }
    }
    event.preventDefault();
  };

  errorHandler() {
    this.setState({
      error: "components marked with * are necessary",
    });
  }
  render() {
    return (
      <section className={classes.main_section}>
        <div className={classes.main_page}>
          <div className={classes.main_container}>
            <form className={classes.form_main} onSubmit={this.handleSubmit}>
              <label htmlFor="name">Name</label>
              <input
                className={classes.form_text}
                type="text"
                id="name"
                value={this.state.name}
                onChange={this.handleNameChange}
              />

              <label htmlFor="subject">Subject</label>
              <input
                className={classes.form_text}
                type="text"
                id="subject"
                value={this.state.subject}
                onChange={this.handleSubjectChange}
              ></input>
              <label htmlFor="email">Email</label>
              <input
                className={classes.form_text}
                type="text"
                id="email"
                value={this.state.email}
                onChange={this.handleMailChange}
              ></input>
              <label htmlFor="query">Post your question/comments</label>
              <textarea
                className={classes.form_textarea}
                id="query"
                value={this.state.query}
                onChange={this.handleQueryChange}
              ></textarea>

              <input
                className={classes.button}
                type="submit"
                value="Submit"
              ></input>
            </form>
            <div>{this.state.error}</div>
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
                <NextLink href="#" passHref>
                  <div>+91 902 031 6400 / +91 807 569 8245</div>
                </NextLink>
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
