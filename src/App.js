import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import MyNavbar from "./components/Shared/MyNavbar/MyNavbar";
import Home from "./components/Home/Home";

function App() {
    return (
        <Router>
            <MyNavbar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
