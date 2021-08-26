import { faUserEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { graphql } from "react-apollo";

import ProfilePicture from "../../../images/knock.jpg";

import "./Profile.css";
import { getJobSeekerByIdQuery } from "../../../queries/queries";
import { useEffect, useState } from "react";

const Profile = ({ data }) => {
    const [loading, setLoading] = useState(data.loading);
    const { id } = useParams();
    const { jobSeekerById } = data;

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
                        <h2>
                            {jobSeekerById?.name} - {jobSeekerById?.title}
                            <br />
                        </h2>
                    </div>
                    <div className="d-flex justify-content-end m-3">
                        <div className="text-primary">
                            <Link className="text-decoration-none">
                                <FontAwesomeIcon icon={faUserEdit} />
                                <span className="mx-2">Edit Profile</span>
                            </Link>
                        </div>
                    </div>
                    <Row>
                        <Col md={4}>
                            <div className="profileInfoDiv mt-5">
                                <img
                                    src={ProfilePicture}
                                    alt="profile"
                                    className="profileImage"
                                />
                                <br />
                                <br />
                                <br />
                                <div>
                                    <small className="text-secondary">
                                        Your Name
                                    </small>
                                    <h5>John Doe</h5>
                                    <br />
                                </div>
                                <div>
                                    <small className="text-secondary">
                                        Title
                                    </small>
                                    <h5>MERN stack developer</h5>
                                    <br />
                                </div>
                                <div>
                                    <small className="text-secondary">
                                        Email
                                    </small>
                                    <h5>johnDoe@gmail.com</h5>
                                    <br />
                                </div>
                                <div>
                                    <small className="text-secondary">
                                        Phone
                                    </small>
                                    <h5>+847238452354</h5>
                                    <br />
                                </div>
                                <div>
                                    <small className="text-secondary">
                                        Location
                                    </small>
                                    <h5>Rosario, Argentina</h5>
                                    <br />
                                </div>
                            </div>
                        </Col>
                        <Col md={8}>
                            <div>
                                <br />
                                <br />
                                <small className="fw-bolder">About</small>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Ipsa provident recusandae
                                    assumenda voluptatum placeat et dolores est
                                    laborum. Rem quod perspiciatis id alias,
                                    maxime velit! Sequi quis quasi
                                    necessitatibus doloremque! Error repudiandae
                                    nulla ab neque, iure eveniet. Blanditiis
                                    corrupti ut placeat dicta consequuntur sit
                                    fuga voluptatum! Necessitatibus nisi esse
                                    non cum. Aut assumenda ut modi itaque minus,
                                    saepe inventore maxime!
                                </p>
                                <br />
                                <br />
                            </div>
                            <div>
                                <small className="fw-bold">Skills</small>
                                <ul>
                                    <li>React</li>
                                    <li>Node</li>
                                    <li>JavaScript</li>
                                </ul>
                                <br />
                                <br />
                            </div>
                            <div>
                                <small className="fw-bold">Experience</small>
                                <hr />
                                <div className="experience">
                                    <h5>MERN stack developer</h5>
                                    <small>
                                        Google, San Francisco, USA (14 August,
                                        2020 - Present)
                                    </small>
                                    <br />
                                    <small>Full Time</small>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Exercitationem
                                        aspernatur atque soluta officiis porro
                                        veniam fuga alias beatae neque omnis
                                        velit saepe deserunt, nihil recusandae
                                        adipisci nostrum est non. Dolores!
                                        Voluptate nisi repellat quis alias
                                        sapiente iste cupiditate similique
                                        accusamus dolorem assumenda rem impedit
                                        omnis saepe quo fugiat nesciunt,
                                        voluptatibus temporibus, maxime rerum
                                        dolores fuga optio. Cumque minus libero
                                        consectetur?
                                    </p>
                                    <hr />
                                    <br />
                                </div>
                                <div className="experience">
                                    <h5>MERN stack developer</h5>
                                    <small>
                                        Google, San Francisco, USA (14 August,
                                        2020 - Present)
                                    </small>
                                    <br />
                                    <small>Full Time</small>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Exercitationem
                                        aspernatur atque soluta officiis porro
                                        veniam fuga alias beatae neque omnis
                                        velit saepe deserunt, nihil recusandae
                                        adipisci nostrum est non. Dolores!
                                        Voluptate nisi repellat quis alias
                                        sapiente iste cupiditate similique
                                        accusamus dolorem assumenda rem impedit
                                        omnis saepe quo fugiat nesciunt,
                                        voluptatibus temporibus, maxime rerum
                                        dolores fuga optio. Cumque minus libero
                                        consectetur?
                                    </p>
                                    <hr />
                                    <br />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </>
            ) : (
                <p className="text-muted">Loading...</p>
            )}
        </Container>
    );
};

export default graphql(getJobSeekerByIdQuery, {
    options: (props) => {
        return {
            variables: {
                id: sessionStorage.getItem("id"),
            },
        };
    },
})(Profile);
