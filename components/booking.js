//import { BsGrid } from "react-icons/bs";
import classes from "./booking.module.css";
import { useForm } from "react-hook-form";
//import { Alert } from "react-bootstrap";
//import { hasBasePath } from "next/dist/next-server/lib/router/router";

const Booking = () => {
  const { register, handleSubmit } = useForm();

  return (
    <section className={classes.mainsection}>
      <div className={classes.form_maincontainer}>
        <div className={classes.heading}>
          <p>Book your rooms today...</p>
        </div>
        <form
          className={classes.form_container}
          onSubmit={handleSubmit((data) => {
            alert(JSON.stringify(data));
          })}
        >
          <div className={classes.grid_content1}>
            <div>
              <label className={classes.label_text} htmlFor="fname">
                First Name
              </label>
            </div>
            <input
              className={classes.input_text}
              type="text"
              id="fname"
              placeholder="Your name.."
              {...register("firstname", { required: true })}
            />
          </div>
          <div className={classes.grid_content2}>
            <div>
              <label className={classes.label_text} htmlFor="lname">
                Last Name
              </label>
            </div>
            <input
              className={classes.input_text}
              type="text"
              id="lname"
              placeholder="Your last name.."
              {...register("lastname", { required: true })}
            />
          </div>
          <div className={classes.grid_content3}>
            <div>
              <label className={classes.label_text} htmlFor="room_type">
                Room Type
              </label>
            </div>
            <select
              className={classes.input_text}
              id="room_type"
              name="room_type"
              {...register("room_type", { required: true })}
            >
              <option value="select">-select room-</option>
              <option value="single">Single</option>
              <option value="double">Double</option>
              <option value="double with ac">DOuble With AC</option>
            </select>
          </div>
          <div className={classes.grid_content4}>
            <div>
              <label className={classes.label_text} htmlFor="from_date">
                From
              </label>
            </div>
            <input
              {...register("from_date", { required: true })}
              className={classes.input_text}
              type="date"
              id="from_date"
            />
          </div>
          <div className={classes.grid_content5}>
            <div>
              <label className={classes.label_text} htmlFor="to_date">
                To
              </label>
            </div>
            <input
              {...register("to_date", { required: true })}
              className={classes.input_text}
              type="date"
              id="to_date"
            />
          </div>
          <div className={classes.grid_content6}></div>
          <div className={classes.grid_content7}>
            <input
              className={classes.input_button}
              type="submit"
              value="Book Now"
            />
          </div>
        </form>
      </div>
    </section>
  );
};
export default Booking;
