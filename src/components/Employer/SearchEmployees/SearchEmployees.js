// React
import { useEffect, useState } from "react";
// React Bootstrap
import { Container, Row } from "react-bootstrap";
// StyleSheet
import "./SearchEmployees.css";
// Components
import Search from "../../Shared/Search/Search";
import Employee from "./Employee/Employee";

const SearchEmployees = () => {
    // Initial States
    // For Search
    const [employeeName, setEmployeeName] = useState("");
    const [employeeTitle, setEmployeeTitle] = useState("");
    // For data from the server
    const [data, setData] = useState([]);

    // Role of the user
    const role = sessionStorage.getItem("role");

    // Get jobs depending on search name and title
    useEffect(() => {
        fetch("http://localhost:5000/graphql", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                query: `query($employeeName: String!, $employeeTitle: String!)
                {
                    employeeSearch (employeeName: $employeeName, employeeTitle: $employeeTitle){
                        id
                        image
                        name
                        title
                        location
                        email
                    }
                }
                `,
                variables: {
                    employeeName,
                    employeeTitle,
                },
            }),
        }).then(async (data) => {
            // Convert data from JSON
            const jobData = await data.json();
            setData(jobData.data.employeeSearch);
        });
    }, [employeeName, employeeTitle]);

    return (
        <Container>
            {role === "employer" ? (
                <>
                    <div className="d-flex justify-contents-center text-success mx-2 my-4">
                        <h3>Search For Employees</h3>
                    </div>
                    <Search
                        labels={["Employee Name", "Title"]}
                        placeholders={[
                            "e.g. John Doe",
                            "e.g. Full Stack Developer",
                        ]}
                        states={[employeeName, employeeTitle]}
                        changeStateFuncs={[setEmployeeName, setEmployeeTitle]}
                    />
                    <Row>
                        {data && data[0] ? (
                            data.map((jobSeeker) => (
                                <Employee
                                    key={jobSeeker.id}
                                    jobSeeker={jobSeeker}
                                />
                            ))
                        ) : (
                            <p className="text-muted">No job seeker found</p>
                        )}
                    </Row>
                </>
            ) : (
                <p className="text-muted m-5 fs-3">
                    You need to be an employer to see the list of employees and
                    search them
                </p>
            )}
        </Container>
    );
};

export default SearchEmployees;
