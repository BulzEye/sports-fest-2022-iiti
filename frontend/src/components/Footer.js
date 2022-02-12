import "./Footer.css";

const Footer = () => {
    return (
        <footer className="site-footer" id="footer">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-3 md-5">
                        <h2>About us</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum dolorum unde quia eos voluptates. Architecto, debitis fugit? Provident accusantium quasi eaque iusto quas doloribus sapiente impedit? Velit, fuga!</p>
                        <p><a href="#">Click here to learn more</a></p>
                    </div>
                    <div className="col-md-3 md-5">
                        <h2>Contact &amp; Address</h2>
                        <ul className="list-unstyled footer-link">
                            <li className="d-flex">
                                <span className="me-3">Addresse:</span>
                                <span className="text-white">IITI, Khandwa Road, Simrol, Indore 453552 (M.P) India</span>
                            </li>
                            <li className="d-flex">
                                <span className="me-3">Telephone:</span>
                                <span className="text-white">+91-7324-306994</span>
                            </li>
                            <li className="d-flex">
                                <span className="me-3">Email:</span>
                                <span className="text-white">gs.sports@iiti.ac.in</span>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3 mb-5">
                        <h2>Quick links</h2>
                        <ul className="list-unstyled footer-link">
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Our Events</a></li>
                            <li><a href="#">Sport Activities</a></li>
                            <li><a href="#">Contact us</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h2>Our social media</h2>
                        <ul className="list-unstyled footer-link d-flex footer-social">
                            <li><a href="#"><span className="fa fa-facebook" /></a></li>
                            <li><a href="#"><span className="fa fa-twitter" /></a></li>
                            <li><a href="#"><span className="fa fa-instagram" /></a></li>
                            <li><a href="#"><span className="fa fa-linkedin" /></a></li>
                            <li><a href="#"><span className="fa fa-youtube" /></a></li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text md center text-center">
                        <p>© Copyright 2022 | Lakshya | All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;