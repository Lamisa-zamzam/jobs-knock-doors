// React
import { useState } from "react";
// React Bootstrap
import { Button, Col, Container, Form, Row } from "react-bootstrap";
// React Hook form
import { useForm } from "react-hook-form";
// Router
import { Link, useHistory, useLocation } from "react-router-dom";
// CSS
import "../auth.css";
// Font Awesome
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Login = (props) => {
    // Error State
    const [err, setErr] = useState("");

    // Routing vars
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/home" } };

    // If the user is already logged in, doesn't make sense to show him/her the login page again
    if (localStorage.getItem("authToken")) {
        history.replace(from);
    }
    // React Hook form vars
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // Handle submit
    const onSubmit = async (data) => {
        const { email, password, role } = data;
        // Send request to get JWT token
        if (role === "jobSeeker") {
            fetch("http://localhost:5000/graphql", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    query: `query($email: String!, $password: String!)
                    {
                        jobSeeker(
                            email: $email
                            password: $password
                        ) {
                            id
                            name
                            email
                        }
                    }
                `,
                    variables: {
                        email,
                        password,
                    },
                }),
            }).then(async (data) => {
                // Console log our return data
                const jobSeeker = await data.json();
                const { id, email, name } = jobSeeker.data.jobSeeker;

                sessionStorage.setItem("id", id);
                sessionStorage.setItem("email", email);
                sessionStorage.setItem("name", name);
                sessionStorage.setItem("role", role);

                history.replace(from);
            });
        } else if (role === "employer") {
            fetch("http://localhost:5000/graphql", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    query: `query($email: String!, $password: String!)
                    {
                        employer(
                            email: $email
                            password: $password
                        ) {
                            id
                            name
                            email
                        }
                    }
                `,
                    variables: {
                        email,
                        password,
                    },
                }),
            }).then(async (data) => {
                // Console log our return data
                const employer = await data.json();
                const { id, email, name } = employer.data.employer;

                sessionStorage.setItem("id", id);
                sessionStorage.setItem("email", email);
                sessionStorage.setItem("name", name);
                sessionStorage.setItem("role", role);

                history.replace(from);
            });
        }
    };

    return (
        <div className="login-page">
            <Container className="login-container">
                <div className="login-container-div">
                    <Row>
                        <Col md={7}>
                            <h1 className="login-heading">
                                <span className="underlineText">
                                    Welcome Back .
                                </span>
                                <br />
                                <span className="underlineText">You are </span>
                                <span className="underlineText">
                                    closer than
                                </span>
                                <span className="underlineText">
                                    {" "}
                                    you think
                                </span>
                            </h1>
                        </Col>
                        <Col className="form-column" md={5}>
                            <h4 className="underlineHeading">Sign In</h4>
                            <FontAwesomeIcon icon={faTimes} size="1x" />
                            <br />
                            <br />
                            {err && <span className="error">{err}</span>}
                            <Form
                                onSubmit={handleSubmit(onSubmit)}
                                className="login-form"
                            >
                                <Form.Group>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="e.g. johndoe@gmail.com"
                                        {...register("email", {
                                            required: true,
                                            pattern:
                                                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                        })}
                                    />
                                    {errors.email && (
                                        <span className="error">
                                            This field is required
                                        </span>
                                    )}
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Your Password"
                                        {...register("password", {
                                            required: true,
                                            // pattern:
                                            //     /^(?=.\d)(?=.[a-z])(?=.*[A-Z]).{6,20}$/,
                                        })}
                                    />
                                    {errors.password && (
                                        <span className="error">
                                            This field is required
                                        </span>
                                    )}
                                </Form.Group>
                                <br />

                                <Form.Select
                                    aria-label="Your Role"
                                    {...register("role", {
                                        required: true,
                                    })}
                                >
                                    <option>Select Your Role</option>
                                    <option value="jobSeeker">
                                        I am a job seeker
                                    </option>
                                    <option value="employer">
                                        I am an employer
                                    </option>
                                </Form.Select>
                                <br />
                                <Button type="submit" className="submit-button">
                                    Login
                                </Button>
                                <div className="accountDiv">
                                    <p>
                                        Don't have an account?
                                        <Link
                                            className="react-link"
                                            to="/register"
                                        >
                                            Sign Up
                                        </Link>
                                    </p>
                                </div>
                            </Form>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Login;
