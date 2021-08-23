import { Container, Row, Button } from "react-bootstrap";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";
import Job from "./Job/Job";

const getJobsQuery = gql`
    {
        jobs {
            id
            title
            company
            jobType
            remote
            experience
        }
    }
`;

const Jobs = (props) => {
    const displayJobs = () => {
        const data = props.data;

        if (data.loading) {
            return <div>Loading...</div>;
        } else {
            return data.jobs.slice(0, 3).map((job) => <Job key={job.id} job={job} />);
        }
    };

    return (
        <Container>
            <br />
            <br />
            <h1 className="mt-5 text-secondary">Your Jobs</h1>
            <br />
            <Row xs={1} md={2} className="g-4">
                {displayJobs()}
            </Row>
            <br />
            <div className="d-flex justify-content-end mb-5">
                <Button className="btn btn-success">See More {">>"}</Button>
            </div>
        </Container>
    );
};

export default graphql(getJobsQuery)(Jobs);
