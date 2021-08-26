// React Bootstrap
import { Button, Col, Container, Row } from "react-bootstrap";
// React Router DOM
import { Link } from "react-router-dom";
// StyleSheet
import "./PostJob.css";

const PostJob = () => {
    return (
        <Container className="home-section-container">
            <Row>
                <Col md={7}>
                    <div>
                        <h1>Employer?? Post A Job</h1>
                        <span>Let an unemployed cross the "UN"</span>
                        <br />
                        <span>Add one valuable to your company</span>
                        <br />
                        <Link to="/post-a-job">
                            <Button className="btn btn-success btn-post-job-home mt-5">
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
