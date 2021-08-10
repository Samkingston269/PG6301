import { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { showError, showLoading } from "../../utility/messages";
import { signUp, isAuthenticated } from "../../utility/authentication";
import "../../css/Login.css";
import "../../css/Utils.css";

const SignUp = () => {
    const [values, setValues] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        loading: false,
        disabled: false,
        success: false,
    });

    const { firstname, lastname, email, password, success, error, loading, disabled } = values

    const handleChange = e => {
        setValues({
            ...values,
            error: false,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setValues({
            ...values,
            error: false,
            loading: true,
        })

        signUp({ firstname, lastname, email, password })
            .then(response => {
                setValues({
                    firstname: "",
                    lastname: "",
                    email: "",
                    password: "",
                    loading: false,
                    disabled: false,
                    success: true,
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
    };

    const showSuccess = () => {
        if (success) return (
            <div className="alert alert-primary">
                New Account Created. Please <Link to="/login">Login</Link>.
            </div>
        )
    }

    return (
        <>
            {isAuthenticated() ? <Redirect to="/" /> : ""}
            <div className="limiter">
                <div className="container-login100" style={{ backgroundImage: `url ("https://cdn.medal.tv/covers/63353ecf01f1a43077fdeb9a0d607080/1605641160036.png")` }}>
                    <div className="wrap-login100 p-t-30 p-b-50">
                        <span className="login100-form-title p-b-41">
                            Create Account
                        </span>

                        <form className="login100-form validate-form p-b-33 p-t-5" onSubmit={handleSubmit}>
                            <div className="wrap-input100">
                                <center>
                                    <h6>Already have an account? <Link to="/login">Login</Link></h6>
                                </center>
                            </div>
                            <div>
                                {showLoading(loading)}
                                {showError(error, error)}
                                {showSuccess()}
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Enter username">
                                <input className="input100" type="text" name="firstname" placeholder="First Name" value={firstname} onChange={handleChange} required />
                                <span className="focus-input100" data-placeholder="&#xe82a;"></span>
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Enter username">
                                <input className="input100" type="text" name="lastname" placeholder="Last Name" value={lastname} onChange={handleChange} required />
                                <span className="focus-input100" data-placeholder="&#xe82a;"></span>
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Enter username">
                                <input className="input100" type="email" name="email" placeholder="Email" value={email} onChange={handleChange} required />
                                <span className="focus-input100" data-placeholder="&#xe80f;"></span>
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Enter password">
                                <input className="input100" type="password" name="password" placeholder="Password" value={password} onChange={handleChange} required />
                                <span className="focus-input100" data-placeholder="&#xe80f;"></span>
                            </div>

                            <div className="container-login100-form-btn m-t-32">
                                <button className="login100-form-btn" type="submit" disabled={disabled}>
                                    Sign Up
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>)
}

export default SignUp;