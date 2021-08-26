// React Bootstrap
import { Col, Container, Row } from "react-bootstrap";
// StyleSheet
import "./Header.css";

const Header = () => {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <div className="welcomeDiv imageDiv">
                        <h6>Welcome to the world</h6>
                        <h1 className="heading">WHERE JOBS FIND YOU</h1>
                        <p>
                            Dream jobs waiting at the door! <br /> Choose from
                            thousand of categories and companies
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Header;
