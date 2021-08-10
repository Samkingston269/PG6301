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
                <Route path="/chat" key="chat">
                    <Chat />
                </Route>
                <Route path="/login" key="login">
                    <Login />
                </Route>
                <Route path="/sign-up" key="login">
                    <SignUp />
                </Route>
                <Route path="/" key="home">
                    <Home />
                </Route>
            </Switch>
        </>
    )
}

export default Router;