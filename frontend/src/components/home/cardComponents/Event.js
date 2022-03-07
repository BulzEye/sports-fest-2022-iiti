import { LinkContainer } from "react-router-bootstrap";
import "./Event.css";

const Event = (props) => {
    const { data } = props
    return (
        <div className="card mb-5">
            <img src={data.image} alt={data.title} className="card-img-top" style={{height:'180px'}}/>
            <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <LinkContainer to={`/events/${data._id}`}>
                    <span className="btn btn-primary card-link stretched-link">More details</span>
                </LinkContainer>
                {/* <a href={props.data.form} className="btn btn-primary card-link stretched-link">More details</a> */}
                {
                    props.auth ? <button className="btn btn-danger" onClick={() => { props.deleteFunction(data._id) }}>Delete</button>
                        : null
                }
            </div>
        </div>
    );
}

export default Event;