import classes from "./Availability.module.css";

function Availability() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = yyyy + "-" + mm + "-" + dd;

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
            min={today}
            value={today}
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
            min={today}
            value={today}
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
            value="1"
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
