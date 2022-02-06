import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container-fluid container">
                <a className="navbar-brand" href="#">SportFest</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">LAKSHYA 2022</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Events
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Sport Events</a></li>
                                <li><a className="dropdown-item" href="#">Online Events</a></li>
                                {/* <li>
                                  <hr class="dropdown-divider">
                              </li>
                              <li><a class="dropdown-item" href="#">Something else here</a></li> */}
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Schedule</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Sponsors</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Partners</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;