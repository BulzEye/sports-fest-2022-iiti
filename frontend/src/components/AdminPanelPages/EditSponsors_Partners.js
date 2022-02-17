import axios from "axios";
import { useContext, useState } from "react";
import { authContext } from "../../App";
import SponsorPartner from "../home/cardComponents/SponsorPartner";
import Loader from "../loader/Loader";

const EditSponsorsPartners = (props) => {
    const { type } = props;
    const authHeader = useContext(authContext);
    const [data, setData] = useState(props.data)
    const [loading, setLoading] = useState(false)
    
    const handleSubmit = e => {
        setLoading(true)
        e.preventDefault();
        axios.post(`/api/auth/${type.toLowerCase()}`, new FormData(e.target), {
            headers: {
                'authorization': authHeader
            }   
        })
            .then(res => {
                setData(res.data);
                setLoading(false);
            })
            .catch(err => {
                setLoading(false);
                console.log(err)
                // alert(`${err.response.status} - Couldn't post`);
            })
    }

    return (
        loading ? <Loader />
            : <div className="editSponsorsPartners">
                <div className="container-fluid">
                    <div className="container addPartnerSponsor">
                        <div className="card addSP">
                            <form id="postForm" noValidate="" onSubmit={handleSubmit} action={null}> {/* Styling required */}
                                <label htmlFor="title">Name of {type}</label>
                                <input autoCapitalize="sentences" type="text" name="title" id="title" />

                                <label htmlFor="desc">Description of {type}</label>
                                <textarea autoCapitalize="sentences" name="description" id="description" rows="4"></textarea>

                                <label htmlFor="logoImage">{type} Logo Link</label>
                                <input type="text" name="image" id="image" />

                                <label htmlFor="logoImage">{type} tpe</label>
                                <input type="text" name="type" id="type" />

                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    </div>

                    <div className="container">
                        <h1>Existing {type}s</h1>
                        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 pt-5">
                            {/* <div className="col text-center">
                            <small className="sponsor-type text-muted">Media Sponsor</small>
                            <img src="logo-placeholder-image.png" alt="" className="sponsor-image img-fluid" />
                            <h5 className="sponsor-name">Golden Inc.</h5>
                        </div> */}

                            {data.map(element => (
                                <div className="col text-center" key={element._id}>
                                    <SponsorPartner type={`${type}`} data={element} />
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
    );
}

export default EditSponsorsPartners;