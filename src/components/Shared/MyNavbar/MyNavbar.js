import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./MyNavbar.css";

import knock from "../../../images/knock.jpg";
import { useEffect, useState } from "react";

const MyNavbar = () => {
    // Initial States
    const [id, setId] = useState(null);
    const [role, setRole] = useState(null);

    // Set Id and role
    useEffect(() => {
        setId(sessionStorage.getItem("id"));
        setRole(sessionStorage.getItem("role"));
    }, []);

    return (
        <Navbar variant="dark" bg="dark" expand="lg">
            <Navbar.Brand as={Link} to="/home" className="brandName">
                <img src={knock} alt="Jobs Knock Doors" className="navLogo" />
                <h5 className="siteName">Jobs Knock Doors</h5>
                <p className="brandSlogan">Paradise of Jobs</p>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/home" className="navLink">
                        Home
                    </Nav.Link>
                    <Nav.Link as={Link} to="/search-jobs" className="navLink">
                        Jobs
                    </Nav.Link>
                    {id && role === "jobSeeker" && (
                        <Nav.Link
                            as={Link}
                            to={`/profile/${id}`}
                            className="navLink"
                        >
                            Profile
                        </Nav.Link>
                    )}
                    {!id && (
                        <>
                            <Nav.Link as={Link} to="/login" className="navLink">
                                Login
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                to="/register"
                                className="navLink"
                            >
                                Register
                            </Nav.Link>
                        </>
                    )}
                    {role === "employer" && (
                        <Nav.Link
                            as={Link}
                            to="/search-jobSeekers"
                            className="navLink"
                        >
                            Job Seekers
                        </Nav.Link>
                    )}
                    {role === "employer" && (
                        <Nav.Link
                            as={Link}
                            to="/post-a-job"
                            className="navLink"
                        >
                            Post A Job
                        </Nav.Link>
                    )}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default MyNavbar;
