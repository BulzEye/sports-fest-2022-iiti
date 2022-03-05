import Event from "./cardComponents/Event";
import "./HomeBody.css";
import React from "react";
import SponsorPartner from "./cardComponents/SponsorPartner";
import Schedule from "./Schedule";
import bgvid from "./bgvid.mp4"

const HomeBody = (props) => {
  const { events } = props.data;
  const { partners } = props.data;
  const { sponsors } = props.data;

  return (
    <div className="homeBody">
      
      <div className="container-fluid" id="header">
        <video src={bgvid} autoPlay loop muted />
        <div className="container py-5">
          <h1 className="title">LAKSHYA 2022</h1>
          <h1 style={{marginTop: '20px'}}>IIT Indore</h1>
        </div>
      </div>
      <div className="container-fluid py-5" id="about">
        <div className="container py-5">
          <h1>About</h1>
          <p className="p-3 mb-0">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt,
            soluta, facere dolore porro, modi laudantium eligendi deleniti
            voluptates fuga nemo dolores. Quidem quo, officiis maiores
            architecto similique aspernatur harum animi nam saepe sequi nihil
            voluptatum adipisci consectetur sint iure, quaerat voluptas ipsa
            quam! Sapiente, aut consequuntur architecto culpa vel cumque!
          </p>
        </div>
      </div>
      <div className="container-fluid py-5" id="events">
        <div className="container">
          <h1>Events</h1>
          <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 pt-5" id="eventscard">
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
              <div className="col" key={event._id}>
                <Event data={event} />
              </div>
            ))}
          </div>
          {/* Will potentially use cards for the events page, WIP - DONE */}
          {/* TODO: Use flexbox, align cards in centre, set col-lg-3, col-md-4 etc... - nvm centre aligned cards look weird when in groups of 4 */}
        </div>
      </div>
      <div className="container-fluid py-5" id="schedule">
        <div className="container py-5">
          <h1>Schedule</h1>
          <Schedule />
        </div>
      </div>
      <div className="container-fluid py-5" id="sponsors">
        <div className="container">
          <h1 className="bh">Sponsors</h1>
          <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 pt-5" id="sponsercard">
            {/* <div className="col text-center">
                            <small className="sponsor-type text-muted">Media Sponsor</small>
                            <img src="logo-placeholder-image.png" alt="" className="sponsor-image img-fluid" />
                            <h5 className="sponsor-name">Golden Inc.</h5>
                        </div> */}

            {sponsors.map((sponsor) => (
              <div className="col text-center" key={sponsor._id}>
                <SponsorPartner type="Sponsor" data={sponsor} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container-fluid py-5" id="partners">
        <div className="container">
          <h1 className="bh">Partners</h1>
          <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 pt-5" id="partnercard">
            {/* <div className="col text-center">
                            <small className="partner-type text-muted">Outreach Partner</small>
                            <img src="logo-placeholder-image.png" alt="" className="partner-image img-fluid" />
                            <h5 className="partner-name">Plinfer Inc.</h5>
                        </div> */}

            {partners.map((partner) => (
              <div className="col text-center" key={partner._id}>
                <SponsorPartner type="Partner" data={partner} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBody;
