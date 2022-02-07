const Sponsor = (props) => {
    return (
        <div className="sponsor mb-5">
            <small className="sponsor-type text-muted">{props.data.type} Sponsor</small>
            <img src={props.data.image} alt="" className="sponsor-image img-fluid" />
            <h5 className="sponsor-name">{props.data.title}</h5>
        </div>
    );
}

export default Sponsor;