import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import MyNavbar from "./components/Shared/MyNavbar/MyNavbar";
import Home from "./components/Home/Home";
import Login from "./components/Authentication/Login/Login";
import Register from "./components/Authentication/Register/Register";
import Profile from "./components/JobSeeker/Profile/Profile";
import SearchJobs from "./components/JobSeeker/SearchJobs/SearchJobs";
import PostAJob from "./components/Employer/PostAJob/PostAJob";
import SearchEmployees from "./components/Employer/SearchEmployees/SearchEmployees";
import JobDetails from "./components/JobSeeker/JobDetails/JobDetails";

function App() {
    return (
        <Router>
            <MyNavbar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/home">
                    <Home />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/profile/:id">
                    <Profile />
                </Route>
                <Route path="/search-jobs">
                    <SearchJobs />
                </Route>
                <Route path="/post-a-job">
                    <PostAJob />
                </Route>
                <Route path="/search-employees">
                    <SearchEmployees />
                </Route>
                <Route path="/job/:id">
                    <JobDetails />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
