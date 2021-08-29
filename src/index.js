// React
import React from "react";
import ReactDOM from "react-dom";
// StyleSheets
import "./index.css";
// Bootstrap Styles
import "bootstrap/dist/css/bootstrap.min.css";
// Component -- Main app
import App from "./App";
// Web Vitals
import reportWebVitals from "./reportWebVitals";
// Apollo for consuming GraphQL data
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

// Apollo client setup
const client = new ApolloClient({
    uri: "https://aqueous-meadow-34034.herokuapp.com/graphql",
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
