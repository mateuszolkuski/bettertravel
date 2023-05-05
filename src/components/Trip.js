import "./styles/TripStyles.scss";
import TripData from "./TripData";
import Trip1 from "../assets/bangkok1.jpg";
import Trip2 from "../assets/paris1.jpg";
import Trip3 from "../assets/dubai1.jpg";

function Trip() {
    return (
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>Discover every locations by using Google Maps.</p>
            <div className="tripcard">
                <TripData
                    image={Trip1}
                    heading="Bangkok"
                    text="Bangkok is the capital city of Thailand and one of the most popular tourist destinations in Southeast Asia."
                    maplink={"https://www.google.com/maps/place/Bangkok,+Tajlandia/@13.72438,100.3027587,10z/data=!3m1!4b1!4m6!3m5!1s0x311d6032280d61f3:0x10100b25de24820!8m2!3d13.7563309!4d100.5017651!16zL20vMGZuMmc"}
                />
                <TripData
                    image={Trip2}
                    heading="Paris"
                    text="Paris is the romantic capital city of France, famous for its stunning landmarks, rich culture, and elegant charm."
                    maplink={"https://www.google.com/maps/place/Paryż,+Francja/@48.8588254,2.2644628,12z/data=!3m1!4b1!4m6!3m5!1s0x47e66e1f06e2b70f:0x40b82c3688c9460!8m2!3d48.856614!4d2.3522219!16zL20vMDVxdGo"}
                />
                <TripData
                    image={Trip3}
                    heading="Dubai"
                    text="Dubai is a modern city in the United Arab Emirates, known for its luxury shopping, stunning landmarks, and exciting attractions."
                    maplink={"https://www.google.com/maps/place/Dubaj+-+Zjednoczone+Emiraty+Arabskie/@25.0760224,55.2274879,10z/data=!3m1!4b1!4m6!3m5!1s0x3e5f43496ad9c645:0xbde66e5084295162!8m2!3d25.2048493!4d55.2707828!16zL20vMDFmMDhy"}
                />
            </div>
        </div>
    );
}

export default Trip;
