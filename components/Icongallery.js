import Image from "next/image";
import classes from "./Icongallery.module.css";

function Icongallery() {
  const photos = [
    {
      description: "Wifi",
      url: "/icons/Wifi.png",
      key: "01",
    },
    {
      description: "Taxi",
      url: "/icons/taxi.png",
      key: "02",
    },
    {
      description: "Housekeeping",
      url: "/icons/housekeeping.png",
      key: "03",
    },
    {
      description: "AC and Non-AC",
      url: "/icons/AC.png",
      key: "04",
    },
  ];
  return (
    <div className={classes.imagegallery_main}>
      {photos.map((photo) => {
        return (
          <div key={photo.key} className={classes.imagegallery_sub}>
            <Image
              alt={photo.description}
              className={classes.imagegallery_container}
              src={photo.url}
              width="60px"
              height="50px"
            ></Image>
            <div className={classes.imagegallery_paragraph}>
              {photo.description}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Icongallery;
