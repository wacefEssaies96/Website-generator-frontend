import axios from "axios";
import { Link } from "react-router-dom";

export default function RestLink(props) {

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3030/reset-password', {
            email: props.email,
            token: props.token,
            password: e.target.password.value
        }).then(
            data => {
                console.log(data)
            }
        )
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <>
            <div className="p-5">
                <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-2">
                        New Password
                    </h1>
                    <p className="mb-4">
                        Please enter your new password.
                    </p>
                </div>
                <form className="user" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            name="password"
                            type="password"
                            className="form-control form-control-user"
                            aria-describedby="password"
                            placeholder="Enter your new password..."
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary btn-user btn-block"
                    >
                        Reset Password
                    </button>
                </form>
                <hr />
                <div className="text-center">
                    <Link className="small" to="/register">
                        Create an Account!
                    </Link>
                </div>
                <div className="text-center">
                    <Link className="small" to="/login">
                        Already have an account? Login!
                    </Link>
                </div>
            </div>
        </>
    )
}