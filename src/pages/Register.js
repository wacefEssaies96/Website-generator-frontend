export default function Register() {
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
                                            <form className="user">
                                                <div className="form-group row">
                                                    <div className="col-sm-6 mb-3 mb-sm-0">
                                                        <input
                                                            type="text"
                                                            className="form-control form-control-user"
                                                            id="exampleFirstName"
                                                            placeholder="First Name"
                                                        />
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <input
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
                                                        className="form-control form-control-user"
                                                        id="exampleInputEmail"
                                                        placeholder="Email Address"
                                                    />
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-sm-6 mb-3 mb-sm-0">
                                                        <input
                                                            type="password"
                                                            className="form-control form-control-user"
                                                            id="exampleInputPassword"
                                                            placeholder="Password"
                                                        />
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <input
                                                            type="password"
                                                            className="form-control form-control-user"
                                                            id="exampleRepeatPassword"
                                                            placeholder="Repeat Password"
                                                        />
                                                    </div>
                                                </div>
                                                <a
                                                    href="login.html"
                                                    className="btn btn-primary btn-user btn-block"
                                                >
                                                    Register Account
                                                </a>
                                                <hr />
                                                <a
                                                    href="index.html"
                                                    className="btn btn-google btn-user btn-block"
                                                >
                                                    <i className="fab fa-google fa-fw" /> Register with Google
                                                </a>
                                                <a
                                                    href="index.html"
                                                    className="btn btn-facebook btn-user btn-block"
                                                >
                                                    <i className="fab fa-facebook-f fa-fw" /> Register with
                                                    Facebook
                                                </a>
                                            </form>
                                            <hr />
                                            <div className="text-center">
                                                <a className="small" href="forgot-password.html">
                                                    Forgot Password?
                                                </a>
                                            </div>
                                            <div className="text-center">
                                                <a className="small" href="login.html">
                                                    Already have an account? Login!
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}