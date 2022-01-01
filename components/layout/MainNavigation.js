import classes from "./MainNavigation.module.css";
import NextLink from "next/link";
import Image from "next/image";

function MainNavigation() {
  function toggl() {
    const cb = document.getElementById("toggle");
    cb.checked = false;
  }
  return (
    <section className={classes.container}>
      <div>
        <NextLink href="/" passHref>
          <div>
            <Image
              alt="kuku residency"
              src="/logo.png"
              width="150px"
              height="60px"
            />
          </div>
        </NextLink>
      </div>
      <div className="nav">
        <label className={classes.label} htmlFor="toggle">
          &#9776;
        </label>
        <input className={classes.toggle} type="checkbox" id="toggle" />
        <div className={classes.menu}>
          <NextLink href="/" passHref>
            <a className={classes.menu_links} onClick={toggl}>
              Home
            </a>
          </NextLink>

          <NextLink href="/discover" passHref>
            <a className={classes.menu_links} onClick={toggl}>
              Discover
            </a>
          </NextLink>
          <NextLink href="/contact" passHref>
            <a className={classes.menu_links_contact} onClick={toggl}>
              Contact Us
            </a>
          </NextLink>
        </div>
      </div>
    </section>
  );
}

export default MainNavigation;
