import { LinkContainer } from "react-router-bootstrap";
import "./Event.css";

const Event = (props) => {
    return (
        <div className="card mb-5">
            <img src={props.data.images[0]} alt={props.data.title} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{props.data.title}</h5>
                <LinkContainer to={`/events/${props.data._id}`}>
                    <span className="btn btn-primary card-link stretched-link">More details</span>
                </LinkContainer>
                {/* <a href={props.data.form} className="btn btn-primary card-link stretched-link">More details</a> */}
            </div>
        </div>
    );
}

export default Event;