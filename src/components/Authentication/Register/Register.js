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

// GraphQL for sending and fetching data from GraphQL server
import { graphql } from "react-apollo";
// Compose for having multiple queries/mutations in one component
import * as compose from "lodash.flowright";
// Mutations
import {
    addEmployerMutation,
    addJobSeekerMutation,
} from "../../../queries/queries";

const Register = (props) => {
    // Initial States
    // Error state
    const [err, setErr] = useState("");
    // Password variables, in case there is a mismatch
    const [confirmPassword, setConfirmPassword] = useState("");
    const [pass, setPassword] = useState("");

    // React Hook form variables
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // Routing Variables
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/home" } };

    // If the user is already logged in, doesn't make sense to show him/her the register page again
    if (sessionStorage.getItem("id")) {
        history.replace(from);
    }

    // Handle form submit
    const onSubmit = async (data) => {
        // If passwords mismatch
        if (pass !== confirmPassword) {
            // set password fields empty
            setPassword("");
            setConfirmPassword("");
            // Empty the error after 5 seconds
            setTimeout(() => {
                setErr("");
            }, 5000);
            // Set error
            return setErr("Passwords do not match");
        }

        // De-structure form data
        const { username, email, password, phone, role } = data;

        // Send request to server for signing up depending on the role
        if (role === "jobSeeker") {
            await props.addJobSeekerMutation({
                variables: {
                    name: username,
                    email,
                    password,
                    phone,
                },
            });

            // Fetch data of the user for saving in the session storage
            fetch("https://aqueous-meadow-34034.herokuapp.com/graphql", {
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
                console.log(data);
                // Convert data from JSON
                const jobSeeker = await data.json();
                const { id, email, name } = jobSeeker.data.jobSeeker;

                // Set variables in the sessionStorage
                sessionStorage.setItem("id", id);
                sessionStorage.setItem("email", email);
                sessionStorage.setItem("name", name);
                sessionStorage.setItem("role", role);
            });
        } else if (role === "employer") {
            props.addEmployerMutation({
                variables: {
                    name: username,
                    email,
                    password,
                    phone,
                },
            });

            // Fetch data of the user for saving in the session storage
            fetch("https://aqueous-meadow-34034.herokuapp.com/graphql", {
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
                // Convert data from JSON
                const employer = await data.json();
                const { id, email, name } = employer.data.employer;

                // Set variables in the sessionStorage
                sessionStorage.setItem("id", id);
                sessionStorage.setItem("email", email);
                sessionStorage.setItem("name", name);
                sessionStorage.setItem("role", role);
            });
        }

        // Redirect user
        history.replace(from);
    };

    return (
        <div className="login-page">
            <Container className="login-container">
                <div className="login-container-div">
                    <Row>
                        <Col md={7}>
                            <h1 className="login-heading">
                                <span className="underlineText">
                                    It's High Time
                                </span>
                                <br />
                                <span className="underlineText">You </span>
                                <span className="underlineText">Got </span>
                                <span className="underlineText">Started</span>
                            </h1>
                        </Col>
                        <Col className="form-column" md={5}>
                            <h4 className="underlineHeading mb-2 mt-4">
                                Sign Up
                            </h4>
                            {err && <span className="error">{err}</span>}
                            <Form
                                onSubmit={handleSubmit(onSubmit)}
                                className="login-form"
                            >
                                <Form.Group>
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control
                                        {...register("username", {
                                            required: true,
                                        })}
                                        type="text"
                                        placeholder="Enter Your Name"
                                    />
                                    {errors.username && (
                                        <span className="error">
                                            This field is required
                                        </span>
                                    )}
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        {...register("email", {
                                            required: true,
                                            pattern:
                                                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                        })}
                                        type="email"
                                        placeholder="e.g. johndoe@gmail.com"
                                    />
                                    {errors.email && (
                                        <span className="error">
                                            This field is required and must be
                                            valid
                                        </span>
                                    )}
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        {...register("password", {
                                            required: true,
                                        })}
                                        type="password"
                                        placeholder="Your Password"
                                        value={pass}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                    />
                                    {errors.password && (
                                        <span className="error">
                                            This field is required, must contain
                                            at least 6 characters, 1 uppercase
                                            and 1 lowercase letters
                                        </span>
                                    )}
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control
                                        {...register("confirmPass", {
                                            required: true,
                                            // pattern:
                                            //     /^(?=.*\d)(?=(.*\W){2})(?=.*[a-zA-Z])(?!.*\s).{1,15}$/,
                                        })}
                                        type="password"
                                        placeholder="Your Password"
                                        value={confirmPassword}
                                        onChange={(e) =>
                                            setConfirmPassword(e.target.value)
                                        }
                                    />
                                    {errors.confirmPass && (
                                        <span className="error">
                                            This field is required
                                        </span>
                                    )}
                                </Form.Group>

                                <Form.Group className="mb-4">
                                    <Form.Label>
                                        Phone with country code
                                    </Form.Label>
                                    <Form.Control
                                        {...register("phone", {
                                            required: true,
                                        })}
                                        type="text"
                                        placeholder="Enter Your Phone Number with Country Code"
                                    />
                                    {errors.phone && (
                                        <span className="error">
                                            This field is required
                                        </span>
                                    )}
                                </Form.Group>

                                <Form.Select
                                    className="mb-4"
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

                                <Button type="submit" className="submit-button">
                                    Register
                                </Button>
                                <div className="accountDiv">
                                    <p>
                                        Already have an account?
                                        <Link
                                            className="react-link"
                                            to="/login"
                                        >
                                            Login
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

export default compose(
    graphql(addJobSeekerMutation, { name: "addJobSeekerMutation" }),
    graphql(addEmployerMutation, { name: "addEmployerMutation" })
)(Register);
