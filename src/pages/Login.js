import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export default function Login() {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState({
        email: "",
        password: "",
    });
    const { email, password } = inputValue;
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setInputValue({
            ...inputValue,
            [name]: value,
        });
    };

    const handleError = (err) =>
        toast.error(err, {
            position: "bottom-left",
        });
    const handleSuccess = (msg) =>
        toast.success(msg, {
            position: "bottom-left",
        });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(
                "http://localhost:3030/login",
                {
                    ...inputValue,
                },
                { withCredentials: true }
            );
            console.log(data);
            const { success, message } = data;
            if (success) {
                handleSuccess(message);
                setTimeout(() => {
                    navigate("/");
                }, 1000);
            } else {
                handleError(message);
            }
        } catch (error) {
            console.log(error);
        }
        setInputValue({
            ...inputValue,
            email: "",
            password: "",
        });
    };
    const googleAuth = () => {
        window.open(
            `http://localhost:3030/auth/google`,
            "_self"
        );
    };
    const linkedInAuth = () => {
        window.open(
            `http://localhost:3030/auth/linkedin`,
            "_self"
        );
    };
    return (
        <div style={{
            backgroundColor: "#4e73df",
            backgroundImage: "linear-gradient(180deg, #4e73df 10%, #224abe 100%)",
            backgroundSize: "cover",
            height: "100vh",
            width: "100vw"
        }}>
            <div className="container">
                {/* Outer Row */}
                <div className="row justify-content-center">
                    <div className="col-xl-10 col-lg-12 col-md-9">
                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0">
                                {/* Nested Row within Card Body */}
                                <div className="row">
                                    <div className="col-lg-6 d-none d-lg-block bg-login-image" />

                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                            </div>
                                            <form className="user" onSubmit={handleSubmit}>
                                                <div className="form-group">
                                                    <input
                                                        name="email"
                                                        value={email}
                                                        onChange={handleOnChange}
                                                        type="email"
                                                        className="form-control form-control-user"
                                                        id="exampleInputEmail"
                                                        aria-describedby="emailHelp"
                                                        placeholder="Enter Email Address..."
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <input
                                                        name="password"
                                                        value={password}
                                                        onChange={handleOnChange}
                                                        type="password"
                                                        className="form-control form-control-user"
                                                        id="exampleInputPassword"
                                                        placeholder="Password"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <div className="custom-control custom-checkbox small">
                                                        <input
                                                            type="checkbox"
                                                            className="custom-control-input"
                                                            id="customCheck"
                                                        />
                                                        <label
                                                            className="custom-control-label"
                                                            htmlFor="customCheck"
                                                        >
                                                            Remember Me
                                                        </label>
                                                    </div>
                                                </div>
                                                <button
                                                    type="submit"
                                                    className="btn btn-primary btn-user btn-block"
                                                >
                                                    Login
                                                </button>
                                                <hr />
                                                {/* <Button
                                                    className="btn wd-btn-round-2 text-uppercase font-weight-bold mb-2 submit_button" style={{ borderRadius: "8000px", margin: "15px" }}
                                                    value="Login google" onClick={googleAuth} ><AiFillGoogleCircle size={20}></AiFillGoogleCircle>Google</Button>
                                                <Button
                                                    className="btn wd-btn-round-2 text-uppercase font-weight-bold mb-2 submit_button" style={{ borderRadius: "8000px", margin: "15px" }}
                                                    value="Login linkedIn" onClick={linkedInAuth} ><AiFillLinkedin size={20}></AiFillLinkedin>LinkedIn</Button> */}
                                                <button
                                                    type="button"
                                                    className="btn btn-success btn-user btn-block"
                                                    onClick={googleAuth}
                                                >
                                                    <i className="fab fa-google fa-fw" /> Login with Google
                                                </button>
                                                {/* <button
                                                    href="index.html"
                                                    className="btn btn-linkedin btn-user btn-block"
                                                    onClick={linkedInAuth}
                                                >
                                                    <i className="fab fa-linkedin-f fa-fw" /> Login with
                                                    LinkedIn
                                                </button> */}
                                            </form>
                                            <hr />
                                            <div className="text-center">
                                                <a className="small" href="forgot-password.html">
                                                    Forgot Password?
                                                </a>
                                            </div>
                                            <div className="text-center">
                                                <Link className="small" to="/register">Create an Account!</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}