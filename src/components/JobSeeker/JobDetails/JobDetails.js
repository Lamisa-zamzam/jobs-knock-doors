import { Col, Container, Row, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { graphql } from "react-apollo";

import "./JobDetails.css";
import { getJobDetailsQuery } from "../../../queries/queries";
import { useEffect, useState } from "react";

const JobDetails = ({ data }) => {
    const [loading, setLoading] = useState(data.loading);
    const { id } = useParams();
    const { job } = data;

    sessionStorage.setItem("jobId", id);

    useEffect(() => {
        if (!data.loading) {
            console.log("heard");
            setLoading(false);
        }
    }, [data.loading]);

    console.log(data);

    return (
        <Container>
            {!loading ? (
                <>
                    <br />
                    <div className="text-center text-success">
                        <h1>
                            {job?.title} - {job?.remoteOrNot}
                            <br />
                        </h1>
                        <small>
                            {job?.company}, {job?.location}
                        </small>
                    </div>
                    <div className="d-flex justify-content-end m-3">
                        <div className="text-primary">
                            <Button variant="success" className="mx-2">
                                Apply For this Job
                            </Button>
                        </div>
                    </div>
                    <Row>
                        <Col md={4}>
                            <div className="profileInfoDiv p-5">
                                <div>
                                    <small className="text-secondary">
                                        Title
                                    </small>
                                    <h6>{job?.title}</h6>
                                    <hr />
                                </div>
                                <div>
                                    <small className="text-secondary">
                                        Company
                                    </small>
                                    <h6>{job?.company}</h6>
                                    <hr />
                                </div>
                                <div>
                                    <small className="text-secondary">
                                        Location
                                    </small>
                                    <h6>{job?.location}</h6>
                                    <hr />
                                </div>
                                <div>
                                    <small className="text-secondary">
                                        Remote or not
                                    </small>
                                    <h6>
                                        {job?.remoteOrNot
                                            ? "Remote"
                                            : "In-office"}
                                    </h6>
                                    <hr />
                                </div>
                                <div>
                                    <small className="text-secondary">
                                        Job Type
                                    </small>
                                    <h6>{job?.jobType}</h6>
                                    <hr />
                                </div>
                                <div>
                                    <small className="text-secondary">
                                        Experience
                                    </small>
                                    <h6>{job?.experience}</h6>
                                    <hr />
                                </div>
                                <div>
                                    <small className="text-secondary">
                                        {job?.seniorityLevel}
                                    </small>
                                    <h6>Entry</h6>
                                    <hr />
                                </div>
                                <div>
                                    <small className="text-secondary">
                                        Salary
                                    </small>
                                    <br />
                                    {job?.salary ? (
                                        <h6>{job.salary}</h6>
                                    ) : (
                                        <small className="text-muted">
                                            salary not provided
                                        </small>
                                    )}
                                    <hr />
                                </div>
                                <div>
                                    <small className="text-secondary">
                                        Employer
                                    </small>
                                    <br />
                                    {job?.employer ? (
                                        <h6>
                                            {job.employer.name} |
                                            {job.employer.email}
                                        </h6>
                                    ) : (
                                        <small className="text-muted">
                                            No employer record found
                                        </small>
                                    )}

                                    <hr />
                                </div>
                                <Button variant="success">
                                    Apply For this Job
                                </Button>
                            </div>
                        </Col>
                        <Col md={8}>
                            <div>
                                <br />
                                <br />
                                <small className="fw-bolder">
                                    About the company
                                </small>
                                <p>{job?.aboutCompany}</p>
                                <br />
                                <hr />
                                <br />
                            </div>
                            <div>
                                <br />
                                <small className="fw-bolder">
                                    Job Description
                                </small>
                                <p>{job?.jobDescription}</p>
                                <br />
                                <hr />
                                <br />
                            </div>
                            <div>
                                <small className="fw-bold">
                                    Responsibilities
                                </small>
                                {job?.responsibilities ? (
                                    <p>{job.responsibilities}</p>
                                ) : (
                                    <small className="text-muted">
                                        Responsibilities not provided
                                    </small>
                                )}
                                <br />
                                <hr />
                                <br />
                            </div>
                            <div>
                                <small className="fw-bold">Requirements</small>
                                <p>{job?.requirements}</p>
                                <br />
                                <hr />
                                <br />
                            </div>
                            <div>
                                <small className="fw-bold">Facilities</small>
                                {job?.facilities ? (
                                    <p>{job.facilities}</p>
                                ) : (
                                    <small className="text-muted">
                                        Facilities not provided
                                    </small>
                                )}
                                <br />
                                <hr />
                                <br />
                            </div>
                        </Col>
                    </Row>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </Container>
    );
};

export default graphql(getJobDetailsQuery, {
    options: (props) => {
        return {
            variables: {
                id: sessionStorage.getItem("jobId"),
            },
        };
    },
})(JobDetails);
