import { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { showError, showLoading } from "../../utility/messages";
import { login, authenticate, isAuthenticated } from "../../utility/authentication";
import "../../css/Login.css";
import "../../css/Utils.css";

const Login = () => {
    const [values, setValues] = useState({
        email: "",
        password: "",
        error: false,
        loading: false,
        disabled: false,
        redirect: false
    });

    const { email, password, loading, error, disabled } = values;

    const handleChange = e => {
        setValues({
            ...values,
            error: false,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setValues({ ...values, error: false, loading: true, disabled: true });

        login({ email, password })
            .then(response => {
                authenticate(response.data.token, () => {
                    setValues({
                        email: "",
                        password: "",
                        success: true,
                        disabled: false,
                        loading: false,
                        redirect: true
                    })
                })
            })
            .catch(err => {
                let errMsg = 'Something went wrong!';
                if (err.response) {
                    errMsg = err.response.data.message.toUpperCase();
                } else {
                    errMsg = 'Something went wrong!';
                }
                setValues({ ...values, error: errMsg, disabled: false, loading: false })
            })
    }

    return (
        <>
            {isAuthenticated() ? <Redirect to="/" /> : ""}
            <div className="limiter">
                <div className="container-login100" style={{ backgroundImage: `url ("https://cdn.medal.tv/covers/63353ecf01f1a43077fdeb9a0d607080/1605641160036.png")` }}>
                    <div className="wrap-login100 p-t-30 p-b-50">
                        <span className="login100-form-title p-b-41">
                            Account Login
                        </span>
                        <form className="login100-form validate-form p-b-33 p-t-5" onSubmit={handleSubmit}>
                            <div className="wrap-input100">
                                <center>
                                    <h6>Don't have an account? <Link to="/sign-up">Sign Up</Link></h6>
                                </center>
                            </div>
                            <div>
                                {showLoading(loading)}
                                {showError(error, error)}
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Enter username">
                                <input className="input100" type="text" name="email" value={email} onChange={handleChange} required placeholder="Email" />
                                <span className="" data-placeholder="&#xe82a;"></span>
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Enter password">
                                <input className="input100" type="password" name="password" value={password} onChange={handleChange} required placeholder="Password" />
                                <span className="" data-placeholder="&#xe80f;"></span>
                            </div>

                            <div className="container-login100-form-btn m-t-32">
                                <button className="login100-form-btn" type="submit" disabled={disabled}>
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>)
}

export default Login;