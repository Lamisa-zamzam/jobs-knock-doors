import { Container, Row } from "react-bootstrap";
import Search from "../../Shared/Search/Search";
import { graphql } from "react-apollo";

import "./SearchJobs.css";

import { getJobsQuery } from "../../../queries/queries";
import Job from "../../Home/Jobs/Job/Job";

const SearchJobs = (props) => {
    const displayJobs = () => {
        const data = props.data;

        if (data.loading) {
            return <div>Loading...</div>;
        } else {
            return data.jobs
                .slice(0, 3)
                .map((job) => <Job key={job.id} job={job} />);
        }
    };

    return (
        <Container>
            <div className="d-flex justify-contents-center text-success mx-2 my-4">
                <h3>Search For Jobs</h3>
            </div>
            <Search />
            <Row>{displayJobs()}</Row>
        </Container>
    );
};

export default graphql(getJobsQuery)(SearchJobs);
