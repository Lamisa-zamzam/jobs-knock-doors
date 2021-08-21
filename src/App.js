import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import MyNavbar from "./components/Shared/MyNavbar/MyNavbar";
import Home from "./components/Home/Home";

import Login from "./components/Authentication/Login/Login";
import Register from "./components/Authentication/Register/Register";

function App() {
    return (
        <Router>
            <MyNavbar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
