import react, { Component } from "react";
import NextLink from "next/link";
import classes from "./Availability.module.css";
import next from "next";

class Availability extends Component {
  render() {
    return (
      <div className={classes.main_formcontainer}>
        <form className={classes.form_main} action="./discover">
          <div className={classes.form_itemcontainer}>
            <label className={classes.form_label} htmlFor="fname">
              From:
            </label>
            <input
              className={classes.form_item}
              type="date"
              id="fname"
              name="firstname"
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
            />
          </div>
          <div className={classes.form_itemcontainer}>
            <label className={classes.form_label} htmlFor="country">
              type of room:
            </label>
            <select
              className={classes.form_item}
              id="Room_type"
              name="Room_type"
            >
              <option className={classes.form_option} value="type_1">
                2 guests
              </option>
              <option className={classes.form_option} value="type_2">
                2 guest
              </option>
              <option className={classes.form_option} value="type_3">
                2 guests with AC
              </option>
            </select>
          </div>
          <div className={classes.form_itemcontainer}>
            <input
              className={classes.form_button}
              type="submit"
              value="Check Availability"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Availability;
