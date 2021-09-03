import classes from "./Availability.module.css";

function Availability() {
  return (
    <div className={classes.main_formcontainer}>
      <form className={classes.form_main} action="/action_page.php">
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
          <select className={classes.form_item} id="country" name="country">
            <option className={classes.form_option} value="australia">
              2 guests
            </option>
            <option className={classes.form_option} value="canada">
              2 guest
            </option>
            <option className={classes.form_option} value="usa">
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

export default Availability;
