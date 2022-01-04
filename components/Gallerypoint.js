import Slider from "react-slick";
import Image from "next/image";
import classes from "./Gallerypoint.module.css";

import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import Gallerypointimage from "./Gallerypointimage";

const photos = [
  {
    name: "Banquet Hall",
    images: [
      {
        name: "photo 1",
        url: "/carouselphotos/photo 12.jpg",
        desc: "photo descrption",
        key: "01",
      },
      {
        name: "photo 2",
        url: "/carouselphotos/photo 13.jpg",
        desc: "photo descrption",
        key: "02",
      },
      {
        name: "photo 3",
        url: "/carouselphotos/photo 14.jpg",
        desc: "photo descrption",
        key: "01",
      },
      {
        name: "photo 4",
        url: "/carouselphotos/photo 15.jpg",
        desc: "photo descrption",
        key: "02",
      },
    ],
    desc: "Our hall can conveniently accommodate 70+ guests with a separate dining area. We can host any special event like engagements, marriages, wedding reception, birthday parties etc. It can also be used for conferences, company meetings or seminars. For booking enquiries, please contact +91 902 031 6400 / +91 807 569 8245",
    key: "01",
  },
  {
    name: "Reader's Den",
    images: [
      {
        name: "photo 1",
        url: "/carouselphotos/photo 16.jpg",
        desc: "photo descrption",
        key: "01",
      },
      {
        name: "photo 2",
        url: "/carouselphotos/photo 17.jpg",
        desc: "photo descrption",
        key: "02",
      },
      {
        name: "photo 3",
        url: "/carouselphotos/photo 18.jpg",
        desc: "photo descrption",
        key: "01",
      },
      {
        name: "photo 4",
        url: "/carouselphotos/photo 19.jpg",
        desc: "photo descrption",
        key: "02",
      },
    ],
    desc: " The Reader’s Den provides a 24X7 A/C library for ambitious and determined students to prepare for competitive exams. The library also provides individual study stations and discussion rooms. For booking enquiries, please contact +91 902 031 6400 / +91 807 569 8245",
    key: "02",
  },
];
const NextArrow = ({ onClick }) => {
  return (
    <div className="arrow_next_gallery" onClick={onClick}>
      <BsChevronRight />
    </div>
  );
};
const PrevArrow = ({ onClick }) => {
  return (
    <div className="arrow_prev_gallery" onClick={onClick}>
      <BsChevronLeft />
    </div>
  );
};
const gallerypoint = () => {
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
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className={classes.App}>
      <Slider {...settings}>
        {photos.map((photo) => {
          return (
            <div key={photo.key} className={classes.carousel_shadow}>
              <div className={classes.alignment_container}>
                <div className={classes.grid_container}>
                  <div className={classes.grid_item1}>
                    <Gallerypointimage images={photo.images} />
                  </div>
                  <div className={classes.grid_item2}>
                    <div className={classes.heading}>At our property</div>
                    <div className={classes.subheading}>{photo.name}</div>
                    <div className={classes.paragraphCTA}>
                      <div className={classes.gallerytext}>{photo.desc}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default gallerypoint;
