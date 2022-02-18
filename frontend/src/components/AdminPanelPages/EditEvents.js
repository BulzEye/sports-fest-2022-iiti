import { authContext } from "../../App";
import { useContext, useState } from "react";
import Event from "../home/cardComponents/Event";
import Loader from "../loader/Loader";
import axios from "axios";
import './EditEvents.css';

const EditEvents = (props) => {
    const authHeader = useContext(authContext);
    const [data, setData] = useState(props.data);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        title: null,
        images: [],
        schedule: null,           //saving file to DB
        form: null,
        description: null,
        format: null
    });

    let changeData = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        setLoading(true);
        e.preventDefault();
        axios.post('/api/auth/events', e.target, {
            headers: {
                'authorization': authHeader
            }
        })
            .then(data => {
                setData(data);
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
                setLoading(false)
            })
    }
    
    const deleteEvent = id => {
        setLoading(true)
        axios.delete(`/api/auth/events/${id}`, {
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
            : <div className="editEvents">
                <div className="container-fluid">
                    <div className="container addEvent d-flex justify-content-center mb-5">
                        <div className="card eventAddForm p-4">
                            <form onSubmit={handleSubmit}>
                                <h1 className="mb-3 text-center">Add Event</h1>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title of Event</label>
                                    <input required type="text" className="form-control" name="title" id="title" onChange={changeData} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="logoImage" className="form-label">Event Images</label>
                                    <input required type="file" className="form-control" name="image" id="logoImage" multiple />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="scheduleLink" className="form-label">Schedule Link of Event</label>
                                    <input required type="text" className="form-control" name="scheduleLink" id="scheduleLink" onChange={changeData} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="formLink" className="form-label">Form Link for Event</label>
                                    <input required type="text" className="form-control" name="formLink" id="formLink" onChange={changeData} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="desc" className="form-label">Description of event</label>
                                    <textarea required name="desc" className="form-control" id="desc" rows="8" onChange={changeData} ></textarea>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="format" className="form-label">Format of Event</label>
                                    <input required type="text" className="form-control" name="format" id="format" onChange={changeData} />
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>

                    <div className="container">
                        <h1>Existing Events</h1>
                        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 pt-5">

                            {data.map(event => (
                                <div className="col" key={event._id}>
                                    <Event data={event} auth={true} deleteFunction={deleteEvent} />
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
    );
}

export default EditEvents;