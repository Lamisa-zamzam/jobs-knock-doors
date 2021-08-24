// graphql

import { gql } from "apollo-boost";

const getEmployeesQuery = gql`
    {
        jobSeekers {
            id
            name
            title
            image
            location
            email
        }
    }
`;

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

const addJobMutation = gql`
    mutation (
        $title: String!
        $company: String!
        $location: String!
        $remoteOrNot: Boolean!
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
            remote: $remoteOrNot
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

export {
    getEmployeesQuery,
    getJobsQuery,
    addJobMutation,
    addEmployerMutation,
    getJobDetailsQuery,
    addJobSeekerMutation,
};
