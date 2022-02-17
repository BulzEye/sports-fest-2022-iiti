import { useState } from "react";
import { authContext } from "../../App";
import Event from "../home/cardComponents/Event";
import "./EditEvents.css";

const EditEvents = (props) => {
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

    return (
        <div className="editEvents">
            <div className="container-fluid">
                <div className="container addEvent d-flex justify-content-center mb-5">
                    <div className="card eventAddForm  p-4">
                        <form>
                            <h1 className="mb-3 text-center">Add Event</h1>
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Title of Event</label>
                                <input type="text" className="form-control" name="title" id="title" onChange={changeData} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="logoImage" className="form-label">Event Images</label>
                                <input type="file" className="form-control" name="image" id="logoImage" multiple />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="scheduleLink" className="form-label">Schedule Link of Event</label>
                                <input type="text" className="form-control" name="scheduleLink" id="scheduleLink" onChange={changeData} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="formLink" className="form-label">Form Link for Event</label>
                                <input type="text" className="form-control" name="formLink" id="formLink" onChange={changeData} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="desc" className="form-label">Description of event</label>
                                <textarea name="desc" className="form-control" id="desc" rows="8" onChange={changeData} ></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="format" className="form-label">Format of Event</label>
                                <input type="text" className="form-control" name="format" id="format" onChange={changeData} />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
                <div className="container">
                    <h1>Existing Events</h1>
                    <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 pt-5">
                        {/* <div className="col">
                            <div className="card">
                                <img src="test-card-image.png" alt="" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">Cricket</h5>
                                    <a href="#" className="card-link"></a>
                                </div>
                            </div>
                        </div> */}

                        {props.events.map((event) => (
                            <div className="col" key={event._id}>
                                <Event data={event} />
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditEvents;