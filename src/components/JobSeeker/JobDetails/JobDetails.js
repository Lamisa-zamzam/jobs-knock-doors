import { Col, Container, Row, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { graphql } from "react-apollo";

import "./JobDetails.css";
import { getJobDetailsQuery } from "../../../queries/queries";
import { useEffect, useState } from "react";

const JobDetails = ({ data }) => {
    const windowWidth = window.innerWidth;
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

    return (
        <Container>
            {!loading ? (
                <>
                    <div className="text-center text-success">
                        <h1>
                            {job?.title} - {job?.remoteOrNot}
                        </h1>
                        <small>
                            {job?.company}, {job?.location}
                        </small>
                    </div>
                    <div
                        className={
                            windowWidth > 760
                                ? "d-flex justify-content-end m-3"
                                : "d-flex justify-content-center m-3"
                        }
                    >
                        <div className="text-primary">
                            <Button variant="success" className="btn-apply">
                                Apply For this Job
                            </Button>
                        </div>
                    </div>
                    <Row>
                        <Col md={4}>
                            <div className="key-info-div">
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
                                    {job?.salary ? (
                                        <h6>{job.salary}</h6>
                                    ) : (
                                        <small className="text-muted d-block">
                                            salary not provided
                                        </small>
                                    )}
                                    <hr />
                                </div>
                                <div>
                                    <small className="text-secondary">
                                        Employer
                                    </small>
                                    {job?.employer ? (
                                        <h6>
                                            {job.employer.name} |{" "}
                                            {job.employer.email}
                                        </h6>
                                    ) : (
                                        <small className="text-muted d-block">
                                            No employer record found
                                        </small>
                                    )}

                                    <hr />
                                </div>
                                <Button variant="success" className="mt-2">
                                    Apply For this Job
                                </Button>
                            </div>
                        </Col>
                        <Col md={8}>
                            <div className="detailInfo">
                                <small className={"fw-bolder"}>
                                    About the company
                                </small>
                                <p>{job?.aboutCompany}</p>
                                <hr />
                            </div>
                            <div className="detailInfo">
                                <small className="fw-bolder">
                                    Job Description
                                </small>
                                <p>{job?.jobDescription}</p>
                                <hr />
                            </div>
                            <div className="detailInfo">
                                <small className="fw-bold">
                                    Responsibilities
                                </small>
                                {job?.responsibilities ? (
                                    <p>{job.responsibilities}</p>
                                ) : (
                                    <small className="text-muted d-block">
                                        Responsibilities not provided
                                    </small>
                                )}
                                <hr />
                            </div>
                            <div className="detailInfo">
                                <small className="fw-bold">Requirements</small>
                                <p>{job?.requirements}</p>
                                <hr />
                            </div>
                            <div className="detailInfo">
                                <small className="fw-bold">Facilities</small>
                                {job?.facilities ? (
                                    <p>{job.facilities}</p>
                                ) : (
                                    <small className="text-muted d-block">
                                        Facilities not provided
                                    </small>
                                )}
                                <hr />
                            </div>
                            {windowWidth < 760 && (
                                <Button variant="success" className="mb-5">
                                    Apply For this Job
                                </Button>
                            )}
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
