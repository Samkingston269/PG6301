import { useState } from "react";
import { Link } from "react-router-dom";
import "../../css/Login.css";
import "../../css/Utils.css";

const Login = () => {
    const [values, setValues] = useState({
        email: "",
        password: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="limiter">
            <div className="container-login100" style={{ backgroundImage: `url ("https://cdn.medal.tv/covers/63353ecf01f1a43077fdeb9a0d607080/1605641160036.png")` }}>
                <div className="wrap-login100 p-t-30 p-b-50">
                    <span className="login100-form-title p-b-41">
                        Account Login
                    </span>
                    <form className="login100-form validate-form p-b-33 p-t-5">
                        <div className="wrap-input100">
                            <center>
                                <h6>Don't have an account? <Link to="/sign-up">Sign Up</Link></h6>
                            </center>
                        </div>

                        <div className="wrap-input100 validate-input" data-validate="Enter username">
                            <input className="input100" type="text" name="email" placeholder="Email" />
                            <span className="" data-placeholder="&#xe82a;"></span>
                        </div>

                        <div className="wrap-input100 validate-input" data-validate="Enter password">
                            <input className="input100" type="password" name="pass" placeholder="Password" />
                            <span className="" data-placeholder="&#xe80f;"></span>
                        </div>

                        <div className="container-login100-form-btn m-t-32">
                            <button className="login100-form-btn" type="submit" onClick={handleSubmit}>
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;