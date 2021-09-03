import Image from "next/image";
import classes from "./Pricecard.module.css";
import NextLink from "next/link";

function Pricecard() {
  const photos = [
    {
      description: "room type 1",
      url: "/carouselphotos/photo 3.jpg",
      price: "1100",
      rating: "4.0/5",
      key: "01",
    },
    {
      description: "room type 2",
      url: "/carouselphotos/photo 2.jpg",
      price: "1000",
      rating: "4.0/5",
      key: "02",
    },
  ];
  return (
    <div className={classes.pricecard_main}>
      {photos.map((photo) => {
        return (
          <NextLink key={photo.key} href="/discover">
            <div className={classes.pricecard_sub}>
              <Image
                alt={photo.description}
                className={classes.pricecard_container}
                src={photo.url}
                width="500px"
                height="400px"
              ></Image>
              <div className={classes.pricecard_paragraph}>
                <div className={classes.pricecard_text}>
                  {photo.description}
                </div>
                <div className={classes.prices_rating}>
                  <div className={classes.rating}>
                    user rating : {photo.rating}
                  </div>
                  <div className={classes.price}> price : ₹{photo.price}</div>
                </div>
              </div>
            </div>
          </NextLink>
        );
      })}
    </div>
  );
}

export default Pricecard;
