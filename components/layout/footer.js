import classes from "./footer.module.css";
import NextLink from "next/link";
import Image from "next/image";
import Map from "../layout/map";

function Footer() {
  return (
    <section className={classes.footer}>
      <div className={classes.maincontainer}>
        <div className={classes.grid_container}>
          <div className={classes.grid_item_first}>
            <button className={classes.button}> Logo</button>
            <p className={classes.heading_four}>
              Come and stay like a local at Kuku Residency
            </p>
            <div>
              <Map />
            </div>
          </div>
          <div className={classes.grid_item_middle}>
            <NextLink href="/">
              <a className={classes.footerlinks}>Home</a>
            </NextLink>

            <NextLink href="/discover">
              <a className={classes.footerlinks}>Discover</a>
            </NextLink>
            <NextLink href="/contact">
              <a className={classes.footerlinks}>Contact Us</a>
            </NextLink>
          </div>
          <div className={classes.grid_item_last}>
            <h4 className={classes.heading_four}>Address:</h4>
            <p className={classes.heading_four}>
              Kuku Residency, Near Thrissur Medical College, Mundathickode Rd,
              Peringandoor, Kerala 680596, India
            </p>
            <h4 className={classes.heading_four}>E-mail:</h4>
            <p className={classes.heading_four}>
              <NextLink href="mailto:kukuresidencytcr@gmail.com">
                kukuresidencytcr@gmail.com
              </NextLink>
            </p>
            <div className={classes.socialcontainer}>
              <a
                className={classes.img1}
                href="https://www.twitter.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image
                  alt="twitter"
                  src="/twitter.png"
                  width="30px"
                  height="30px"
                />
              </a>
              <a
                className={classes.img2}
                href="https://www.facebook.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image
                  alt="facebook"
                  src="/facebook.png"
                  width="30px"
                  height="30px"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Footer;
