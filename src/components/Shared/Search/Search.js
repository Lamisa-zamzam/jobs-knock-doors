import { Col, Form, Row, Button } from "react-bootstrap";

const Search = ({ labels, placeholders, states, changeStateFuncs }) => {
    return (
        <Form className="mx-2 my-5">
            <Row>
                <Col md={4}>
                    <Form.Group>
                        <Form.Label>{labels[0]}</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={placeholders[0]}
                            value={states[0]}
                            onChange={(e) =>
                                changeStateFuncs[0](e.target.value)
                            }
                        />
                    </Form.Group>
                </Col>
                {labels[1] && (
                    <Col md={4}>
                        <Form.Group>
                            <Form.Label>{labels[1]}</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={placeholders[1]}
                                value={states[1]}
                                onChange={(e) =>
                                    changeStateFuncs[1](e.target.value)
                                }
                            />
                        </Form.Group>
                    </Col>
                )}
                <Col md={4}>
                    <Button variant="success" style={{ marginTop: "32px" }}>
                        Search
                    </Button>
                </Col>
            </Row>
        </Form>
    );
};

export default Search;
