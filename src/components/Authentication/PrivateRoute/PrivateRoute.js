import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
    // Id of the user logged in saved at the time of logging in
    const id = sessionStorage.getItem("id");

    return (
        <Route
            {...rest}
            render={({ location }) =>
                id ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;
