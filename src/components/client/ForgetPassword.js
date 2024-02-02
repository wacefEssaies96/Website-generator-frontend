import axios from "axios";
import { Link } from "react-router-dom";

export default function ForgetPassword(props) {

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(e.target.email.value)
        axios.post('http://localhost:3030/send-reset-link', {
            email: e.target.email.value 
        }).then(
            data => {
                console.log(data)
                props.setSwitcher(true)
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
                        Forgot Your Password?
                    </h1>
                    <p className="mb-4">
                        We get it, stuff happens. Just enter your email address
                        below and we'll send you a link to reset your password!
                    </p>
                </div>
                <form className="user" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            name="email"
                            type="email"
                            className="form-control form-control-user"
                            id="exampleInputEmail"
                            aria-describedby="emailHelp"
                            placeholder="Enter Email Address..."
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