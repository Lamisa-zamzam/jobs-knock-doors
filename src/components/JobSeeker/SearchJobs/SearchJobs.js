// React
import { useEffect, useState } from "react";
// React Bootstrap
import { Container, Row } from "react-bootstrap";

// Components
import Search from "../../Shared/Search/Search";
import Job from "../../Home/Jobs/Job/Job";

const SearchJobs = () => {
    // Initial States
    const [jobTitle, setJobTitle] = useState("");
    const [location, setLocation] = useState("");
    const [data, setData] = useState([]);

    // Get jobs depending on search title and location
    useEffect(() => {
        fetch("http://localhost:5000/graphql", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                query: `query($jobTitle: String!, $location: String!)
                {
                    jobSearch (jobTitle: $jobTitle, location:$location){
                        id
                        title
                        company
                        location
                        jobType
                        remote
                        experience
                    }
                }
                `,
                variables: {
                    jobTitle,
                    location,
                },
            }),
        }).then(async (data) => {
            console.log(data);
            // Convert data from JSON
            const jobData = await data.json();
            // Set State
            setData(jobData.data.jobSearch);
        });
    }, [jobTitle, location]);

    return (
        <Container>
            <div className="d-flex justify-contents-center text-success mx-2 my-4">
                <h3>Search For Jobs</h3>
            </div>
            <Search
                labels={["Job Title", "Location"]}
                placeholders={["e.g. Full Stack Developer", "e.g. Remote"]}
                states={[jobTitle, location]}
                changeStateFuncs={[setJobTitle, setLocation]}
            />
            <Row>
                {data && data[0] ? (
                    data.map((job) => <Job key={job.id} job={job} />)
                ) : (
                    <p className="text-muted">No job found</p>
                )}
            </Row>
        </Container>
    );
};

export default SearchJobs;
