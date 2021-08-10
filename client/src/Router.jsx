import PrivateRoute from "./components/privateRoute/PrivateRoute";
import Home from "./components/pages/Home";
import Chat from "./components/pages/Chat";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
import {
    Switch,
    Route,
} from "react-router-dom";

const Router = () => {
    return (
        <>
            <Switch>
                <PrivateRoute path="/chat" key="chat">
                    <Chat />
                </PrivateRoute>
                <Route path="/login" key="login">
                    <Login />
                </Route>
                <Route path="/sign-up" key="login">
                    <SignUp />
                </Route>
                <PrivateRoute path="/" key="home">
                    <Home />
                </PrivateRoute>
            </Switch>
        </>
    )
}

export default Router;