import classes from "../styles/Explore.module.css";
import Image from "next/image";

function Explore() {
  const photos = [
    {
      description:
        "Guruvayur Temple is a Hindu temple dedicated to the Lord Guruvayurappan (four-armed form of the Lord Vishnu),Under the Administration of Guruvayur Devaswom, located in the town of Guruvayur in Kerala, India. It is one of the most important places of worship for Hindus in Kerala and is often referred to as Bhuloka Vaikunta (Holy Abode of Vishnu on Earth). The presiding deity of the Guruvayur Temple is Guruvayurappan (Vishnu, worshipped in the form of his avatar Krishna). The central icon is a four-armed standing Vishnu carrying the conch Panchajanya, the discus Sudarshana Chakra, the mace Kaumodaki, and a lotus with a Holy basil garland ",
      heading: "Guruvayur Temple",
      url: "/POI/photo 1.jpg",
      distance: 22.9,
      taxi: "yes",
      id: "ph1",
      destination_url: "https://goo.gl/maps/DUyDN62cow11qQ6b7",
    },
    {
      description:
        "Vadakkumnathan Temple is an ancient Hindu temple dedicated to Shiva at city of Thrissur, of Kerala state in India. This temple is a classical example of the architectural style of Kerala and has one monumental tower on each of the four sides in addition to a kuttambalam. Mural paintings depicting various scenes from the Mahabharata can be seen inside the temple. The shrines and the Kuttambalam display vignettes carved in wood. The temple, along with the mural paintings, has been declared as a National Monument by India under the AMASR Act. According to popular local lore, this is the first temple built by Parasurama, the sixth avatara of Vishnu. Thekkinkadu Maidan, encircling the Vadakkunnathan Temple, is the main venue of the renowned Thrissur Pooram festival",
      heading: "Vadakkumnathan Temple",
      url: "/POI/photo 2.jpg",
      distance: 13.0,
      taxi: "yes",
      id: "ph2",
      destination_url: "https://goo.gl/maps/2dpygQfPetkAuB137",
    },
    {
      description:
        'Athirappilly Falls, is situated in Athirappilly Panchayat in Chalakudy Taluk of Thrissur District in Kerala, India on the Chalakudy River, which originates from the upper reaches of the Western Ghats at the entrance to the Sholayar ranges. It is the largest waterfall in Kerala, which stands tall at 80 feet. Just a short drive from Athirappilly to the Vazhachal falls, which is close to dense green forests that are home to many endangered and endemic species of flora and fauna. There is another waterfall on the way from Athirappilly to Vazhachal Falls, near the road, which is locally called "Charpa Falls". Athirappilly Falls is the largest waterfall in Kerala and is nicknamed "The Niagara of South India"',
      heading: "Athirappilly Falls",
      url: "/POI/photo 3.jpg",
      distance: 72.6,
      taxi: "yes",
      id: "ph3",
      destination_url: "https://goo.gl/maps/L8FNPVt7a1WhDEzb8",
    },
    {
      description:
        "Kerala Kalamandalam, deemed to be University of Art and Culture by the Government of India, is a major center for learning Indian performing arts, especially those that developed in the Southern states of India, with the special emphasis on Kerala. It is situated in the small town of Cheruthuruthy in Thrissur, Thrissur District on the banks of the Bharathapuzha river.",
      heading: "Kerala Kalamandalam",
      url: "/POI/photo 4.jpg",
      distance: 19.5,
      taxi: "yes",
      id: "ph4",
      destination_url: "https://goo.gl/maps/t9dx8WW9eWXYVcFx9",
    },
    {
      description:
        "Shakthan Thampuran Palace is situated in City of Thrissur in Kerala state, India. It is named as Vadakkekara Palace, was reconstructed in Kerala-Dutch style in 1795 by Ramavarma Thampuran of the erstwhile Princely State of Cochin, well as Sakthan Thampuran (Greatest ruler of the Cochin dynasty) is preserved by Archaeological Department. The palace was converted into a museum in 2005 by State.",
      heading: "Shakthan Thampuran Palace",
      url: "/POI/photo 5.jpg",
      distance: 12.3,
      taxi: "yes",
      id: "ph5",
      destination_url: "https://goo.gl/maps/iarkygsdPPrwTxq56",
    },
    {
      description:
        "Peechi Dam thrissur is situated 22 km (14 mi) outside Thrissur city in Kerala, India. The dam was started as an irrigation project for the surrounding villages in Thrissur. At the same time, it catered the drinking water needs of the population of Thrissur City. It serves as an irrigation dam, reaching out to the paddy fields in and around Thrissur city. Built across the Manali River, the dam has a catchment area of nearly 3,200 acres (1,300 ha). Elephants may be seen on the bank of Peechi-Vazhani Wildlife Sanctuary, established in 1958 covering 125 square kilometres (48 sq mi)",
      heading: "Peechi Dam",
      url: "/POI/photo 6.jpg",
      distance: 31.2,
      taxi: "yes",
      id: "ph6",
      destination_url: "https://goo.gl/maps/Z452qY3c1K5saKbf9",
    },
    {
      description:
        "Chavakkad Beach is beach in Chavakkad Municipality of Thrissur District in Kerala State. It lies on the coast of Arabian Sea and attracts domestic tourists and local people. The beach is situated 5 Kilometers from Guruvayoor Temple Sri Krishna Temple. In this beach, the river meets the sea known as estuary. The meeting point is known as Azhimokam in Malayalam. It is counted amongst Kerala’s most popular beaches because the beach is unexplored by domestic tourists. The azure waters and the energy of the fishermen as they bring in their daily catch to the beach is a sight to behold. The fresh catch of the day is sold in a matter of few hours. Visitors can relax at the beach by engaging in flying kites or simply taking a dip in the water. The cleanliness of the beach and the tranquility one experiences here is one of the highlights of the visit.",
      heading: "Chavakkad Beach",
      url: "/POI/photo 7.jpg",
      distance: 27.4,
      taxi: "yes",
      id: "ph7",
      destination_url: "https://goo.gl/maps/Lpvog2SjecQU9ejA7",
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
                  <div>
                    Distance from Residency : {photo.distance} Km{" "}
                    <a href={photo.destination_url}>
                      <Image
                        alt={photo.heading}
                        src="/map_red.png"
                        width="20px"
                        height="20px"
                      />
                    </a>
                  </div>
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
