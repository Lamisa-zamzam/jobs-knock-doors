// React
import { useEffect, useState } from "react";
// React Bootstrap
import { Container, Row } from "react-bootstrap";

// Components
import Search from "../../Shared/Search/Search";
import JobSeeker from "./JobSeeker/JobSeeker";

// StyleSheet
import "./SearchJobSeekers.css";

const SearchJobs = () => {
    // Initial States
    const [employeeName, setEmployeeName] = useState("");
    const [data, setData] = useState([]);

    // Get job seekers depending on search title and location
    useEffect(() => {
        fetch("https://aqueous-meadow-34034.herokuapp.com/graphql", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                query: `query($employeeName: String!)
               {
                    employeeSearch (employeeName: $employeeName){
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
                },
            }),
        }).then(async (data) => {
            // Convert data from JSON
            const employeeData = await data.json();
            // Set State
            setData(employeeData.data.employeeSearch);
        });
    }, [employeeName]);

    return (
        <Container>
            <div className="d-flex justify-contents-center text-success mx-2 my-4">
                <h3>Search For Jobs</h3>
            </div>
            <Search
                labels={["Employee Name"]}
                placeholders={["e.g. John Doe"]}
                states={[employeeName]}
                changeStateFuncs={[setEmployeeName]}
            />
            <Row>
                {data && data[0] ? (
                    data.map((jobSeeker) => (
                        <JobSeeker key={jobSeeker.id} jobSeeker={jobSeeker} />
                    ))
                ) : (
                    <p className="text-muted">No job found</p>
                )}
            </Row>
        </Container>
    );
};

export default SearchJobs;
