import classes from "../styles/discover.module.css";

import Roomcarousal from "../components/roomcarousal";
import Icongallery from "../components/Icongallery";

export default function Discover() {
  const photos = [
    {
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      heading: "heading of image",
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
      ],
    },
    {
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      heading: "heading of image",
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
      ],
    },
    {
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      heading: "heading of image",
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
              <div className={classes.room_misc}>
                <Icongallery />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
