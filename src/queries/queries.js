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

const addJobMutation = gql`{
    mutation {
        addJob(
            title: "Full Stack Developer",
            company: "Google",
            location: "Rosario, Argentina",
            remote: true,
            jobType: "Full Time",
            experience: "0-1 years",
            seniorityLevel: "Entry",
            aboutCompany: "Google is the biggest company in the world",
            jobDescription: "We are looking for Full-Stack Developers on the MEAN Stack (Mongo DB, Express.JS, Angular & Node.JS) to build highly interesting web based applications consisting of an Angular frontend (based on standard UX frameworks), connected with an API backend implemented on modern serverless technologies deployed on the AWS cloud environment.",
            responsibilities: "Design, code, test, document, implement, and maintain application programs and interfaces. Devise or modify procedures to solve complex problems considering computer equipment capacity and limitations, operating time, and form of desired results.Modify, install, and prepare technical documentation for system software applications Monitor systems capacity and performance, plan and execute disaster recovery procedures, and provide technical support. Identify, escalate and document production impact issues. Evaluate user requests for new or modified computer programs to determine feasibility, cost, time required and compatibility with current systems and capabilities.",
            requirements: "Technical Skills Required University degree or equivalent in Computer Science preferred Knowledge of the MEAN stack (Mongo DB, Express JS, Angular and Node JS) Proficiency in UX frameworks, such as Bootstrap & Google Material Experience building APIs Understanding of Cloud environments such as AWS Technical capability in setting up a cutting edge development environment incl. CI/CD with GitLab, AWS etc. ",
            salary: "$25 per hour",
            facilities: "This position is very flexible, helps your work-life balance and prepares you for the industry standard work and position! It is currently fully remote non-paid internship, however we offer a generous stock option package. Ziggurat is an equal opportunity employer!")
            {
                title
                jobType
            }
    }
`;

export { getEmployeesQuery, getJobsQuery, addJobMutation };
