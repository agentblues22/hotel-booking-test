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
            title=" Will I be charged for extra guests occupying my room?"
            body="Hotel room rates vary by date and by the number of adults occupying a single room. To accommodate more than two guests, you will have additional charges. Please contact the reception at +91 902 031 6400 / +91 807 569 8245 or email us at kukuresidencytcr@gmail.com for more details. "
          />
          <Accordion
            title=" What is your policy regarding cancellation? "
            body="If your travel plans change, you can cancel or modify your reservation in accordance with the hotel's cancellation policy. Please contact the reception at +91 902 031 6400 / +91 807 569 8245 or email us at kukuresidencytcr@gmail.com for more details."
          />
          <Accordion
            title="Where can I find maps and directions to the hotel? "
            body=" When on the hotel’s Contact Us page, you’ll find contact details for the hotel. Scroll down further to the section on how to get to the hotel. This will include an interactive map helping you find the hotel from your chosen location, via car, public transport or on foot. For any questions, please contact the reception at +91 902 031 6400 / +91 807 569 8245 or email us at kukuresidencytcr@gmail.com."
          />
          <Accordion
            title="Can I book more than one room at a time?"
            body="Yes, you can book up to twenty rooms at a time. Please contact the reception at +91 902 031 6400 / +91 807 569 8245 or email us at kukuresidencytcr@gmail.com for more details."
          />
          <Accordion
            title=" What if I arrive earlier or plan to leave later than I originally expected? Can I request a early check-in or a late check out? "
            body="We'll do our best to accommodate your change in travel plans; however, policies regarding early check-in and late check-out vary depending on availability of room. Please contact the reception at +91 902 031 6400 / +91 807 569 8245 or email us at kukuresidencytcr@gmail.com for any change in plan."
          />
          <Accordion
            title=" Is there a minimum age requirement to reserve a hotel room?"
            body="Although hotel policies may vary, most hotels have a minimum age requirement of 18 years old. Please contact the reception at +91 902 031 6400 / +91 807 569 8245 or email us at kukuresidencytcr@gmail.com prior to your arrival to make any necessary arrangements."
          />
        </div>
      </section>
    </body>
  );
}
