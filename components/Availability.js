import classes from "./Availability.module.css";

function Availability() {
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
          <label className={classes.form_label} htmlFor="number">
            No. of Guests:
          </label>
          <input
            type="number"
            min="1"
            className={classes.form_item}
            id="room"
            name="room"
          ></input>
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

export default Availability;
