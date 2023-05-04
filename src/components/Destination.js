import Mykonos1 from "../assets/mykonos1.jpg";
import Mykonos2 from "../assets/mykonos2.jpg";
import Venice1 from "../assets/venice1.jpg";
import Venice2 from "../assets/venice2.jpg";

import DestinationData from "./DestinationData";
import "./styles/DestinationStyles.scss";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>
        Tours provide you with the chance to see a multitude of sights within a
        set timeframe.
      </p>
      <DestinationData 
      className="first-des"
        heading="Mykonos Island, Greece"
        text="Mykonos is a popular Greek island known for its picturesque landscapes, white sandy beaches, crystal-clear waters, and vibrant nightlife. It is situated in the Aegean Sea and is a part of the Cyclades island group. Mykonos is a beloved tourist destination, famous for its charming traditional architecture, numerous churches, and windmills. The island's cosmopolitan atmosphere, luxurious resorts, and beach clubs attract visitors from all over the world. Mykonos is also well-known for its shopping opportunities, offering a variety of high-end boutiques and traditional markets."
        img1={Mykonos1}
        img2={Mykonos2}
      />

      <DestinationData
      className="first-des-reverse"
        heading="Venice, Italy"
        text="Venice is a beautiful city located in northeastern Italy, built on more than 100 small islands in the Adriatic Sea. Known as the City of Canals, Venice is famous for its winding canals, stunning architecture, and historic landmarks, including St. Mark's Basilica and the Doge's Palace. Visitors to Venice can explore the city by foot, boat, or gondola, taking in the many museums, galleries, and cafes that line its narrow streets and piazzas. Venice is also renowned for its annual Carnival, which features elaborate costumes, parades, and festivities."
        img1={Venice1}
        img2={Venice2}
      />
    </div>
  );
};

export default Destination;
