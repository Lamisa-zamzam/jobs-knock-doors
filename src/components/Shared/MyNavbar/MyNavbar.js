import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./MyNavbar.css";

import knock from "../../../images/knock.jpg";

const MyNavbar = () => {
    const id = "60799c3a92b36b4d686c1d80";
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
                    <Nav.Link as={Link} to="/jobs" className="navLink">
                        Jobs
                    </Nav.Link>
                    <Nav.Link
                        as={Link}
                        to={`/profile/${id}`}
                        className="navLink"
                    >
                        Profile
                    </Nav.Link>
                    <Nav.Link as={Link} to="/login" className="navLink">
                        Login
                    </Nav.Link>
                    <Nav.Link as={Link} to="/register" className="navLink">
                        Register
                    </Nav.Link>
                    <Nav.Link as={Link} to="/employees" className="navLink">
                        Employees
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default MyNavbar;
