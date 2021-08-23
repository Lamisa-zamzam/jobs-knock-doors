import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
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
        const { adminEmail, adminName, id, male, password, adminPhone } = data;

        const admin = {
            email: adminEmail,
            adminName,
            id,
            gender: male ? "male" : "female",
            password,
            phone: adminPhone,
        };

        // Add admin to DB
        fetch("/api/admin/add", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(admin),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.success === true) {
                    alert("Your admin has been registered successfully!!");
                    window.location.reload();
                }
            });
    };

    return (
        <Container fluid>
            <br />
            <div
                className="mt-5 m-auto px-3 py-4"
                style={{ maxWidth: "900px" }}
            >
                <h2 className="text-center pt-4 text-success">Post A Job</h2>
                <div>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3">
                            <Form.Label>Job Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="e.g. Full Stack Engineer"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Company</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="e.g. Google"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Location</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="e.g. Rosario, Argentina"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Experience</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="e.g. 1-5 years"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Salary</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="e.g. $25 per hour"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="">
                            <Form.Label>About the company</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="">
                            <Form.Label>Job Description</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="">
                            <Form.Label>Responsibilities</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="">
                            <Form.Label>Requirements</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="">
                            <Form.Label>Facilities</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Form.Select aria-label="Job Type">
                            <option>Job Type</option>
                            <option value="1">Full-time</option>
                            <option value="2">Part-time</option>
                            <option value="3">Internship</option>
                            <option value="3">Contract</option>
                            <option value="3">Volunteer</option>
                        </Form.Select>
                        <br />
                        <Form.Select aria-label="Seniority Level">
                            <option>Seniority Level</option>
                            <option value="1">Senior</option>
                            <option value="2">Mid-senior</option>
                            <option value="3">Entry</option>
                        </Form.Select>
                        <br />
                        <Form.Select aria-label="Remote or Not">
                            <option>Remote or not</option>
                            <option value="1">Remote</option>
                            <option value="2">In-office</option>
                        </Form.Select>
                        <br />
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
            <br />
        </Container>
    );
};

export default MakeAdmin;
