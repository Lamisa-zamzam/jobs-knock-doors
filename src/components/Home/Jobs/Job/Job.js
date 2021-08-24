import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
    const { id, title, company, jobType, remote, experience } = job;
    return (
        <Link to={`job/${id}`} className="react-link">
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {company} <br />
                            {jobType} | {remote ? "Remote" : "In-office"} <br />
                            {experience} of experience
                            <br />
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Link>
    );
};

export default Job;
