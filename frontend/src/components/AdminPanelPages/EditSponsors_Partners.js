import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { authContext } from "../../App";
import SponsorPartner from "../home/cardComponents/SponsorPartner";
import Loader from "../loader/Loader";

const EditSponsorsPartners = (props) => {
    const { type } = props;
    const authHeader = useContext(authContext);
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(props.data)
    useEffect(() => {
        setData(props.data)
    }, [props])

    const [formData, setFormData] = useState({
        title: null,
        description: null,
        image: null,
        type: null
    });

    let changeData = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        setLoading(true)
        e.preventDefault();
        axios.post(`/api/auth/${type.toLowerCase()}`, formData, {
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
                alert(`${err.response.status} - Couldn't post`);
            })
    }

    const deleteElement = id => {
        setLoading(true)
        axios.delete(`/api/auth/${type}/${id}`, {
            headers: {
                'authorization': authHeader
            }
        })
            .then(res => {
                setData(res.data)
                setLoading(false)
            })
            .catch(err => {
                setLoading(false)
                alert(`${err.response.status} - Couldn't delete`)
            })
    }

    return (
        loading ? <Loader />
            : <div className="editSponsorsPartners">
                <div className="container-fluid">
                    <div className="container addPartnerSponsor d-flex justify-content-center mb-5">
                        <div className="card addSP p-4">
                            <form onSubmit={handleSubmit}>
                                <h1 className="mb-3 text-center">Add {type}</h1>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Name of {type}</label>
                                    <input required className="form-control" type="text" name="title" id="title" onChange={changeData} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description of {type}</label>
                                    <textarea required className="form-control" name="description" id="description" rows="4" onChange={changeData}></textarea>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="image" className="form-label">{type} Logo Link</label>
                                    <input required type="text" className="form-control" name="image" id="image" onChange={changeData} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="type" className="form-label">{type} type</label>
                                    <input required type="text" className="form-control" name="type" id="type" onChange={changeData} />
                                </div>

                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>

                    <div className="container">
                        <h1>Existing {type}s</h1>
                        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 pt-5">

                            {data.map(element => (
                                <div className="col text-center" key={element._id}>
                                    <SponsorPartner type={type} data={element} auth={true} deleteFunction={deleteElement} />
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
    );
}

export default EditSponsorsPartners;