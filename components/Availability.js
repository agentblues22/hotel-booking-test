import React, { Component } from "react";
import { render } from "react-dom";
import classes from "./Availability.module.css";
import Image from "next/dist/client/image";

var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();

today = yyyy + "-" + mm + "-" + dd;

class Availability extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      from: "",
      to: "",
      min_to: today,
      min_from: today,
      max_from: "",
    };
  }

  handleFrom = (event) => {
    this.setState({
      from: event.target.value,
      min_to: event.target.value,
    });
  };
  handleTo = (event) => {
    this.setState({
      to: event.target.value,
      max_from: event.target.value,
    });
  };
  render() {
    return (
      <div className={classes.main_formcontainer}>
        <form className={classes.form_main} action="/discover">
          <div className={classes.form_itemcontainer}>
            <label className={classes.form_label} htmlFor="fname">
              From:
            </label>
            <input
              className={classes.form_item}
              type="date"
              id="fname"
              name="firstname"
              min={this.state.min_from}
              value={this.state.from}
              max={this.state.max_from}
              onChange={this.handleFrom}
            />
          </div>
          <div className={classes.form_itemcontainer}>
            <label className={classes.form_label} htmlFor="lname">
              To:
            </label>
            <input
              className={classes.form_item}
              type="date"
              id="lname"
              name="lastname"
              min={this.state.min_to}
              value={this.state.to}
              onChange={this.handleTo}
            />
          </div>
          <div className={classes.form_itemcontainer}>
            <label className={classes.form_label} htmlFor="number">
              No. of Guests:
            </label>
            <input
              type="number"
              min="1"
              className={classes.form_item}
              id="room"
              name="room"
              placeholder="1"
            ></input>
          </div>
          <div className={classes.form_itemcontainer}>
            <button
              className={classes.form_button}
              type="submit"
              value="Check Availability"
            >
              <Image src="/search.png" height="30px" width="30px"></Image>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Availability;
