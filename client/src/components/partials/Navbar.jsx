import "../../css/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="topnav">
            <Link to="/">Home</Link>
            <Link to="/chat">Chat</Link>
        </div>
    )
}

export default Navbar;