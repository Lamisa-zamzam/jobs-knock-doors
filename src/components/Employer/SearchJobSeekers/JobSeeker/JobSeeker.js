import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const JobSeeker = ({ jobSeeker }) => {
    const { id, name, title, image, location, email } = jobSeeker;
    return (
        <Col md={4} className="mb-5">
            <Link to={`profile/${id}`} className="react-link">
                <Card>
                    <Card.Body>
                        <Row>
                            <Col md={3}>
                                <img
                                    src={image}
                                    alt="profile"
                                    className="jobSeeker-picture"
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
            </Link>
        </Col>
    );
};

export default JobSeeker;
