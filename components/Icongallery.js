import Image from "next/image";
import classes from "./Icongallery.module.css";

function Icongallery() {
  const photos = [
    {
      description: "Free Wifi",
      url: "/icons/Wifi.png",
      key: "01",
    },
    {
      description: "Free Parking",
      url: "/icons/taxi.png",
      key: "02",
    },
    {
      description: "24x7 room service",
      url: "/icons/housekeeping.png",
      key: "03",
    },
    {
      description: " Air-condition system",
      url: "/icons/AC.png",
      key: "04",
    },
    { description: "Satellite and Cable TV ", url: "/icons/TV.png", key: "05" },
    {
      description: "24X7 hot water",
      url: "/icons/hotwater.png",
      key: "06",
    },
    {
      description: "Extra bed available ",
      url: "/icons/bed.png",
      key: "07",
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
              width="40px"
              height="30px"
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
