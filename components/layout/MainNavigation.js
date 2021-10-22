import classes from "./MainNavigation.module.css";
import NextLink from "next/link";
import React from "react";

function makeCheck(e) {
  this.refs.checkbox.checked = false;
}

class MainNavigation extends React.Component {
  render() {
    return (
      <section className={classes.container}>
        <div>
          <button className={classes.item_left}>logo</button>
        </div>
        <div className="nav">
          <label className={classes.label} htmlFor="toggle">
            &#9776;
          </label>
          <input
            className={classes.toggle}
            type="checkbox"
            ref="checkbox"
            id="toggle"
          />
          <div className={classes.menu}>
            <NextLink href="/" passHref>
              <a className={classes.menu_links} onClick={makeCheck}>
                Home
              </a>
            </NextLink>

            <NextLink href="/discover" passHref>
              <a className={classes.menu_links} onClick={makeCheck}>
                Discover
              </a>
            </NextLink>
            <NextLink href="/contact" passHref>
              <a className={classes.menu_links_contact} onClick={makeCheck}>
                Contact Us
              </a>
            </NextLink>
          </div>
        </div>
      </section>
    );
  }
}

export default MainNavigation;
