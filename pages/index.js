import NextLink from "next/link";
import Accordion from "../components/accordion";

import Gallery from "../components/gallery";

import classes from "../styles/Home.module.css";

import Pricecard from "../components/Pricecard";
import Collage from "../components/Collage";
import Hero from "../components/hero";
import Gallerypoint from "../components/Gallerypoint";

export default function Home() {
  return (
    <body>
      <section className={classes.hero_section}>
        <Hero />
      </section>
      <section className={classes.pricecard_section}>
        <div className={classes.pricecard_contain}>
          <Pricecard />
        </div>
      </section>
      <section className={classes.section_container}>
        <Gallerypoint />
      </section>
      <section className={classes.collage_sect}>
        <div className={classes.collage_section}>
          <div className={classes.collage_text}>
            Explore points of interests nearby!
            <div className={classes.paragraphCTA}>
              <p className={classes.para}>
                Few of the local attractions are Guruvayoor Temple,
                Vadakkumnathan Temple, Athirapilly Waterfalls, Kerala
                Kalamandalam, Shakthan Thampuran Palace, Peechi Dam, Chavakkad
                Beach etc.{" "}
              </p>
              <NextLink href="/Explore" passHref>
                <button className={classes.galleryCTA}>Explore</button>
              </NextLink>
            </div>
          </div>
          <div className={classes.collage_contain}>
            <Collage />
          </div>
        </div>
      </section>

      <section className={classes.FAQ_section}>
        <div className={classes.accordion_container}>
          <div className={classes.faq_heading}>Frequently Asked Questions</div>
          <Accordion
            title="location of the residency?"
            body="address of the residency is given in the footer. please refer."
          />
          <Accordion
            title="how long does a room stays booked?"
            body="rooms stay booked typically for 24 hours. for more info. contact the residency."
          />
          <Accordion
            title="are sundays closed?"
            body="during covid lockdown, sundays are currently closed.for more details contact residency. contact the residency."
          />
          <Accordion
            title="do we have hotel service as well?"
            body="still in the works. but we plan to have hotel service in the furure"
          />
        </div>
      </section>
    </body>
  );
}
