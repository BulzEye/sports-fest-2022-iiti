import "./Navbar.css";
// import { NavHashLink as NavLink } from "react-router-hash-link";
import { HashLink as Link } from "react-router-hash-link";
import AdminPanel from "./AdminPanel/AdminPanel";

const Navbar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="navbar">
            <div className="container-fluid container">
                <Link className="navbar-brand" to="/">SportFest</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/#header">LAKSHYA 2022</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/#about">About</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="/#events" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Events
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="/#events">Sport Events</Link></li>
                                <li><Link className="dropdown-item" to="/#events">Online Events</Link></li>
                                {/* <li>
                                  <hr class="dropdown-divider">
                              </li>*/}
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/#schedule">Schedule</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/#sponsors">Sponsors</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/#partners">Partners</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/#footer">Contact</Link>
                        </li>
                        <AdminPanel auth={props.auth} />
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;