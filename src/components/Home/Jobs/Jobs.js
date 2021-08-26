// React
import { useEffect, useState } from "react";
// React Bootstrap
import { Container, Row, Button } from "react-bootstrap";
// React Router DOM
import { Link } from "react-router-dom";
// Components
import Job from "./Job/Job";

// GraphQL for sending and fetching data from GraphQL server
import { graphql } from "react-apollo";
// GraphQL query
import { getJobsQuery } from "../../../queries/queries";

const Jobs = ({ data }) => {
    // Initial States
    // If data from GraphQL server is still loading
    const [loading, setLoading] = useState(data.loading);

    // Get the job from data sent from server
    const { jobs } = data;

    // If data is loaded, set loading state to false
    useEffect(() => {
        if (!data.loading) {
            setLoading(false);
        }
    }, [data.loading]);

    return (
        <Container>
            <h1 className="mt-5 mb-5 text-secondary">Your Jobs</h1>
            <Row xs={1} md={2} className="g-4">
                {!loading ? (
                    jobs
                        .slice(0, 6)
                        .map((job) => <Job key={job.id} job={job} />)
                ) : (
                    <p className="text-muted">Loading...</p>
                )}
            </Row>
            <div className="d-flex justify-content-end mb-5">
                <Link to="/search-jobs">
                    <Button className="btn btn-success">See More {">>"}</Button>
                </Link>
            </div>
        </Container>
    );
};

export default graphql(getJobsQuery)(Jobs);
