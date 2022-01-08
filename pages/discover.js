import classes from "../styles/discover.module.css";
import Image from "next/dist/client/image";
import Roomcarousal from "../components/roomcarousal";
import Icongallery from "../components/Icongallery";
import React from "react";
import NextLink from "next/dist/client/link";
export default class Discover extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayclass: classes.displayoff,
    };
  }
  AlertBox = (event) => {
    this.setState({
      displayclass: classes.displayon,
    });
  };
  CloseButton = (event) => {
    this.setState({
      displayclass: classes.displayoff,
    });
  };
  render() {
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
            <div
              key={photo.id}
              id={photo.id}
              className={classes.room_container}
            >
              <Roomcarousal
                id={photo.id}
                images={photo.url}
                className={classes.room_imgcontainer}
              />
              <div className={classes.room_info}>
                <div className={classes.room_heading}>
                  <div>{photo.heading}</div>
                </div>
                <div className={classes.room_paragraph}>
                  {photo.description}
                </div>
                <div className={classes.infobox}>
                  <div className={classes.statsbox}>
                    <p className={classes.stats}>
                      <span className={classes.spantext}>Space size :</span>
                      {photo.area}
                    </p>
                    <p className={classes.stats}>
                      <span className={classes.spantext}>Max Occupancy :</span>
                      {photo.max_occ}
                    </p>
                    <p className={classes.stats}>
                      <span className={classes.spantext}>Tariff : ₹</span>
                      {photo.tariff}
                    </p>
                  </div>
                  <div className={classes.icongallery}>
                    <Icongallery />
                  </div>
                </div>
                <div className={classes.small_reminder}>
                  * Additional charges applicable for extra bed{" "}
                </div>
                <button onClick={this.AlertBox} className={classes.galleryCTA}>
                  Book Now
                </button>
              </div>
              <div className={this.state.displayclass}>
                <div className={classes.alertdisplay}>
                  <div
                    onClick={this.CloseButton}
                    className={classes.closebutton}
                  >
                    <Image
                      alt="close"
                      src="/closebutton.png"
                      width="50%"
                      height="50%"
                    />
                  </div>
                  <div className={classes.contents}>
                    <div className={classes.contacttext}>
                      For Bookings Contact:
                    </div>
                    <div className={classes.centralise}>
                      <div className={classes.contactbox}>
                        <a href="tel:+919020316400" passHref>
                          +91 902 031 6400
                        </a>{" "}
                      </div>
                    </div>
                    <div className={classes.centralise}>
                      <div className={classes.contactbox}>
                        <a href="tel:+918075698275" passHref>
                          +91 807 569 8245
                        </a>
                      </div>
                    </div>
                    <div className={classes.centralise}>
                      <div className={classes.contactbox}>
                        <NextLink
                          href="mailto:kukuresidencytcr@gmail.com"
                          passHref
                        >
                          kukuresidencytcr@gmail.com
                        </NextLink>
                      </div>
                    </div>
                  </div>
                  <div className={classes.social_media}>
                    <div>
                      <NextLink href="https://www.facebook.com" passHref>
                        <Image
                          alt="facebook"
                          src="/facebook_black.png"
                          width="40px"
                          height="40px"
                        />
                      </NextLink>
                    </div>
                    <div>
                      <NextLink href="https://www.twitter.com" passHref>
                        <Image
                          alt="twitter"
                          src="/twitter_black.png"
                          width="40px"
                          height="40px"
                        />
                      </NextLink>
                    </div>
                    <div>
                      <NextLink href="https://www.instagram.com" passHref>
                        <Image
                          alt="twitter"
                          src="/instagram_black.png"
                          width="40px"
                          height="40px"
                        />
                      </NextLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
