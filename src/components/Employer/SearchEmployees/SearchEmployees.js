import { Container, Row } from "react-bootstrap";
import Search from "../../Shared/Search/Search";

import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

import "./SearchEmployees.css";
import Employee from "./Employee/Employee";

const getEmployeesQuery = gql`
    {
        jobSeekers {
            id
            name
            title
            image
            location
            email
        }
    }
`;

const SearchEmployees = ({ data }) => {
    const { jobSeekers, loading } = data;
    const showEmployees = () =>
        loading ? (
            <div>Loading...</div>
        ) : (
            jobSeekers.map((jobSeeker) => <Employee jobSeeker={jobSeeker} />)
        );
    return (
        <Container>
            <div className="d-flex justify-contents-center text-success mx-2 my-4">
                <h3>Search For Employees</h3>
            </div>
            <Search />
            <Row>{showEmployees()}</Row>
            <br />
        </Container>
    );
};

export default graphql(getEmployeesQuery)(SearchEmployees);
