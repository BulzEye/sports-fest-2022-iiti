import { useState } from "react";
import { authContext } from "../../App";
import SponsorPartner from "../home/cardComponents/SponsorPartner";
import "./EditSponsors_Partners.css";

const EditSponsorsPartners = (props) => {
    const [formData, setFormData] = useState({
        sponsorpartner: null,
        title: null,
        desc: null,
        image: null
    });

    let changeData = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return ( 
        <div className="editSponsorsPartners">
            <div className="container-fluid">
                <div className="container addPartnerSponsor d-flex justify-content-center mb-5">
                    <div className="card addSP p-4">
                        <form>
                            <h1 className="mb-3 text-center">Add Sponsor / Partner</h1>
                            <div className="mb-3">
                                <div className="form-check">
                                    <input type="radio" name="sponsorpartner" id="sponsorR" className="form-check-input" value={"sponsor"} onChange={changeData} />
                                    <label htmlFor="sponsorR" className="form-check-label">Sponsor</label>
                                </div>
                                <div className="form-check">
                                    <input type="radio" name="sponsorpartner" id="partnerR" className="form-check-input" value={"partner"} onChange={changeData} />
                                    <label htmlFor="partnerR" className="form-check-label">Partner</label>
                                </div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Name of {/* Sponsor / Partner */ (!formData.sponsorpartner) ? "Sponsor/Partner" : ((formData.sponsorpartner === "sponsor") ? "Sponsor" : "Partner")}</label>
                                <input type="text" className="form-control" name="title" id="title" onChange={changeData} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="desc" className="form-label">Description of {/* Sponsor / Partner */ (!formData.sponsorpartner) ? "Sponsor/Partner" : ((formData.sponsorpartner === "sponsor") ? "Sponsor" : "Partner")}</label>
                                <textarea name="desc" className="form-control" id="desc" rows="8" onChange={changeData} ></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="logoImage" className="form-label">{ /* Sponsor / Partner */ (!formData.sponsorpartner) ? "Sponsor/Partner" : ((formData.sponsorpartner === "sponsor") ? "Sponsor" : "Partner")} Logo</label>
                                <input type="file" className="form-control" name="image" id="logoImage" onChange={changeData}/>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
                <div className="container mb-5">
                    <h1>Existing Sponsors</h1>
                    <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 pt-5">
                        {/* <div className="col text-center">
                            <small className="sponsor-type text-muted">Media Sponsor</small>
                            <img src="logo-placeholder-image.png" alt="" className="sponsor-image img-fluid" />
                            <h5 className="sponsor-name">Golden Inc.</h5>
                        </div> */}

                        {props.data.sponsors.map((sponsor) => (
                            <div className="col text-center" key={sponsor._id}>
                                <SponsorPartner type="Sponsor" data={sponsor} />
                            </div>
                        ))}

                    </div>
                    <h1>Existing Partners</h1>
                    <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 pt-5">
                        {/* <div className="col text-center">
                            <small className="partner-type text-muted">Outreach Partner</small>
                            <img src="logo-placeholder-image.png" alt="" className="partner-image img-fluid" />
                            <h5 className="partner-name">Plinfer Inc.</h5>
                        </div> */}

                        {props.data.partners.map((partner) => (
                            <div className="col text-center" key={partner._id}>
                                <SponsorPartner type="Partner" data={partner} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default EditSponsorsPartners;