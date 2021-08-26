import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./GetStarted.css";

import job from "../../../images/job-search-recruitment-hiring-employment-vector-21795027.jpg";

const GetStarted = () => {
    return (
        <Container className="home-section-container">
            <Row>
                <Col md={5}>
                    <img src={job} alt="employ" className="employImage" />
                </Col>
                <Col md={7}>
                    <div className="get-started-div">
                        <h1>It's rush time</h1>
                        <br />
                        <span>Get Started Now.</span>
                        <br />
                        <span>Let your jobs and employees find you.</span>
                        <br />
                        <Link to="/register">
                            <Button className="btn btn-success mb-5 mt-5">
                                Get Started
                            </Button>
                        </Link>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default GetStarted;
