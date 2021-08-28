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
    // Get the job from data sent from server
    const { jobs } = data;

    return (
        <Container>
            <h1 className="mt-5 mb-5 text-secondary">Your Jobs</h1>
            <Row xs={1} md={2} className="g-4">
                {!data.loading && jobs && jobs[0] ? (
                    jobs
                        ?.slice(0, 6)
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
