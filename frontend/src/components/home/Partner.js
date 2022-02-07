const Partner = (props) => {
    return (
        <div className="partner mb-5">
            <small className="partner-type text-muted">{props.data.type} Partner</small>
            <img src={props.data.image} alt="" className="partner-image img-fluid" />
            <h5 className="partner-name">{props.data.title}</h5>
        </div>
    );
}

export default Partner;