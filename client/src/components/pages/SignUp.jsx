import { useState } from "react";
import { Link } from "react-router-dom";
import "../../css/Login.css";
import "../../css/Utils.css";

const SignUp = () => {
    const [values, setValues] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="limiter">
            <div className="container-login100" style={{ backgroundImage: `url ("https://cdn.medal.tv/covers/63353ecf01f1a43077fdeb9a0d607080/1605641160036.png")` }}>
                <div className="wrap-login100 p-t-30 p-b-50">
                    <span className="login100-form-title p-b-41">
                        Create Account
                    </span>

                    <form className="login100-form validate-form p-b-33 p-t-5">
                        <div className="wrap-input100">
                            <center>
                                <h6>Already have an account? <Link to="/login">Login</Link></h6>
                            </center>
                        </div>

                        <div className="wrap-input100 validate-input" data-validate="Enter username">
                            <input className="input100" type="text" name="firstname" placeholder="First Name" required />
                            <span className="focus-input100" data-placeholder="&#xe82a;"></span>
                        </div>

                        <div className="wrap-input100 validate-input" data-validate="Enter username">
                            <input className="input100" type="text" name="lastname" placeholder="Last Name" required />
                            <span className="focus-input100" data-placeholder="&#xe82a;"></span>
                        </div>

                        <div className="wrap-input100 validate-input" data-validate="Enter username">
                            <input className="input100" type="email" name="email" placeholder="Email" required />
                            <span className="focus-input100" data-placeholder="&#xe80f;"></span>
                        </div>

                        <div className="wrap-input100 validate-input" data-validate="Enter password">
                            <input className="input100" type="password" name="password" placeholder="Password" required />
                            <span className="focus-input100" data-placeholder="&#xe80f;"></span>
                        </div>

                        <div className="container-login100-form-btn m-t-32">
                            <button className="login100-form-btn" type="submit" onClick={handleSubmit}>
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp;