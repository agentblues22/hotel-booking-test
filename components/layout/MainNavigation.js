import classes from "./MainNavigation.module.css";
import NextLink from "next/link";
import Image from "next/image";

function MainNavigation() {
  return (
    <section className={classes.container}>
      <div>
        <div>
          <Image
            alt="kuku residency"
            src="/logo.png"
            width="150px"
            height="60px"
          />
        </div>
      </div>
      <div className="nav">
        <label className={classes.label} htmlFor="toggle">
          &#9776;
        </label>
        <input className={classes.toggle} type="checkbox" id="toggle" />
        <div className={classes.menu}>
          <NextLink href="/" passHref>
            <a className={classes.menu_links}>Home</a>
          </NextLink>

          <NextLink href="/discover" passHref>
            <a className={classes.menu_links}>Discover</a>
          </NextLink>
          <NextLink href="/contact" passHref>
            <a className={classes.menu_links_contact}>Contact Us</a>
          </NextLink>
        </div>
      </div>
    </section>
  );
}

export default MainNavigation;
