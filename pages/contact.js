import NextLink from "next/link";
import classes from "../styles/contact.module.css";
import Image from "next/image";
import { useForm } from "react-hook-form";
//import { Alert } from "react-bootstrap";
import axios from "axios";

export default function Contact() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    axios
      .post("https://kuku-backend.herokuapp.com/contacts", {
        name: data.name,
        email: data.email,
        subject: data.subject,
        queries: data.query,
      })
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <section className={classes.main_section}>
      <div className={classes.main_page}>
        <div className={classes.main_container}>
          <form className={classes.form_main} onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">Name</label>
            <input
              className={classes.form_text}
              type="text"
              id="name"
              name="name"
              {...register("name", { required: "this is required" })}
              placeholder="Your name.."
            />

            <label htmlFor="subject">Subject</label>
            <input
              className={classes.form_text}
              type="text"
              id="subject"
              name="subject"
              {...register("subject", { required: true })}
              placeholder="subject"
            ></input>
            <label htmlFor="email">Email</label>
            <input
              className={classes.form_text}
              type="text"
              id="email"
              name="email"
              {...register("email", { required: true })}
              placeholder="name@example.com"
            ></input>
            <label htmlFor="query">Post your question/comments</label>
            <textarea
              className={classes.form_textarea}
              id="query"
              name="query"
              {...register("query", { required: true })}
              placeholder="write here..."
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
                example road,
                <br />
                example P.O example
              </div>
            </div>
            <div className={classes.link_object}>
              <div className={classes.subheading}>Phone:</div>
              <NextLink href="#" passHref>
                <div>0987654321</div>
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
