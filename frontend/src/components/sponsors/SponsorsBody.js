import { useState } from "react";
import "./SponsorsBody.css";

const SponsorsBody = (props) => {

    let [pageType] = useState(props.type);
    const [sponsors] = useState(props.data);
    console.log(sponsors);

    return (
        <div className={`sponsorsBody`}>
            <div className="container-fluid" id="body">
                <div className="container py-5">
                    <h1>{pageType}s</h1>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 py-5">                
                        {
                            sponsors.map((sponsor) => (
                                <div className="col" key={sponsor._id}>
                                    <div className="card mb-5">
                                        <div className="card-header">{sponsor.type + " " + pageType}</div>
                                        <img src={sponsor.image} alt="" className="card-img-top" />
                                        <div className="card-body">
                                            <h5 className="card-title">{sponsor.title}</h5>
                                            <p className="card-text">{sponsor.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SponsorsBody;