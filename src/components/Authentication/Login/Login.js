// React Bootstrap
import { Button, Col, Container, Form, Row } from "react-bootstrap";
// React Hook form
import { useForm } from "react-hook-form";
// Router
import { Link, useHistory, useLocation } from "react-router-dom";
// StyleSheet
import "../auth.css";

const Login = () => {
    // Routing vars
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/home" } };

    // If the user is already logged in, doesn't make sense to show him/her the login page again
    if (sessionStorage.getItem("id")) {
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
        // De-structure data
        const { email, password, role } = data;
        // Send request to server for logging in depending on the role
        if (role === "jobSeeker") {
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
            })
                .then(async (data) => {
                    // Convert data from JSON
                    const jobSeeker = await data.json();
                    if (jobSeeker.data.jobSeeker) {
                        const { id, email, name } = jobSeeker.data.jobSeeker;

                        // Set variables in the sessionStorage
                        sessionStorage.setItem("id", id);
                        sessionStorage.setItem("email", email);
                        sessionStorage.setItem("name", name);
                        sessionStorage.setItem("role", role);

                        // Redirect user
                        history.replace(from);
                    } else {
                        alert("Please register");
                        history.push("/register");
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        } else if (role === "employer") {
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
                if (employer.data.employer) {
                    const { id, email, name } = employer.data.employer;

                    // Set variables in the sessionStorage
                    sessionStorage.setItem("id", id);
                    sessionStorage.setItem("email", email);
                    sessionStorage.setItem("name", name);
                    sessionStorage.setItem("role", role);

                    // Redirect user
                    history.replace(from);
                } else {
                    alert("Please register");
                    history.push("/register");
                }
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
                            <h4 className="underlineHeading mb-2 mt-4">
                                Sign In
                            </h4>
                            <Form
                                onSubmit={handleSubmit(onSubmit)}
                                className="login-form"
                            >
                                <Form.Group className="mb-4">
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
                                            This field is required and must be
                                            valid
                                        </span>
                                    )}
                                </Form.Group>

                                <Form.Group
                                    className="mb-4"
                                    controlId="formBasicPassword"
                                >
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
                                    Login
                                </Button>
                                <div className="accountDiv">
                                    <p>
                                        Don't have an account?
                                        <Link
                                            className="react-link sign-up-link"
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
