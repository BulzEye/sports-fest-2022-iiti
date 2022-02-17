import { authContext } from "../../App";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Loader from "../loader/Loader";
import Unauthorized from "./Unauthorized";

export default function EditAdmins() {
    const authHeader = useContext(authContext);
    const [superAdmin, setSuperAdmin] = useState(false);
    const [loading, setLoading] = useState(true);
    const [admins, setAdmins] = useState(null)

    useEffect(() => {
        axios.get('/api/auth/admin', {
            headers: {
                'authorization': authHeader
            }
        })
            .then(res => {
                setAdmins(res.data)
                setSuperAdmin(true)
                setLoading(false)
            })
            .catch(err => {
                setSuperAdmin(false)
                setLoading(false);
            })

    }, [])

    return (
        <>
            {
                loading ? <Loader />
                    : superAdmin ?
                        <div className="container">
                            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 pt-5">
                                {admins.map(admin => (
                                    <div className="col" key={admin._id}>
                                        <div className="card mb-5">
                                        <img src='./profile.svg' className="card-img-top" />
                                            <div className="card-body">
                                                <h5 className="card-title">{admin.username}</h5>
                                                <h5 className="card-title">{admin.email}</h5>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        : <Unauthorized />
            }
        </>
    )
}
