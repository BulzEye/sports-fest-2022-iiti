import "./Footer.css";

const Footer = () => {
    return (
        <footer className="site-footer" id="footer">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-3 mb-5">
                        <h2>About us</h2>
                        <p>Indian Institute of Technology, Indore was established by the Government of India in 2009 along with eight other IITs. Since its inception IIT, Indore has been able to deliver outstanding performance in all aspects. In recognition of its stellar performance, IIT Indore is officially proclaimed as an Institute of National Importance by the Government of India.</p>
                        <p><a href="https://www.iiti.ac.in/page/about-us">Click here to learn more</a></p>
                    </div>
                    <div className="col-md-3 mb-5 d-flex flex-column align-items-center">
                        <h2>Contact Details</h2>
                        <ul className="list-unstyled footer-link">

                            <h6 className="text-start">Fest Coordinators:</h6>
                            <ul className="list-styled">
                                <li className="d-flex flex-column align-items-start">
                                    <span><strong>Shrevesh</strong></span>
                                    <span>Contact No.: <span className="text-white">9999999999</span></span>
                                </li>
                                <li className="d-flex flex-column align-items-start">
                                    <span><strong>Prakhar Gautam</strong></span>
                                    <span>Contact No.: <span className="text-white">9999999999</span></span>
                                </li>
                            </ul>
                            <h6 className="text-start">General Secretary Sports:</h6>
                            <ul className="list-styled">
                                <li className="d-flex flex-column align-items-start">
                                    <span><strong>Sai Praveen Surapu</strong></span>
                                    <span>Contact No.: <span className="text-white">9999999999</span></span>
                                    <span className="me-2">Email: <span className="text-white">gs.sports@iiti.ac.in</span></span>
                                </li>
                            </ul>
                            {/* <li className="d-flex">
                                <span>Address:</span>
                                <span className="text-white">IITI, Khandwa Road, Simrol, Indore 453552 (M.P) India</span>
                            </li> */}
                            {/* <li className="d-flex">
                                <span>Telephone:</span>
                                <span className="text-white">+91-7324-306994</span>
                            </li> */}
                            <li className="d-flex">
                                <span className="me-2">Email:</span>
                                <span className="text-white">lakshya@iiti.ac.in</span>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3 mb-5">
                        <h2>Quick links</h2>
                        <ul className="list-unstyled footer-link">
                            <li><a href="#">IIT Indore website</a></li>
                            <li><a href="#">Sports @IIT Indore</a></li>
                            <li><a href="https://www.iiti.ac.in/page/contactus">Contact us</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h2>Our social media</h2>
                        <ul className="list-unstyled footer-link d-flex justify-content-center footer-social">
                            <li><a href="#"><span className="fa fa-facebook" /></a></li>
                            <li><a href="#"><span className="fa fa-twitter" /></a></li>
                            <li><a href="https://www.instagram.com/lakshyaiiti/"><span className="fa fa-instagram" /></a></li>
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