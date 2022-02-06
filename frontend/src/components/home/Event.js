const Event = (props) => {
    return (
        <div className="card mb-5">
            <img src={props.data.logo} alt={props.data.name} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{props.data.name}</h5>
                <a href={props.data.registrationLink} className="card-link"></a>
            </div>
        </div>
    );
}

export default Event;