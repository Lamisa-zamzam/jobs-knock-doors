import { Container, Row } from "react-bootstrap";
import Search from "../../Shared/Search/Search";

import "./SearchJobs.css";

import Job from "../../Home/Jobs/Job/Job";
import { useEffect, useState } from "react";

const SearchJobs = () => {
    const [jobTitle, setJobTitle] = useState("");
    const [location, setLocation] = useState("");
    const [data, setData] = useState([]);

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
            const jobData = await data.json();
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
                jobTitle={jobTitle}
                setJobTitle={setJobTitle}
                location={location}
                setLocation={setLocation}
            />
            <Row>
                {data ? (
                    data.map((job) => <Job key={job.id} job={job} />)
                ) : (
                    <p></p>
                )}
            </Row>
        </Container>
    );
};

export default SearchJobs;
