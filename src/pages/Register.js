import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

export default function Register() {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState({
        email: "",
        password: "",
        firstname: "",
        lastname: "",
    });
    const { email, password, firstname, lastname } = inputValue;
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
            position: "bottom-right",
        });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!firstname.trim()) return handleError("First name is required.");
        if (!lastname.trim()) return handleError("Last name is required.");

        // Email validation regex pattern
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) return handleError("Please enter a valid email address.");

        if (password.length < 6) return handleError("Password must be at least 6 characters long.");
        try {
            const { data } = await axios.post(
                "http://localhost:3030/signup",
                {
                    ...inputValue,
                },
                { withCredentials: true }
            );
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
            firstname: "",
            lastname: "",
        });
    };
    const googleAuth = () => {
        window.open(
            `http://localhost:3030/auth/google`,
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
                <div className="row justify-content-center">
                    <div className="col-xl-10 col-lg-12 col-md-9">
                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0">
                                {/* Nested Row within Card Body */}
                                <div className="row">
                                    <div className="col-lg-5 d-none d-lg-block bg-login-image" />
                                    <div className="col-lg-7">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                                            </div>
                                            <form onSubmit={handleSubmit} className="user">
                                                <div className="form-group row">
                                                    <div className="col-sm-6 mb-3 mb-sm-0">
                                                        <input
                                                            name="firstname"
                                                            type="text"
                                                            value={firstname}
                                                            onChange={handleOnChange}
                                                            className="form-control form-control-user"
                                                            id="exampleFirstName"
                                                            placeholder="First Name"
                                                        />
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <input
                                                            name="lastname"
                                                            value={lastname}
                                                            onChange={handleOnChange}
                                                            type="text"
                                                            className="form-control form-control-user"
                                                            id="exampleLastName"
                                                            placeholder="Last Name"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        value={email}
                                                        onChange={handleOnChange}
                                                        className="form-control form-control-user"
                                                        id="exampleInputEmail"
                                                        placeholder="Email Address"
                                                    />
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-sm-6 mb-3 mb-sm-0">
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
                                                    {/* <div className="col-sm-6">
                                                        <input
                                                            type="password"
                                                            className="form-control form-control-user"
                                                            id="exampleRepeatPassword"
                                                            placeholder="Repeat Password"
                                                        />
                                                    </div> */}
                                                </div>
                                                <button
                                                    type="submit" className="btn btn-primary btn-user btn-block"
                                                >
                                                    Register Account
                                                </button>
                                                <hr />
                                                <button
                                                    type="button"
                                                    onClick={googleAuth}
                                                    className="btn btn-success btn-user btn-block"
                                                >
                                                    <i className="fab fa-google fa-fw" /> Register with Google
                                                </button>
                                                {/* <a
                                                    href="index.html"
                                                    className="btn btn-facebook btn-user btn-block"
                                                >
                                                    <i className="fab fa-facebook-f fa-fw" /> Register with
                                                    Facebook
                                                </a> */}
                                            </form>
                                            <hr />
                                            <div className="text-center">
                                                <Link className="small" to="/forget-password">
                                                    Forgot Password?
                                                </Link>
                                            </div>
                                            <div className="text-center">
                                                <Link className="small" to={"/login"}>Already have an account? Login!</Link>
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