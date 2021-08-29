// React
import { useEffect, useState } from "react";
// React Bootstrap
import { Col, Container, Row, Button } from "react-bootstrap";
// React Router DOM
import { useParams } from "react-router-dom";
// StyleSheet
import "./JobDetails.css";

const JobDetails = () => {
    // Initial State
    const [data, setData] = useState([]);

    // Get the width of the window
    const windowWidth = window.innerWidth;

    // Get id from the URL parameter
    const { id } = useParams();

    // Get job details depending on its id in the param
    useEffect(() => {
        fetch("https://aqueous-meadow-34034.herokuapp.com/graphql", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                query: `query ($id: ID!) {
                    job(id: $id) {
                        title
                        company
                        location
                        remote
                        jobType
                        jobDescription
                        experience
                        seniorityLevel
                        salary
                        employer {
                            name
                            email
                        }
                        aboutCompany
                        responsibilities
                        requirements
                        facilities
                    }
                }
                `,
                variables: {
                    id,
                },
            }),
        }).then(async (data) => {
            // Convert data from JSON
            const jobDetails = await data.json();
            // Set State
            setData(jobDetails.data.job);
        });
    }, [id]);

    return (
        <Container>
            {data ? (
                <>
                    <div className="text-center text-success">
                        <h1>
                            {data?.title} - {data?.remoteOrNot}
                        </h1>
                        <small>
                            {data?.company}, {data?.location}
                        </small>
                    </div>
                    <div
                        // Use window's inner-width for responsiveness
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
                                    <h6>{data?.title}</h6>
                                    <hr />
                                </div>
                                <div>
                                    <small className="text-secondary">
                                        Company
                                    </small>
                                    <h6>{data?.company}</h6>
                                    <hr />
                                </div>
                                <div>
                                    <small className="text-secondary">
                                        Location
                                    </small>
                                    <h6>{data?.location}</h6>
                                    <hr />
                                </div>
                                <div>
                                    <small className="text-secondary">
                                        Remote or not
                                    </small>
                                    <h6>
                                        {data?.remoteOrNot
                                            ? "Remote"
                                            : "In-office"}
                                    </h6>
                                    <hr />
                                </div>
                                <div>
                                    <small className="text-secondary">
                                        Job Type
                                    </small>
                                    <h6>{data?.jobType}</h6>
                                    <hr />
                                </div>
                                <div>
                                    <small className="text-secondary">
                                        Experience
                                    </small>
                                    <h6>{data?.experience}</h6>
                                    <hr />
                                </div>
                                <div>
                                    <small className="text-secondary">
                                        {data?.seniorityLevel}
                                    </small>
                                    <h6>Entry</h6>
                                    <hr />
                                </div>
                                <div>
                                    <small className="text-secondary">
                                        Salary
                                    </small>
                                    {data?.salary ? (
                                        <h6>{data.salary}</h6>
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
                                    {data?.employer ? (
                                        <h6>
                                            {data.employer.name} |{" "}
                                            {data.employer.email}
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
                                <p>{data?.aboutCompany}</p>
                                <hr />
                            </div>
                            <div className="detailInfo">
                                <small className="fw-bolder">
                                    data Description
                                </small>
                                <p>{data?.jobDescription}</p>
                                <hr />
                            </div>
                            <div className="detailInfo">
                                <small className="fw-bold">
                                    Responsibilities
                                </small>
                                {data?.responsibilities ? (
                                    <p>{data.responsibilities}</p>
                                ) : (
                                    <small className="text-muted d-block">
                                        Responsibilities not provided
                                    </small>
                                )}
                                <hr />
                            </div>
                            <div className="detailInfo">
                                <small className="fw-bold">Requirements</small>
                                <p>{data?.requirements}</p>
                                <hr />
                            </div>
                            <div className="detailInfo">
                                <small className="fw-bold">Facilities</small>
                                {data?.facilities ? (
                                    <p>{data.facilities}</p>
                                ) : (
                                    <small className="text-muted d-block">
                                        Facilities not provided
                                    </small>
                                )}
                                <hr />
                            </div>
                            {/* We need a button at the end of the page for smaller devices for
                            convenience of the job seeker */}
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

export default JobDetails;
