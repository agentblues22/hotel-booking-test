import classes from "./Collage.module.css";

import NextLink from "next/link";

function Collage() {
  return (
    <div className={classes.collage_main}>
      <div className={classes.collage_item1}>
        <NextLink href="/Explore#ph1">
          <div className={classes.hover_over}>Guruvayoor Temple</div>
        </NextLink>
      </div>

      <div className={classes.collage_item2}>
        <NextLink href="/Explore#ph2">
          <div className={classes.hover_over}>Vadakkumnathan Temple</div>
        </NextLink>
      </div>
      <div className={classes.collage_item3}>
        <NextLink href="/Explore#ph3">
          <div className={classes.hover_over}>Athirapilly Waterfalls </div>
        </NextLink>
      </div>
      <div className={classes.collage_item4}>
        <NextLink href="/Explore#ph4">
          <div className={classes.hover_over1}>Kerala Kalamandalam </div>
        </NextLink>
      </div>
      <div className={classes.collage_item5}>
        <NextLink href="/Explore#ph5">
          <div className={classes.hover_over2}>Shakthan Thampuran Palace </div>
        </NextLink>
      </div>
      <div className={classes.collage_item6}>
        <NextLink href="/Explore#ph7">
          <div className={classes.hover_over}>Chavakkad Beach</div>
        </NextLink>
      </div>
    </div>
  );
}

export default Collage;
