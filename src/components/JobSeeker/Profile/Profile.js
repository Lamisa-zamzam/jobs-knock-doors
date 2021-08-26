import { Container } from "react-bootstrap";
import * as compose from "lodash.flowright";
import { graphql } from "react-apollo";

import ProfilePicture from "../../../images/knock.jpg";

import "./Profile.css";
import {
    getJobSeekerByIdQuery,
    updateJobSeekerMutation,
} from "../../../queries/queries";
import { useEffect, useState } from "react";
import ProfileNormal from "./ProfileNormal";
import ProfileEditing from "./ProfileEditing";

const Profile = ({ data }) => {
    const [editing, setEditing] = useState(false);
    const [loading, setLoading] = useState(data.loading);
    const { jobSeekerById } = data;

    useEffect(() => {
        if (!data.loading) {
            setLoading(false);
        }
    }, [data.loading]);

    return (
        <Container>
            {!loading ? (
                !editing ? (
                    <ProfileNormal
                        jobSeekerById={jobSeekerById}
                        ProfilePicture={ProfilePicture}
                        editing={editing}
                        setEditing={setEditing}
                    />
                ) : (
                    <ProfileEditing
                        editing={editing}
                        setEditing={setEditing}
                        jobSeekerById={jobSeekerById}
                        ProfilePicture={ProfilePicture}
                    />
                )
            ) : (
                <p className="text-muted">Loading...</p>
            )}
        </Container>
    );
};

export default graphql(getJobSeekerByIdQuery, {
    options: (props) => {
        return {
            variables: {
                id: sessionStorage.getItem("id"),
            },
        };
    },
})(Profile);
