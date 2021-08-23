import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

// Bootstrap Styles
import "bootstrap/dist/css/bootstrap.min.css";

// apollo client setup
const client = new ApolloClient({
    uri: "http://localhost:5000/graphql",
});

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById("root")
);

reportWebVitals();
