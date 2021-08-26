// React
import { useState } from "react";
// React Bootstrap
import { Button, Container, Form } from "react-bootstrap";
// React Hook Form
import { useForm } from "react-hook-form";

// GraphQL for sending and fetching data from GraphQL server
import { graphql } from "react-apollo";
// Mutation
import { addJobMutation } from "../../../queries/queries";

const MakeAdmin = (props) => {
    // Initial States
    const [error, setError] = useState(null);

    // React Router Form Vars
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // Handle Form Submit
    const onSubmit = (data) => {
        const {
            remoteOrNot,
            seniorityLevel,
            jobType,
            facilities,
            requirements,
            responsibilities,
            jobDescription,
            aboutCompany,
            experience,
            location,
            company,
            title,
            salary,
        } = data;

        // If the job is remote
        const ifRemote = remoteOrNot === "Remote" ? "true" : "false";

        // Send request to add a job to DB
        props.mutate({
            variables: {
                employerId: sessionStorage.getItem("id"),
                remote: ifRemote,
                seniorityLevel,
                jobType,
                facilities,
                requirements,
                responsibilities,
                jobDescription,
                aboutCompany,
                experience,
                location,
                company,
                title,
                salary,
            },
        });

        // Success posting the job
        alert("Job Post Added Successfully!!");
        window.location.reload();
    };

    const role = sessionStorage.getItem("role");

    return (
        <Container fluid>
            {role === "employer" ? (
                <>
                    <div
                        className="mt-5 m-auto px-3 py-4"
                        style={{ maxWidth: "900px" }}
                    >
                        <h2 className="text-center pt-4 text-success">
                            Post A Job
                        </h2>
                        <div>
                            <Form onSubmit={handleSubmit(onSubmit)}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Job Title</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="e.g. Full Stack Engineer"
                                        {...register("title", {
                                            required: true,
                                        })}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Company</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="e.g. Google"
                                        {...register("company", {
                                            required: true,
                                        })}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Location</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="e.g. Rosario, Argentina"
                                        {...register("location", {
                                            required: true,
                                        })}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Experience</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="e.g. 1-5 years"
                                        {...register("experience", {
                                            required: true,
                                        })}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Salary</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="e.g. $25 per hour"
                                        {...register("salary")}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="">
                                    <Form.Label>About the company</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        {...register("aboutCompany", {
                                            required: true,
                                        })}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="">
                                    <Form.Label>Job Description</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        {...register("jobDescription", {
                                            required: true,
                                        })}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="">
                                    <Form.Label>Responsibilities</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        {...register("responsibilities")}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="">
                                    <Form.Label>Requirements</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        {...register("requirements", {
                                            required: true,
                                        })}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="">
                                    <Form.Label>Facilities</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        {...register("facilities")}
                                    />
                                </Form.Group>
                                <Form.Select
                                    className="mb-4"
                                    aria-label="Job Type"
                                    {...register("jobType", { required: true })}
                                >
                                    <option>Job Type</option>
                                    <option value="Full-time">Full-time</option>
                                    <option value="Part-time">Part-time</option>
                                    <option value="Internship">
                                        Internship
                                    </option>
                                    <option value="Contract">Contract</option>
                                    <option value="Volunteer">Volunteer</option>
                                </Form.Select>

                                <Form.Select
                                    className="mb-4"
                                    aria-label="Seniority Level"
                                    {...register("seniorityLevel", {
                                        required: true,
                                    })}
                                >
                                    <option>Seniority Level</option>
                                    <option value="Senior">Senior</option>
                                    <option value="Mid-senior">
                                        Mid-senior
                                    </option>
                                    <option value="Entry">Entry</option>
                                </Form.Select>
                                <Form.Select
                                    className="mb-4"
                                    aria-label="Remote or Not"
                                    {...register("remoteOrNot", {
                                        required: true,
                                    })}
                                >
                                    <option>Remote or not</option>
                                    <option value="Remote">Remote</option>
                                    <option value="In-office">In-office</option>
                                </Form.Select>
                                <p>{error}</p>
                                <Button
                                    variant="success"
                                    type="submit"
                                    className="w-100"
                                >
                                    Post
                                </Button>
                            </Form>
                        </div>
                    </div>
                </>
            ) : (
                <p className="text-muted m-5 fs-3">
                    You need to be an employer to post a job
                </p>
            )}
        </Container>
    );
};

export default graphql(addJobMutation)(MakeAdmin);
