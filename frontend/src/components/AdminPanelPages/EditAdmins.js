import { authContext } from "../../App";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Loader from "../loader/Loader";
import Unauthorized from "./Unauthorized";

export default function EditAdmins() {
    const authHeader = useContext(authContext);
    const [superAdmin, setSuperAdmin] = useState(false);
    const [loading, setLoading] = useState(true);
    const [admins, setAdmins] = useState(null);
    const [formData, setFormData] = useState({
        username: null,
        email: null
    });

    const changeData = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        setLoading(true);
        e.preventDefault();
        axios.post('/api/auth/admin', formData, {
            headers: {
                'authorization': authHeader
            }
        })
            .then(res => {
                setAdmins(res.data);
                setLoading(false)
            })
            .catch(err => {
                setLoading(false);
                alert(`${err.response.status} - Couldn't add Admin`)
            })
    }

    const deleteAdmin = id => {
        setLoading(true)
        axios.delete(`/api/auth/admin/${id}`, {
            headers: {
                'authorization': authHeader
            }
        })
            .then(res => {
                setAdmins(res.data);
                setLoading(false)
            })
            .catch(err => {
                alert(`${err.response.status} - Couldn't Delete Admin`)
            })
    }

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
                        <div className="container-fluid">
                            <div className="container addEvent d-flex justify-content-center mb-5">
                                <div className="card eventAddForm p-4">
                                    <form onSubmit={handleSubmit}>
                                        <h1 className="mb-3 text-center">Add Admin</h1>
                                        <div className="mb-3">
                                            <label htmlFor="username" className="form-label">Name of the Admin</label>
                                            <input type="text" className="form-control" name="username" id="username" onChange={changeData} />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label">Institute Email ID</label>
                                            <input type="text" className="form-control" name="email" id="email" onChange={changeData} />
                                        </div>
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </form>
                                </div>
                            </div>

                            <div className="container">
                                <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 pt-5">
                                    {admins.map(admin => (
                                        <div className="col" key={admin._id}>
                                            <div className="card mb-5">
                                                <img src='./profile.svg' className="card-img-top" />
                                                <div className="card-body">
                                                    <h5 className="card-title">{admin.username}</h5>
                                                    <h5 className="card-title">{admin.email}</h5>
                                                    <button className="btn btn-danger" onClick={() => { deleteAdmin(admin._id) }}>Delete</button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        : <Unauthorized />
            }
        </>
    )
}
