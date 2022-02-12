import { LinkContainer } from "react-router-bootstrap";
import "./SponsorPartner.css";

const SponsorPartner = (props) => {
    return (
        <div className="sponsorpartner mb-4 py-1">
            <small className="sponsorpartner-type text-muted">{props.data.type + " " + props.type}</small>
            <img src={props.data.image} alt="" className="sponsorpartner-image img-fluid my-2" />
            <h5 className="sponsorpartner-name">{props.data.title}</h5>
            <LinkContainer to={`/${props.type.toLowerCase()}s#${props.data._id}`}>
                <span className="stretched-link">test</span>
            </LinkContainer>
        </div>
    );
}

export default SponsorPartner;