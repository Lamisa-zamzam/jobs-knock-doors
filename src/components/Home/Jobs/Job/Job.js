import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
    const { id, title, company, jobType, remote, experience } = job;
    return (
        <Col md={4} className="mb-5">
            <Link to={`job/${id}`} className="react-link">
                <Card>
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {company} <br />
                            {jobType} | {remote ? "Remote" : "In-office"} <br />
                            {experience} of experience
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </Col>
    );
};

export default Job;
