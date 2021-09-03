import classes from "./Collage.module.css";

import NextLink from "next/link";

function Collage() {
  return (
    <div className={classes.collage_main}>
      <div className={classes.collage_item1}>
        <NextLink href="/Explore#ph1">
          <div className={classes.hover_over}>Photo 1</div>
        </NextLink>
      </div>

      <div className={classes.collage_item2}>
        <NextLink href="/Explore#ph2">
          <div className={classes.hover_over}>Photo 2</div>
        </NextLink>
      </div>
      <div className={classes.collage_item3}>
        <NextLink href="/Explore#ph3">
          <div className={classes.hover_over}>Photo 3</div>
        </NextLink>
      </div>
      <div className={classes.collage_item4}>
        <NextLink href="/Explore#ph4">
          <div className={classes.hover_over1}>Photo 4</div>
        </NextLink>
      </div>
      <div className={classes.collage_item5}>
        <NextLink href="/Explore#ph5">
          <div className={classes.hover_over2}>Photo 5</div>
        </NextLink>
      </div>
      <div className={classes.collage_item6}>
        <NextLink href="/Explore#ph6">
          <div className={classes.hover_over}>Photo 6</div>
        </NextLink>
      </div>
    </div>
  );
}

export default Collage;
