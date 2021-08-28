// React
import { useState } from "react";
// React Bootstrap
import { Button, Form } from "react-bootstrap";
// React Hook Form
import { useForm } from "react-hook-form";
// Axios
import axios from "axios";
// GraphQL for sending and fetching data from GraphQL server
import { graphql } from "react-apollo";
// GraphQL Query
import { updateJobSeekerMutation } from "../../../../queries/queries";

const ProfileEditing = ({ jobSeekerById, mutate }) => {
    // Initial States
    const [error, setError] = useState(null);
    const [imageURL, setImageURL] = useState(null);
    const [settingImage, setSettingImage] = useState(null);

    // React Router Form Vars
    const { register, handleSubmit } = useForm();

    // Handle imgbb image upload
    const handleImageUpload = (event) => {
        setSettingImage(true);
        const imageData = new FormData();
        imageData.set("key", "b238360b7dd6273493645ed46cb79ec6");
        if (event.target.files[0]) {
            imageData.append("image", event.target.files[0]);
            axios
                .post("https://api.imgbb.com/1/upload", imageData)
                .then((res) => {
                    setImageURL(res.data.data.display_url);
                })
                .catch((err) => {
                    setError(err.message);
                });
        }
    };

    // Handle Form Submit
    const onSubmit = (data) => {
        // De-structure form data
        const { title, phone, location, summary, skills } = data;

        // Send mutations in GraphQL server
        mutate({
            variables: {
                id: sessionStorage.getItem("id"),
                image: imageURL ? imageURL : jobSeekerById.image,
                title: title ? title : jobSeekerById.title,
                phone: phone ? phone : jobSeekerById.phone,
                location: location ? location : jobSeekerById.phone,
                summary: summary ? summary : jobSeekerById.summary,
                skills: skills ? skills : jobSeekerById.skills.toString(),
            },
        });

        // Success on updating Job Seeker profile
        alert("Profile updated successfully!!");
        window.location.reload();
    };

    return (
        <>
            <h2 className="text-success text-center mt-4">Edit Your Profile</h2>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mt-5 mb-3">
                    <Form.Label>Your Title</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="e.g. Full Stack Engineer"
                        {...register("title")}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Your Phone Number"
                        {...register("phone")}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Location</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="e.g. Rosario, Argentina"
                        {...register("location")}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Summary</Form.Label>
                    <Form.Control
                        placeholder="I am a..."
                        as="textarea"
                        rows={3}
                        {...register("summary")}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Skills</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="JS, React, Node"
                        {...register("skills")}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Upload Profile Image</Form.Label>
                    <br />
                    <Form.Control
                        type="file"
                        placeholder="Upload Image"
                        onChange={handleImageUpload}
                    />
                </Form.Group>

                <p>{error}</p>

                {settingImage ? (
                    imageURL ? (
                        <Button
                            variant="success"
                            type="submit"
                            className="w-100 mb-5"
                        >
                            Save
                        </Button>
                    ) : (
                        <p>
                            You will be able to submit this form as soon as your
                            image is ready to be uploaded.
                        </p>
                    )
                ) : (
                    <Button
                        variant="success"
                        type="submit"
                        className="w-100 mb-5"
                    >
                        Save
                    </Button>
                )}
            </Form>
        </>
    );
};

export default graphql(updateJobSeekerMutation)(ProfileEditing);
