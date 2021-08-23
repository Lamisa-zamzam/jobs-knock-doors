import { Col, Form, Row, Button } from "react-bootstrap";

const Search = () => {
    return (
        <Form className="mx-2 my-5">
            <Row>
                <Col>
                    <small className="text-secondary">Job Title</small>
                    <br />
                    <Form.Control
                        type="text"
                        placeholder="e.g. Full Stack Developer"
                    />
                </Col>
                <Col>
                    <small className="text-secondary">Location</small>
                    <br />
                    <Form.Control type="text" placeholder="e.g. Remote" />
                </Col>
                <Col>
                    <br />
                    <Button variant="success" type="submit">
                        Search
                    </Button>
                </Col>
            </Row>
        </Form>
    );
};

export default Search;
