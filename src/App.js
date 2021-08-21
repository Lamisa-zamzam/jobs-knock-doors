import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import MyNavbar from "./components/Shared/MyNavbar/MyNavbar";

function App() {
    return (
        <Router>
            <MyNavbar />
        </Router>
    );
}

export default App;
