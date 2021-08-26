import { Container, Row } from "react-bootstrap";
import Search from "../../Shared/Search/Search";
import "./SearchEmployees.css";
import Employee from "./Employee/Employee";
import { useEffect, useState } from "react";

const SearchEmployees = () => {
    const [employeeName, setEmployeeName] = useState("");
    const [employeeTitle, setEmployeeTitle] = useState("");
    const [data, setData] = useState([]);

    const role = sessionStorage.getItem("role");

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
            const jobData = await data.json();
            console.log(jobData);
            setData(jobData.data.employeeSearch);
        });
    }, [employeeName, employeeTitle]);

    console.log(data);

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
