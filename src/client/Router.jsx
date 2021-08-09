import Home from "./components/Home";
import Chat from "./components/Chat";
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
                <Route path="/" key="home">
                    <Home />
                </Route>
            </Switch>
        </>
    )
}

export default Router;