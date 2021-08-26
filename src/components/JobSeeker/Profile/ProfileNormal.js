import { faUserEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const ProfileNormal = ({ jobSeekerById, ProfilePicture, setEditing }) => {
    return (
        <>
            <div className="text-center text-success mt-4">
                <h2>
                    {jobSeekerById?.name} - {jobSeekerById?.title}
                </h2>
            </div>
            <div className="d-flex justify-content-end m-3">
                <div className="text-primary">
                    <Button
                        className="text-decoration-none"
                        onClick={() => setEditing(true)}
                    >
                        <FontAwesomeIcon icon={faUserEdit} />
                        <span className="mx-2">Edit Profile</span>
                    </Button>
                </div>
            </div>
            <Row>
                <Col md={4}>
                    <div className="mt-5">
                        <img
                            src={ProfilePicture}
                            alt="profile"
                            className="profileImage"
                        />
                        <div className="mb-4 mt-2">
                            <small className="text-secondary">Your Name</small>
                            <h5>{jobSeekerById?.name}</h5>
                        </div>
                        <div className="mb-4 mt-2">
                            <small className="text-secondary">Title</small>
                            <h5>{jobSeekerById?.title}</h5>
                        </div>
                        <div className="mb-4 mt-2">
                            <small className="text-secondary">Email</small>
                            <h5>{jobSeekerById?.email}</h5>
                        </div>
                        <div className="mb-4 mt-2">
                            <small className="text-secondary">Phone</small>
                            <h5>{jobSeekerById?.phone}</h5>
                        </div>
                        <div className="mb-4 mt-2">
                            <small className="text-secondary">Location</small>
                            <h5>{jobSeekerById?.location}</h5>
                        </div>
                    </div>
                </Col>
                <Col md={8}>
                    <div className="mb-2 mt-4">
                        <small className="fw-bolder">About</small>
                        <p>{jobSeekerById?.summery}</p>
                    </div>
                    <div className="mb-2 mt-4">
                        <small className="fw-bold">Skills</small>
                        <ul>
                            {jobSeekerById?.skills?.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="mb-4 mt-4">
                        <small className="fw-bold">Experience</small>
                        <hr />
                        <div className="experience">
                            <h5>MERN stack developer</h5>
                            <small>
                                Google, San Francisco, USA (14 August, 2020 -
                                Present)
                            </small>
                            <br />
                            <small>Full Time</small>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Exercitationem aspernatur
                                atque soluta officiis porro veniam fuga alias
                                beatae neque omnis velit saepe deserunt, nihil
                                recusandae adipisci nostrum est non. Dolores!
                                Voluptate nisi repellat quis alias sapiente iste
                                cupiditate similique accusamus dolorem assumenda
                                rem impedit omnis saepe quo fugiat nesciunt,
                                voluptatibus temporibus, maxime rerum dolores
                                fuga optio. Cumque minus libero consectetur?
                            </p>
                            <hr />
                        </div>
                        <div className="experience">
                            <h5>MERN stack developer</h5>
                            <small>
                                Google, San Francisco, USA (14 August, 2020 -
                                Present)
                            </small>
                            <small>Full Time</small>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Exercitationem aspernatur
                                atque soluta officiis porro veniam fuga alias
                                beatae neque omnis velit saepe deserunt, nihil
                                recusandae adipisci nostrum est non. Dolores!
                                Voluptate nisi repellat quis alias sapiente iste
                                cupiditate similique accusamus dolorem assumenda
                                rem impedit omnis saepe quo fugiat nesciunt,
                                voluptatibus temporibus, maxime rerum dolores
                                fuga optio. Cumque minus libero consectetur?
                            </p>
                            <hr />
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default ProfileNormal;
