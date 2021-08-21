import { Button, Col, Container, Row } from "react-bootstrap";

import job from "../../../images/job-search-recruitment-hiring-employment-vector-21795027.jpg";

const GetStarted = () => {
    return (
        <Container>
            <br />
            <br />
            <br />
            <br />
            <Row>
                <Col md={5}>
                    <img src={job} alt="employ" className="employImage" />
                </Col>
                <Col md={7}>
                    <div className="ms-5 ps-5">
                        <h1>It's rush time</h1>
                        <br />
                        <span>Get Started Now.</span>
                        <br />
                        <span>Let your jobs and employees find you.</span>
                        <br />
                        <br />
                        <br />
                        <Button className="btn btn-success">Get Started</Button>
                    </div>
                </Col>
            </Row>
            <br />
        </Container>
    );
};

export default GetStarted;
