// React
import { useEffect, useState } from "react";
// React Bootstrap
import { Container, Row } from "react-bootstrap";
// StyleSheet
import "./SearchJobSeekers.css";
// Components
import Search from "../../Shared/Search/Search";
import JobSeeker from "./JobSeeker/JobSeeker";

const SearchJobSeekers = () => {
    // Initial States
    // For Search
    const [jobSeekerName, setJobSeekerName] = useState("");
    const [jobSeekerTitle, setJobSeekerTitle] = useState("");
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
                query: `{
                    jobSeekers{
                      name
                      email
                    }
                  }
                `,
                // variables: {
                //     jobSeekerName: jobSeekerName,
                //     jobSeekerTitle: jobSeekerTitle,
                // },

                // query($jobSeekerName: String!, $jobSeekerTitle: String!)
                // {
                //     jobSeekerSearch (jobSeekerName: $jobSeekerName, jobSeekerTitle: $jobSeekerTitle){
                //         id
                //         image
                //         name
                //         title
                //         location
                //         email
                //     }
                // }
            }),
        }).then(async (data) => {
            console.log(data);
            // Convert data from JSON
            const jobData = await data.json();
            setData(jobData.data.jobSeekers);
        });
    }, [jobSeekerName, jobSeekerTitle]);

    return (
        <Container>
            {role === "employer" ? (
                <>
                    <div className="d-flex justify-contents-center text-success mx-2 my-4">
                        <h3>Search For job Seekers</h3>
                    </div>
                    <Search
                        labels={["JobSeeker Name", "Title"]}
                        placeholders={[
                            "e.g. John Doe",
                            "e.g. Full Stack Developer",
                        ]}
                        states={[jobSeekerName, jobSeekerTitle]}
                        changeStateFuncs={[setJobSeekerName, setJobSeekerTitle]}
                    />
                    <Row>
                        {data && data[0] ? (
                            data.map((jobSeeker) => (
                                <JobSeeker
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
                    You need to be an employer to see the list of Job Seekers
                    and search them
                </p>
            )}
        </Container>
    );
};

export default SearchJobSeekers;
