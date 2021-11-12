import Slider from "react-slick";
import Image from "next/image";
import classes from "./gallery.module.css";

import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

const NextArrow = ({ onClick }) => {
  return (
    <div className="arrow_next_gp" onClick={onClick}>
      <BsChevronRight />
    </div>
  );
};
const PrevArrow = ({ onClick }) => {
  return (
    <div className="arrow_prev_gp" onClick={onClick}>
      <BsChevronLeft />
    </div>
  );
};
const Gallery = (props) => {
  const photos = props.images;
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    slidesToScroll: 1,
    className: 1,
  };
  return (
    <div className={classes.App}>
      <Slider {...settings}>
        {photos.map((photo) => {
          return (
            <div key={photo.key} className={classes.carousel_shadow}>
              <Image
                alt={photo.name}
                className="carouselimagecontainer"
                src={photo.url}
                width="650px"
                height="500px"
              ></Image>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Gallery;
