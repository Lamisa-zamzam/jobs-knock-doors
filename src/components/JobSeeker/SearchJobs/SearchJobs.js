import { Col, Container, Row, Card } from "react-bootstrap";
import Search from "../../Shared/Search/Search";

import "./SearchJobs.css";

const SearchJobs = () => {
    return (
        <Container>
            <div className="d-flex justify-contents-center text-success mx-2 my-4">
                <h3>Search For Jobs</h3>
            </div>
            <Search />
            <Row>
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>Front End Developer</Card.Title>
                                <Card.Text>
                                    <small>HireRising</small>
                                    <br />
                                    <small>Full Time | Remote</small>
                                    <br />
                                    <small>1 - 5 years of Experience</small>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default SearchJobs;
