import classes from "../styles/Explore.module.css";
import Image from "next/image";

function Explore() {
  const photos = [
    {
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      heading: "heading of image",
      url: "/POI/photo 1.jpg",
      distance: 10,
      taxi: "yes",
      id: "ph1",
    },
    {
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      heading: "heading of image",
      url: "/POI/photo 2.jpg",
      distance: 10,
      taxi: "yes",
      id: "ph2",
    },
    {
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      heading: "heading of image",
      url: "/POI/photo 3.jpg",
      distance: 10,
      taxi: "yes",
      id: "ph3",
    },
    {
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      heading: "heading of image",
      url: "/POI/photo 4.jpg",
      distance: 10,
      taxi: "yes",
      id: "ph4",
    },
    {
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      heading: "heading of image",
      url: "/POI/photo 5.jpg",
      distance: 10,
      taxi: "yes",
      id: "ph5",
    },
    {
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      heading: "heading of image",
      url: "/POI/photo 6.jpg",
      distance: 10,
      taxi: "yes",
      id: "ph6",
    },
  ];
  return (
    <body>
      <div className={classes.POI_main}>
        {photos.map((photo) => {
          return (
            <div key={photo.id} id={photo.id} className={classes.POI_container}>
              <Image
                alt={photo.heading}
                className={classes.POI_imgcontainer}
                src={photo.url}
                width="800px"
                height="600px"
              ></Image>
              <div className={classes.POI_info}>
                <div className={classes.POI_heading}>
                  <div>{photo.heading}</div>
                </div>
                <div className={classes.POI_paragraph}>{photo.description}</div>
                <div className={classes.POI_misc}>
                  <div>Distance from Residency : {photo.distance} Km</div>
                  <div>taxi service : {photo.taxi}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </body>
  );
}

export default Explore;
