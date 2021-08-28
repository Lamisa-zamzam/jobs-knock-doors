// React
import { useEffect, useState } from "react";
// React Bootstrap
import { Container } from "react-bootstrap";
// React Router
import { useParams } from "react-router-dom";
// StyleSheet
import "./Profile.css";

// Components
import ProfileNormal from "./Profiles/ProfileNormal";
import ProfileEditing from "./Profiles/ProfileEditing";

const Profile = () => {
    // Initial States
    const [data, setData] = useState([]);
    // If the user is editing the profile
    const [editing, setEditing] = useState(false);

    // Get id from parameters
    const { id } = useParams();

    // Get job details depending on its id in the param
    useEffect(() => {
        fetch("http://localhost:5000/graphql", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                query: `query ($id: String!) {
                    jobSeekerById(id: $id) {
                        id
                        name
                        title
                        email
                        phone
                        image
                        location
                        summary
                        experience {
                            title
                            company
                            location
                            jobType
                            date
                            description
                        }
                        skills
                    }
                }
                `,
                variables: {
                    id,
                },
            }),
        }).then(async (data) => {
            // Convert data from JSON
            const jobSeeker = await data.json();
            console.log(jobSeeker);
            // Set State
            setData(jobSeeker.data.jobSeekerById);
        });
    }, [id]);

    return (
        <Container>
            {/* If data is not loading show components */}
            {data ? (
                // Show different components based on editing state
                !editing ? (
                    <ProfileNormal
                        jobSeekerById={data}
                        editing={editing}
                        setEditing={setEditing}
                    />
                ) : sessionStorage.getItem("role") === "jobSeeker" ? (
                    <ProfileEditing jobSeekerById={data} />
                ) : (
                    <ProfileNormal
                        jobSeekerById={data}
                        editing={editing}
                        setEditing={setEditing}
                    />
                )
            ) : (
                <p className="text-muted">Loading...</p>
            )}
        </Container>
    );
};

export default Profile;
