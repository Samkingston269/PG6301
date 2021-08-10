import Navbar from "../partials/Navbar";
import { useState, useEffect } from "react";
const Home = () => {
    const [name, setName] = useState("");

    useEffect(() => {
        fetch("http://localhost:3001/api/v1/user/hello")
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }, []);

    return (
        <>
            <Navbar />
            <h1>Home Page</h1>
        </>
    )
}

export default Home;