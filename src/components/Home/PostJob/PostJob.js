import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./PostJob.css";

const PostJob = () => {
    return (
        <Container className="home-section-container">
            <Row>
                <Col md={7}>
                    <div>
                        <h1>Employer?? Post A Job</h1>
                        <br />
                        <span>Let an unemployed cross the "UN"</span>
                        <br />
                        <span>Add one valuable to your company</span>
                        <br />
                        <br />
                        <Link to="/post-a-job">
                            <Button className="btn btn-success btn-post-job-home">
                                Post A Job Now
                            </Button>
                        </Link>
                    </div>
                </Col>
                <Col md={5}>
                    <img
                        src="https://tse1.mm.bing.net/th?id=OIP.vU8EX5wBeMKRxjkwsXsyfgHaD0&pid=Api&P=0&w=309&h=160"
                        alt="employ"
                        className="employImage"
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default PostJob;
