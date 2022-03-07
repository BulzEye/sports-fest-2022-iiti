import { useState } from "react";
import { useParams } from "react-router-dom";
import Schedule from "../home/Schedule";
import "./EventPage.css";

const EventPage = (props) => {
    const { eventId } = useParams();
    console.log(props.data);
    // TODO: change function below to check for id instead of event name
    const [event] = useState(props.data.find((event) => (event._id === eventId)));
    // console.log(event);

    return (
        <div className="eventPage">
            <div className="container-fluid" id="eventHeader">
                <div className="container py-5">
                    <h1 className="title">
                        {event.title.toUpperCase()}
                    </h1>
                    <a href={event.form} target="_blank"  rel="noreferrer" className="registerLink btn btn-primary btn-lg mt-5">Register</a>
                </div>
            </div>
            <div className="container-fluid py-5" id="eventSchedule">
                <div className="container py-5">
                    <h1>Schedule</h1>
                    <Schedule />
                </div>
            </div>
            <div className="container-fluid py-5" id="eventDescription">
                <div className="container py-5">
                    {/* <h1>Description</h1> */}
                    {/* TODO: Add padding to p tag */}
                    <p className="p-4">
                        {event.description}
                        {/* Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, soluta, facere dolore porro, modi laudantium eligendi deleniti voluptates fuga nemo dolores. Quidem quo, officiis maiores architecto similique aspernatur harum animi nam saepe sequi nihil voluptatum adipisci consectetur sint iure, quaerat voluptas ipsa quam! Sapiente, aut consequuntur architecto culpa vel cumque! */}
                    </p>
                </div>
            </div>
            <div className="container-fluid py-5" id="eventFormat">
                <div className="container">
                    <h1>Format</h1>
                    <ul>
                        {event.format}
                    </ul>
                    {/* {event.format} */}
                </div>
            </div>
        </div>
    );
}

export default EventPage;