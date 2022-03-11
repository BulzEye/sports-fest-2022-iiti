import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ScheduleEvent from "./ScheduleEvent";
import "./EventPage.css";

const EventPage = (props) => {
    const { eventId } = useParams();
    // console.log(props.data);
    // TODO: change function below to check for id instead of event name
    const [event, setEvent] = useState(props.data.find((event) => (event._id === eventId)));
    useEffect(() => {
        setEvent(props.data.find((event) => (event._id === eventId)))
    }, [eventId])

    return (
        <div className="eventPage">
            <div className="container-fluid" id="eventHeader" style={(event.image) ? { backgroundImage: `url(${event.image})` } : { backgroundImage: `url(/public/eventdesc.jpg)` }}>
                <div className="container py-5">
                    <h1 className="title">
                        {event.title.toUpperCase()}
                    </h1>
                    <a href={event.form} target="_blank" rel="noreferrer" className="registerLink btn btn-dark btn-lg mt-5">Register</a>
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
                    <h1 className="sched">Schedule</h1>
                    {/* <div className="pt-4">
                        Fixtures: 
                        <a href={event.fixtures} target="_blank" rel="noreferrer" className="mt-5">Link</a>
                    </div> */}
                    <div className="pt-4">
                        <ScheduleEvent data={event} />
                    </div>
                    {(event.fixtures) ? <div className="eventFixtures mt-5">
                        {/* <h2>Fixtures</h2> */}
                        <a href={event.fixtures} target="_blank" rel="noreferrer" className="btn btn-primary btn-lg mt-4">Fixtures</a>
                    </div> : null}
                </div>
            </div>
            <div className="last">
                {(event.prizePool) ? <div className="container-fluid pt-5 pb-4" id="eventPrizePool">
                    <div className="container">
                        <h1 className="ppool">Prize Pool</h1>
                        <h5 className="mt-3 display-5">{event.prizePool}</h5>
                        {/* {event.format} */}
                    </div>
                </div> : null}
                <div className="container-fluid pb-5 mt-4" id="eventFormat">
                    <div className="container">
                        <h1 className="format">Format</h1>
                        <a href={event.format} className="btn btn-light btn-lg mt-4">Link to D2C</a>
                        {/* {event.format} */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventPage;