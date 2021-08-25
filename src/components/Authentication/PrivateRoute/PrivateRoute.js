import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
    // JWT Token
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
