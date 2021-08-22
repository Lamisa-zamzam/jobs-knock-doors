import { Card, Col, Container, Row, Button } from "react-bootstrap";

const Jobs = () => {
    return (
        <Container>
            <br />
            <br />
            <h1 className="mt-5 text-secondary">Your Jobs</h1>
            <br />
            <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>Front End Developer</Card.Title>
                                <Card.Text>
                                    <p>HireRising</p>
                                    <p>Full Time | Remote</p>
                                    <p>1 - 5 years of Experience</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <br />
            <div className="d-flex justify-content-end mb-5">
                <Button className="btn btn-success">See More {">>"}</Button>
            </div>
        </Container>
    );
};

export default Jobs;
