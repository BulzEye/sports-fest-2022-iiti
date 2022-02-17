import "./Navbar.css";
// import { NavHashLink as NavLink } from "react-router-hash-link";
import { HashLink as Link } from "react-router-hash-link";
import AdminPanel from "./AdminPanel/AdminPanel";
import { useState } from 'react';

const Navbar = (props) => {

    const [navbar, setnavbar] = useState(false);

    const setBackground = () => {
        if (window.scrollY >= 5) {
            setnavbar(true);
        }
        else {
            setnavbar(false);
        }
    }

    window.addEventListener('scroll', setBackground);
    return (
        <nav className={navbar ? 'navbar navbar-expand-lg navbar-dark fixed-top active' : 'navbar navbar-expand-lg navbar-dark fixed-top'}>
            <div className="container-fluid container">
                <Link className="navbar-brand" to="/">SportFest</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/#header" data-bs-target={`#header`}>LAKSHYA 2022</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/#about" data-bs-target={`#about`}>About</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="/#events" data-bs-target={`#events`} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Events
                            </Link>
                            {/* <div className="dropdown-menu multi-co d-flex">
                                <ul className="dropdown-menu">
                                    <li>Item 1</li>
                                    <li>Item 2</li>
                                </ul>
                                <ul className="dropdown-menu">
                                    <li>Item 1</li>
                                    <li>Item 2</li>
                                </ul>
                            </div> */}
                            <ul className="dropdown-menu d-flex" aria-labelledby="navbarDropdown">
                                
                                <li>
                                    <Link className="dropdown-item" to="/#events">Sport Events</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/#events">Online Events</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/#schedule" data-bs-target={`#schedule`}>Schedule</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/#sponsors" data-bs-target={`#sponsors`}>Sponsors</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/#partners" data-bs-target={`#partners`}>Partners</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/#footer" data-bs-target={`#footer`}>Contact</Link>
                        </li>
                        <AdminPanel auth={props.auth} />
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;