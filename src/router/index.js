import { Route, Switch  } from "react-router-dom";
import routes from "./routes";

const Router = (props) => {
    return (
        <Switch>
            {routes.map((route) => {
                return <Route key={route.path} path={route.path} component={route.component} exact />
            })}
        </Switch>
    );
}

export default Router;