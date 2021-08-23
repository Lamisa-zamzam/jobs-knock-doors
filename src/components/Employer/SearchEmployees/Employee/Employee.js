import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Employee = ({ jobSeeker }) => {
    const { id, name, title, image, location, email } = jobSeeker;
    return (
        <Link to={`profile/${id}`} className="react-link">
            <Col>
                <Card>
                    <Card.Body>
                        <Row>
                            <Col md={3}>
                                <img
                                    src={image}
                                    alt="profile"
                                    className="employee-picture"
                                />
                            </Col>
                            <Col md={9}>
                                <Card.Title>{name}</Card.Title>
                            </Col>
                        </Row>
                        <Card.Text>
                            <small>{title}</small>
                            <br />
                            <small>{location}</small>
                            <br />
                            <small>{email}</small>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Link>
    );
};

export default Employee;
