import { Col, Form, Row, Button } from "react-bootstrap";

const Search = ({
    labels,
    placeholders,
    jobTitle,
    setJobTitle,
    location,
    setLocation,
}) => {
    return (
        <Form className="mx-2 my-5">
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Label>{labels[0]}</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={placeholders[0]}
                            value={jobTitle}
                            onChange={(e) => setJobTitle(e.target.value)}
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>{labels[1]}</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={placeholders[1]}
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Button variant="success" style={{ marginTop: "32px" }}>
                        Search
                    </Button>
                </Col>
            </Row>
        </Form>
    );
};

export default Search;
