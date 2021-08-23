import { Col, Container, Row, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

import "./JobDetail.css";

const JobDetail = () => {
    const id = useParams();

    const getJobDetailQuery = gql`
        {
            job {
                title
                company
                location
                remote
                jobType
                experience
                seniorityLevel
                salary
                employer
                aboutCompany
                responsibilities
                requirements
                facilities
            }
        }
    `;

    return (
        <Container>
            <div className="text-center text-success">
                <h1>
                    MERN stack Developer - Remote
                    <br />
                </h1>
                <small>Google, Rosario, Argentina</small>
            </div>

            <div className="d-flex justify-content-end m-3">
                <div className="text-primary">
                    <Link className="react-link">
                        <Button variant="success" className="mx-2">
                            Apply For this Job
                        </Button>
                    </Link>
                </div>
            </div>
            <Row>
                <Col md={4}>
                    <div className="profileInfoDiv p-5">
                        <div>
                            <small className="text-secondary">Title</small>
                            <h6>MERN stack developer</h6>
                            <hr />
                        </div>
                        <div>
                            <small className="text-secondary">Company</small>
                            <h6>Google</h6>
                            <hr />
                        </div>
                        <div>
                            <small className="text-secondary">Location</small>
                            <h6>Rosario, Argentina</h6>
                            <hr />
                        </div>
                        <div>
                            <small className="text-secondary">
                                Remote or In-office
                            </small>
                            <h6>Remote</h6>
                            <hr />
                        </div>
                        <div>
                            <small className="text-secondary">Job Type</small>
                            <h6>Full Time</h6>
                            <hr />
                        </div>
                        <div>
                            <small className="text-secondary">Experience</small>
                            <h6>1-5 years</h6>
                            <hr />
                        </div>
                        <div>
                            <small className="text-secondary">
                                Seniority Level
                            </small>
                            <h6>Entry</h6>
                            <hr />
                        </div>
                        <div>
                            <small className="text-secondary">Salary</small>
                            <h6>$25 per hour</h6>
                            <hr />
                        </div>
                        <div>
                            <small className="text-secondary">Employer</small>
                            <h6>Rui Pattricio</h6>
                            <hr />
                        </div>
                        <Link>
                            <Button variant="success">
                                Apply For this Job
                            </Button>
                        </Link>
                    </div>
                </Col>
                <Col md={8}>
                    <div>
                        <br />
                        <br />
                        <small className="fw-bolder">About the company</small>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Ipsa provident recusandae assumenda voluptatum
                            placeat et dolores est laborum. Rem quod
                            perspiciatis id alias, maxime velit! Sequi quis
                            quasi necessitatibus doloremque! Error repudiandae
                            nulla ab neque, iure eveniet. Blanditiis corrupti ut
                            placeat dicta consequuntur sit fuga voluptatum!
                            Necessitatibus nisi esse non cum. Aut assumenda ut
                            modi itaque minus, saepe inventore maxime!
                        </p>
                        <br />
                        <hr />
                        <br />
                    </div>
                    <div>
                        <small className="fw-bold">Responsibilities</small>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Ipsa provident recusandae assumenda voluptatum
                            placeat et dolores est laborum. Rem quod
                            perspiciatis id alias, maxime velit! Sequi quis
                            quasi necessitatibus doloremque! Error repudiandae
                            nulla ab neque, iure eveniet. Blanditiis corrupti ut
                            placeat dicta consequuntur sit fuga voluptatum!
                            Necessitatibus nisi esse non cum. Aut assumenda ut
                            modi itaque minus, saepe inventore maxime!
                        </p>
                        <br />
                        <hr />
                        <br />
                    </div>
                    <div>
                        <small className="fw-bold">Requirements</small>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Ipsa provident recusandae assumenda voluptatum
                            placeat et dolores est laborum. Rem quod
                            perspiciatis id alias, maxime velit! Sequi quis
                            quasi necessitatibus doloremque! Error repudiandae
                            nulla ab neque, iure eveniet. Blanditiis corrupti ut
                            placeat dicta consequuntur sit fuga voluptatum!
                            Necessitatibus nisi esse non cum. Aut assumenda ut
                            modi itaque minus, saepe inventore maxime!
                        </p>
                        <br />
                        <hr />
                        <br />
                    </div>
                    <div>
                        <small className="fw-bold">Facilities</small>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Ipsa provident recusandae assumenda voluptatum
                            placeat et dolores est laborum. Rem quod
                            perspiciatis id alias, maxime velit! Sequi quis
                            quasi necessitatibus doloremque! Error repudiandae
                            nulla ab neque, iure eveniet. Blanditiis corrupti ut
                            placeat dicta consequuntur sit fuga voluptatum!
                            Necessitatibus nisi esse non cum. Aut assumenda ut
                            modi itaque minus, saepe inventore maxime!
                        </p>
                        <br />
                        <hr />
                        <br />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default JobDetail;
