import { authContext } from "../../App";
import { useContext, useState } from "react";
import Event from "../home/cardComponents/Event";
import Loader from "../loader/Loader";
import axios from "axios";

const EditEvents = (props) => {
    const authHeader = useContext(authContext);
    const [data, setData] = useState(props.data);
    const [loading, setLoading] = useState(false);

    // const handleSubmit = e => {
    //     setLoading(true);
    //     e.preventDefault();
    //     axios.post('/api/auth/events', e.target, {
    //         headers: {
    //             'authorization': authHeader
    //         }
    //     })
    //         .then(data => {
    //             setData(data);
    //             setLoading(false)
    //         })
    //         .catch(err=>{
    //             console.log(err)
    //             setLoading(false)
    //         })
    // }

    return (
        loading ? <Loader />
            : <div className="editEvents">
                <div className="container-fluid">
                    <div className="container addEvent">
                        <div className="card eventAddForm">

                        </div>
                    </div>

                    <div className="container">
                        <h1>Existing Events</h1>
                        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 pt-5">

                            {data.map(event => (
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