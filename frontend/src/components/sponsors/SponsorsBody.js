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
                        <div className="col">
                            <div className="card">
                                <div className="card-header">Media {pageType}</div>
                                <img src="test-card-image.png" alt="" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">Golden Inc.</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, illo!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SponsorsBody;