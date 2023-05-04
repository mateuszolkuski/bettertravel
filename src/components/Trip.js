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
                />
                <TripData
                    image={Trip2}
                    heading="Paris"
                    text="Paris is the romantic capital city of France, famous for its stunning landmarks, rich culture, and elegant charm."
                />
                <TripData
                    image={Trip3}
                    heading="Dubai"
                    text="Dubai is a modern city in the United Arab Emirates, known for its luxury shopping, stunning landmarks, and exciting attractions."
                />
            </div>
        </div>
    );
}

export default Trip;
