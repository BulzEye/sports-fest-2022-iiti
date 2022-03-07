import { useState } from "react";
import { useParams } from "react-router-dom";
import ScheduleEvent from "./ScheduleEvent";
import "./EventPage.css";

const EventPage = (props) => {
    const { eventId } = useParams();
    console.log(props.data);
    // TODO: change function below to check for id instead of event name
    const [event] = useState(props.data.find((event) => (event._id === eventId)));
    // console.log(event);

    return (
        <div className="eventPage">
            <div className="container-fluid" id="eventHeader" style={(event.image) ? {backgroundImage: `url(${event.image})`} : {backgroundImage: `url(/public/eventdesc.jpg)`}}>
                <div className="container py-5">
                    <h1 className="title">
                        {event.title.toUpperCase()}
                    </h1>
                    <a href={event.form} target="_blank"  rel="noreferrer" className="registerLink btn btn-dark btn-lg mt-5">Register</a>
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
            <div className="container-fluid py-5" id="eventSchedule">
                <div className="container py-5">
                    <h1 className="text-dark">Schedule</h1>
                    <div className="pt-4">
                        <ScheduleEvent data={event.schedule} />
                    </div>
                </div>
            </div>
            {(event.prizePool) ? <div className="container-fluid py-5" id="eventPrizePool">
                <div className="container">
                    <h1 className="text-dark">Prize Pool</h1>
                    <p>{event.prizePool}</p>
                    {/* {event.format} */}
                </div>
            </div> : undefined}
            <div className="container-fluid py-5" id="eventFormat">
                <div className="container">
                    <h1 className="text-dark">Format</h1>
                    <a href={event.format} className="btn btn-dark btn-lg mt-4">Link to D2C</a>
                    {/* {event.format} */}
                </div>
            </div>
        </div>
    );
}

export default EventPage;