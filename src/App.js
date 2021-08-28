// React Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// StyleSheets
import "./App.css";

// Components
// Navbar
import MyNavbar from "./components/Shared/MyNavbar/MyNavbar";
// Home
import Home from "./components/Home/Home";
// Authentication
import Login from "./components/Authentication/Login/Login";
import Register from "./components/Authentication/Register/Register";
import PrivateRoute from "./components/Authentication/PrivateRoute/PrivateRoute";
// For Job Seekers
import Profile from "./components/JobSeeker/Profile/Profile";
import SearchJobs from "./components/JobSeeker/SearchJobs/SearchJobs";
import JobDetails from "./components/JobSeeker/JobDetails/JobDetails";
// For Employers
import PostAJob from "./components/Employer/PostAJob/PostAJob";
import SearchJobSeekers from "./components/Employer/SearchJobSeekers/SearchJobSeekers";

function App() {
    return (
        <Router>
            {/* Shared Component */}
            <MyNavbar />
            <Switch>
                {/* Home Routes */}
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/home">
                    <Home />
                </Route>
                {/* Authentication */}
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                {/* For Job Seekers */}
                <PrivateRoute path="/profile/:id">
                    <Profile />
                </PrivateRoute>
                <PrivateRoute path="/search-jobs">
                    <SearchJobs />
                </PrivateRoute>
                <PrivateRoute path="/job/:id">
                    <JobDetails />
                </PrivateRoute>
                {/* For Employers */}
                <PrivateRoute path="/post-a-job">
                    <PostAJob />
                </PrivateRoute>
                <PrivateRoute path="/search-jobSeekers">
                    <SearchJobSeekers />
                </PrivateRoute>
            </Switch>
        </Router>
    );
}

export default App;
