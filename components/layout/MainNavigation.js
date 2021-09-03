import classes from "./MainNavigation.module.css";
import NextLink from "next/link";

function MainNavigation() {
  return (
    <section className={classes.container}>
      <div>
        <button className={classes.item_left}>logo</button>
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
