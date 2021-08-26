// React
import { useEffect, useState } from "react";
// React Bootstrap
import { Container } from "react-bootstrap";
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
    // Initial States
    // If the user is editing the profile
    const [editing, setEditing] = useState(false);
    // If data from GraphQL server is still loading
    const [loading, setLoading] = useState(data.loading);

    // Get the Job Seeker logged in from data
    const { jobSeekerById } = data;

    // If data is loaded, set loading state to false
    useEffect(() => {
        if (!data.loading) {
            setLoading(false);
        }
    }, [data.loading]);

    return (
        <Container>
            {/* If data is not loading show components */}
            {!loading ? (
                // Show different components based on editing state
                !editing ? (
                    <ProfileNormal
                        jobSeekerById={jobSeekerById}
                        editing={editing}
                        setEditing={setEditing}
                    />
                ) : (
                    <ProfileEditing
                        editing={editing}
                        setEditing={setEditing}
                        jobSeekerById={jobSeekerById}
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
                id: sessionStorage.getItem("id"),
            },
        };
    },
})(Profile);
