import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import "./SponsorsBody.css";

const SponsorsBody = (props) => {

    let [pageType] = useState(props.type);
    const [sponsors] = useState(props.data);
    // console.log(sponsors);
    const sponsRef = useRef(null);
    
    const { hash } = useLocation();
    // console.log(hash);
    const hashID = hash.substring(1);
    // console.log(hashID);

    useEffect(() => {
        if(hashID.trim().length > 0) {
            setTimeout(() => {
                sponsRef.current.scrollIntoView();
                sponsRef.current.style.boxShadow = "0 .5rem 1rem rgba(0, 0, 0, .15)";
            }, 1000)
        }
    }, []);


    return (
        <div className={`sponsorsBody`}>
            <div className="container-fluid" id="body">
                <div className="container py-5">
                    <h1>{pageType}s</h1>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 py-5">
                        {
                            sponsors.map((sponsor) => (
                                <div className="col" key={sponsor._id}>
                                    <div className="card mb-5" ref={(sponsor._id == hashID.trim()) ? sponsRef : undefined}>
                                        <div className="card-header">{sponsor.type + " " + pageType}</div>
                                        <img src={sponsor.image} alt="" className="card-img-top" />
                                        <div className="card-body">
                                            <a href={sponsor.website} target="_blank" rel="noreferrer" className="sponsor-link-lakshya" title="Visit sponsor website">
                                            <h5 className="card-title">
                                                <span className="link-text">{sponsor.title}</span>
                                                    <span className="fas fa-arrow-up-right-from-square ps-2" />
                                            </h5>
                                            </a>
                                            <p className="card-text">{sponsor.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <a className="upArrow" href="#body">
                <i className="fa-solid fa-angle-up"></i>
            </a>
        </div>
    );
}

export default SponsorsBody;