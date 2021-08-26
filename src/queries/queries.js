// graphql
import { gql } from "apollo-boost";

// Queries

// Get all the jobs
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

// Get a job detail
const getJobDetailsQuery = gql`
    query ($id: ID!) {
        job(id: $id) {
            title
            company
            location
            remote
            jobType
            jobDescription
            experience
            seniorityLevel
            salary
            employer {
                name
                email
            }
            aboutCompany
            responsibilities
            requirements
            facilities
        }
    }
`;

// Get a Job Seeker by Id
const getJobSeekerByIdQuery = gql`
    query ($id: String!) {
        jobSeekerById(id: $id) {
            id
            name
            title
            email
            phone
            image
            location
            summary
            experience {
                title
                company
                location
                jobType
                date
                description
            }
            skills
        }
    }
`;

// Mutations

// Add a job
const addJobMutation = gql`
    mutation (
        $title: String!
        $company: String!
        $location: String!
        $remote: String!
        $seniorityLevel: String!
        $jobType: String!
        $facilities: String
        $requirements: String!
        $responsibilities: String
        $jobDescription: String!
        $aboutCompany: String!
        $experience: String!
        $employerId: String!
        $salary: String!
    ) {
        addJob(
            title: $title
            company: $company
            location: $location
            remote: $remote
            jobType: $jobType
            experience: $experience
            seniorityLevel: $seniorityLevel
            aboutCompany: $aboutCompany
            jobDescription: $jobDescription
            responsibilities: $responsibilities
            requirements: $requirements
            salary: $salary
            facilities: $facilities
            employerId: $employerId
        ) {
            title
            jobType
        }
    }
`;

// Add an Employer (register)
const addEmployerMutation = gql`
    mutation (
        $name: String!
        $email: String!
        $password: String!
        $phone: String!
    ) {
        addEmployer(
            name: $name
            email: $email
            password: $password
            phone: $phone
        ) {
            id
            name
            email
        }
    }
`;

// Add a job seeker (register)
const addJobSeekerMutation = gql`
    mutation (
        $name: String!
        $email: String!
        $password: String!
        $phone: String!
    ) {
        addJobSeeker(
            name: $name
            email: $email
            password: $password
            phone: $phone
        ) {
            id
            name
            email
        }
    }
`;

// Update the profile of a Job Seeker
const updateJobSeekerMutation = gql`
    mutation (
        $id: String!
        $title: String!
        $phone: String!
        $image: String!
        $location: String!
        $skills: String!
        $summary: String!
    ) {
        updateJobSeeker(
            id: $id
            title: $title
            phone: $phone
            image: $image
            location: $location
            skills: $skills
            summary: $summary
        ) {
            name
            location
        }
    }
`;

// Export all the queries and mutations
export {
    getJobsQuery,
    addJobMutation,
    addEmployerMutation,
    getJobDetailsQuery,
    addJobSeekerMutation,
    getJobSeekerByIdQuery,
    updateJobSeekerMutation,
};
