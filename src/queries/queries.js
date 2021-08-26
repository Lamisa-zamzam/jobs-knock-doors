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

const getEmployeeQuery = gql`
    {
        jobSeeker(email: "johndoe@gmail.com", password: "test") {
            name
            title
        }
    }
`;

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

export {
    getEmployeesQuery,
    getJobsQuery,
    addJobMutation,
    addEmployerMutation,
    getJobDetailsQuery,
    addJobSeekerMutation,
    getEmployeeQuery,
    getJobSeekerByIdQuery,
};
