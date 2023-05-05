import "./styles/TripStyles.scss"

function TripData (props) {
    return (
        <div className="t-card">
            <div className="t-image">
                <img src={props.image} alt="photo of place"/>
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
            <a href={props.maplink} target="_blank">Look Up</a>
        </div>
    )
}

export default TripData;