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
    console.log(superAdmin)

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
                        <div>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. At fuga obcaecati, maxime reprehenderit exercitationem consequatur. Consectetur laudantium doloremque quis nobis rem temporibus. Neque, excepturi ex. Maiores, hic ipsa sed ad iusto consectetur rem aperiam id non maxime distinctio explicabo nihil corporis, incidunt, sint vero facere.
                            {admins.map(admin => (
                                <div className="col text-center" key={admin._id}>
                                    <div className="mb-4 py-1">
                                        <img alt="some svg" className="img-fluid my-2" />
                                        <h5 >{admin.username}</h5>
                                        <span className="stretched-link">{admin.email}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        : <Unauthorized />
            }
        </>
    )
}
