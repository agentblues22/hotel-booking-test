import classes from "../styles/discover.module.css";

import Roomcarousal from "../components/roomcarousal";
import Icongallery from "../components/Icongallery";

export default function Discover() {
  const photos = [
    {
      description:
        "The standard room features vibrant décor, combining executive furnishings with twin bed and ample closet space.",
      heading: "Standard Room",
      area: "160 sq.ft",
      tariff: "1480 Incl of taxes",
      max_occ: "2",
      id: "ph1",
      url: [
        {
          image: "/room1/room 1.jpg",
        },
        {
          image: "/room1/room 2.jpg",
        },
        {
          image: "/room1/room 3.jpg",
        },
        {
          image: "/room1/room 4.jpg",
        },
      ],
    },
    {
      description:
        "Deluxe room features a super comfy twin beds draped in crisp white linen, a seating area and a comfortable workspace. Each room has been designed and furnished attractively. ",
      heading: "Deluxe Room",
      area: "200 sq.ft",
      tariff: "1680 Incl of taxes",
      max_occ: "2",
      id: "ph2",
      url: [
        {
          image: "/room2/room 1.jpg",
        },
        {
          image: "/room2/room 2.jpg",
        },
        {
          image: "/room2/room 3.jpg",
        },
        {
          image: "/room2/room 4.jpg",
        },
      ],
    },
    {
      description:
        "The Executive rooms give you a space where you can relax your every second. It is a spacious room with a two twin size beds, a dedicated seating area and stylishly designed with detail to make your stay effortless and luxurious.",
      heading: "Executive Room",
      area: "280 sq.ft",
      tariff: "2520 Incl of taxes",
      max_occ: "3",
      id: "ph3",
      url: [
        {
          image: "/room3/room 1.jpg",
        },
        {
          image: "/room3/room 2.jpg",
        },
        {
          image: "/room3/room 3.jpg",
        },
        {
          image: "/room3/room 4.jpg",
        },
      ],
    },
  ];
  return (
    <div className={classes.room_main}>
      {photos.map((photo) => {
        return (
          <div key={photo.id} id={photo.id} className={classes.room_container}>
            <Roomcarousal
              id={photo.id}
              images={photo.url}
              className={classes.room_imgcontainer}
            />
            <div className={classes.room_info}>
              <div className={classes.room_heading}>
                <div>{photo.heading}</div>
              </div>
              <div className={classes.room_paragraph}>{photo.description}</div>
              <div>
                <p className={classes.stats}>
                  <span className={classes.spantext}>Space size:</span>
                  {photo.area}
                </p>
                <p className={classes.stats}>
                  <span className={classes.spantext}>Max Occupancy:</span>
                  {photo.max_occ}
                </p>
                <p className={classes.stats}>
                  <span className={classes.spantext}>Tariff:</span>
                  {photo.tariff}
                </p>
              </div>

              <Icongallery />
            </div>
          </div>
        );
      })}
    </div>
  );
}
