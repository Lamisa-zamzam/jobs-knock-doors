// React
import { useState } from "react";
// React Bootstrap
import { Container } from "react-bootstrap";
// React Router
import { useParams } from "react-router-dom";
// StyleSheet
import "./Profile.css";

// Components
import ProfileNormal from "./Profiles/ProfileNormal";
import ProfileEditing from "./Profiles/ProfileEditing";

// GraphQL for sending and fetching data from GraphQL server
import { graphql } from "react-apollo";
// GraphQL query
import { getJobSeekerByIdQuery } from "../../../queries/queries";

const Profile = ({ data }) => {
    // Get id from parameters
    const { id } = useParams();
    sessionStorage.setItem("employerId", id);
    // Initial States
    // If the user is editing the profile
    const [editing, setEditing] = useState(false);

    // Get the Job Seeker logged in from data
    const { jobSeekerById } = data;

    return (
        <Container>
            {/* If data is not loading show components */}
            {!data.loading ? (
                // Show different components based on editing state
                !editing ? (
                    <ProfileNormal
                        jobSeekerById={jobSeekerById}
                        editing={editing}
                        setEditing={setEditing}
                    />
                ) : sessionStorage.getItem("role") === "jobSeeker" ? (
                    <ProfileEditing jobSeekerById={jobSeekerById} />
                ) : (
                    <ProfileNormal
                        jobSeekerById={jobSeekerById}
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

export default graphql(getJobSeekerByIdQuery, {
    options: () => {
        return {
            variables: {
                id: sessionStorage.getItem("employerId"),
            },
        };
    },
})(Profile);
