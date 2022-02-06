import { useState } from "react";
import Event from "./Event";
import "./HomeBody.css";

import eventList from "../../testData/events";
import sponsorList from "../../testData/sponsors";
import partnerList from "../../testData/partners";
import Sponsor from "./Sponsor";
import Partner from "./Partner";

const HomeBody = () => {
    const [events, setEvents] = useState(eventList);
    const [sponsors, setSponsors] = useState(sponsorList);
    const [partners, setPartners] = useState(partnerList);

    return ( 
        <div className="homeBody">
            <div className="container-fluid" id="header">
                <div className="container py-5">
                    <h1 className="title">LAKSHYA 2022</h1>
                    <h1>Subtitle</h1>
                </div>
            </div>
            <div className="container-fluid py-5" id="about">
                <div className="container py-5">
                    <h1>About</h1>
                    {/* TODO: Add padding to p tag */}
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, soluta, facere dolore porro, modi laudantium eligendi deleniti voluptates fuga nemo dolores. Quidem quo, officiis maiores architecto similique aspernatur harum animi nam saepe sequi nihil voluptatum adipisci consectetur sint iure, quaerat voluptas ipsa quam! Sapiente, aut consequuntur architecto culpa vel cumque!</p>
                </div>
            </div>
            <div className="container-fluid py-5" id="events">
                <div className="container">
                    <h1>Events</h1>
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

                        {events.map((event) => (
                            <div className="col">
                                <Event data={event} />
                            </div>
                        ))}

                    </div>
                    {/* Will potentially use cards for the events page, WIP - DONE */}
                    {/* TODO: Use flexbox, align cards in centre, set col-lg-3, col-md-4 etc... */}
                
                </div>
            </div>
            <div className="container-fluid py-5" id="schedule">
                <div className="container py-5">
                    <h1>Schedule</h1>
                </div>
            </div>
            <div className="container-fluid py-5" id="sponsors">
                <div className="container">
                    <h1>Sponsors</h1>
                    <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 pt-5">
                        {/* <div className="col text-center">
                            <small className="sponsor-type text-muted">Media Sponsor</small>
                            <img src="logo-placeholder-image.png" alt="" className="sponsor-image img-fluid" />
                            <h5 className="sponsor-name">Golden Inc.</h5>
                        </div> */}

                        {sponsors.map((sponsor) => (
                            <div className="col text-center">
                                <Sponsor data={sponsor} />
                            </div>
                        ))}
                        
                    </div>
                </div>
            </div>
            <div className="container-fluid py-5" id="partners">
                <div className="container">
                    <h1>Partners</h1>
                    <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 pt-5">
                        {/* <div className="col text-center">
                            <small className="partner-type text-muted">Outreach Partner</small>
                            <img src="logo-placeholder-image.png" alt="" className="partner-image img-fluid" />
                            <h5 className="partner-name">Plinfer Inc.</h5>
                        </div> */}

                        {partners.map((partner) => (
                            <div className="col text-center">
                                <Partner data={partner} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default HomeBody;