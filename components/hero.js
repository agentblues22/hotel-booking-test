import Slider from "react-slick";
import Image from "next/image";
import classes from "./hero.module.css";
import Availability from "./Availability";

import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

const photos = [
  {
    name: "photo 1",
    url: "/carouselphotos/photo 1.jpg",
    desc: "photo descrption",
    key: "01",
  },
  {
    name: "photo 2",
    url: "/carouselphotos/photo 2.jpg",
    desc: "photo descrption",
    key: "02",
  },
  {
    name: "photo 3",
    url: "/carouselphotos/photo 3.jpg",
    desc: "photo descrption",
    key: "03",
  },
];
const NextArrow = ({ onClick }) => {
  return (
    <div className="arrow_next_hero" onClick={onClick}>
      <BsChevronRight />
    </div>
  );
};
const PrevArrow = ({ onClick }) => {
  return (
    <div className="arrow_prev_hero" onClick={onClick}>
      <BsChevronLeft />
    </div>
  );
};
const Hero = () => {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    slidesToScroll: 1,
    className: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className={classes.App}>
      <Slider {...settings}>
        {photos.map((photo) => {
          return (
            <div key={photo.key} className={classes.hero_main}>
              <div className={classes.hero_wrapper}>
                <div alt={photo.name} className={classes.text_and_image}>
                  <img
                    className={classes.background}
                    alt="residency"
                    src={photo.url}
                  />
                  <div className={classes.text}>
                    <div className={classes.hero_header}>
                      Come and stay like a local at
                      <span className={classes.hero_span}> Kuku Residency</span>
                    </div>
                    <div className={classes.hero_description}>
                      Kuku Residency is conveniently located in Thrissur for
                      both Business and Leisure travel. The hotel is centrally
                      located right next to Thrissur Medical College, a 25
                      minutes drive from the Thrissur Railway Station and KSRTC
                      bus stand, and 90 minutes away from Cochin International
                      Airport
                    </div>
                  </div>
                  <Availability />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Hero;
