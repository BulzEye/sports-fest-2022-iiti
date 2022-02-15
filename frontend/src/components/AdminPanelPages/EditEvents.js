import { authContext } from "../../App";
import Event from "../home/cardComponents/Event";

const EditEvents = (props) => {
    return ( 
        <div className="editEvents">
            <div className="container-fluid">
                <div className="container addEvent">
                    <div className="card eventAddForm">
                        
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

                        {events.map((event) => (
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