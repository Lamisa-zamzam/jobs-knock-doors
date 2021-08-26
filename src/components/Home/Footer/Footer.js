import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope,
    faMapMarkerAlt,
    faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col xs={12} md={4}>
                        <div className="about">
                            <div className="widget-heading">
                                <h4>About</h4>
                            </div>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Voluptates consequuntur neque
                                suscipit. Id amet accusantium veritatis
                                provident quia aperiam omnis maiores cupiditate
                                error quis! Sint.
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} md={3}>
                        <div className="quick-link">
                            <div className="widget-heading">
                                <h4>Quick Link</h4>
                            </div>
                            <div className="quick-links">
                                <ul>
                                    <li>
                                        <Link to="/search-jobs">Jobs</Link>
                                    </li>
                                    <li>
                                        <Link to="/profile">Profile</Link>
                                    </li>
                                    <li>
                                        <Link to="/search-employees">Employees</Link>
                                    </li>
                                    <li>
                                        <Link to="/post-a-job">Post A Job</Link>
                                    </li>
                                    <li>
                                        <Link to="/register">Register</Link>
                                    </li>
                                    <li>
                                        <Link to="/login">Login</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className="footer-contact">
                            <div className="widget-heading">
                                <h4>Contact Us</h4>
                            </div>
                            <div className="address">
                                <ul>
                                    <li>
                                        <span>
                                            <FontAwesomeIcon icon={faPhone} />
                                        </span>
                                        256, 1st AVE, Manchester 125 , Noth
                                        England
                                    </li>
                                    <li>
                                        <span>
                                            <FontAwesomeIcon
                                                icon={faEnvelope}
                                            />
                                        </span>
                                        Telephone : +88 (012) 356 958 45
                                    </li>
                                    <li>
                                        <span>
                                            <FontAwesomeIcon
                                                icon={faMapMarkerAlt}
                                            />
                                        </span>
                                        info@example.com
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
