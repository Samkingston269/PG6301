import "../css/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="topnav">
            <a>
                <Link to="/">Home</Link>
            </a>
            <a>
                <Link to="/chat">Chat</Link>
            </a>
        </div>
    )
}

export default Navbar;