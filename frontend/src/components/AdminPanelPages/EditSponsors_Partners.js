import { useState } from "react";
import { authContext } from "../../App";

const EditSponsorsPartners = (props) => {
    const [formData, setFormData] = useState();

    return ( 
        <div className="editSponsorsPartners">
            <div className="container-fluid">
                <div className="container addPartnerSponsor">
                    <div className="card addSP">
                        <label htmlFor="selectSP">Sponsor / Partner</label>
                        <input type="text" name="sponsorpartner" id="selectSP" onChange={changeData} />
                        <label htmlFor="title">Name of {/* Sponsor / Partner */}</label>
                        <input type="text" name="title" id="title" onChange={changeData} />
                        <label htmlFor="desc">Description of {/* Sponsor / Partner */}</label>
                        <textarea name="desc" id="desc" rows="4" onChange={changeData} ></textarea>
                        <label htmlFor="logoImage">{ /* Sponsor / Partner */} Logo</label>
                        <input type="file" name="image" id="logoImage" />
                        <button type="submit">Submit</button>
                    </div>
                </div>
                <div className="container">
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