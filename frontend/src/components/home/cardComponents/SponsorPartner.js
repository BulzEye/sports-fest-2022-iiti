import { LinkContainer } from "react-router-bootstrap";
import "./SponsorPartner.css";

const SponsorPartner = (props) => {
    const { data } = props
    return (
        <div className="sponsorpartner mb-4 py-1">
            <small className="sponsorpartner-type text-muted">{data.type + " " + props.type}</small>
            <img src={data.image} alt="" className="sponsorpartner-image img-fluid my-2" />
            <h5 className="sponsorpartner-name">{data.title}</h5>
            <LinkContainer to={`/${props.type.toLowerCase()}s#${props.data._id}`}>
                <span className="stretched-link">test</span>
            </LinkContainer>
            {
                props.auth ? <button className="btn btn-danger" onClick={() => { props.deleteFunction(data._id) }}>Delete</button>
                    : null
            }
        </div>
    );
}

export default SponsorPartner;