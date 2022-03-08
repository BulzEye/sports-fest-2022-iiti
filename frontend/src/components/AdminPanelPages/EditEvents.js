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
        image: null,
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
        axios.post('/api/auth/event', formData, {
            headers: {
                'authorization': authHeader
            }
        })
            .then(res => {
                setData(res.data);
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
                                    <label htmlFor="image" className="form-label">Image</label>
                                    <input required type="text" className="form-control" name="image" id="image" onChange={changeData} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="schedule" className="form-label">Schedule Link of Event</label>
                                    <input required type="text" className="form-control" name="schedule" id="schedule" onChange={changeData} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="form" className="form-label">Form Link for Event</label>
                                    <input required type="text" className="form-control" name="form" id="form" onChange={changeData} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description of event</label>
                                    <textarea required name="description" className="form-control" id="description" rows="8" onChange={changeData} ></textarea>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="format" className="form-label">Format of Event</label>
                                    <textarea required type="text" className="form-control" name="format" id="format" onChange={changeData}></textarea>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="fixtures" className="form-label">Fixtures:</label>
                                    <input required type="text" className="form-control" name="fixtures" id="fixtures" onChange={changeData} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="registrationStart" className="form-label">Registration Starts:</label>
                                    <input required type="text" className="form-control" name="registrationStart" id="registrationStart" onChange={changeData} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="registrationDeadline" className="form-label">Registration Deadline:</label>
                                    <input required type="text" className="form-control" name="registrationDeadline" id="registrationDeadline" onChange={changeData} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="durationduration" className="form-label">Event Duration:</label>
                                    <input required type="text" className="form-control" name="duration" id="duration" onChange={changeData} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="prizePool" className="form-label">Prize Pool</label>
                                    <input required type="text" name="prizePool" className="form-control" id="prizePool" rows="8" onChange={changeData} />
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