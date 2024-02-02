import { useEffect, useState } from 'react';
import ForgetPasswordComponent from '../components/client/ForgetPassword';
import RestLink from '../components/client/ResetLink';
import { useLocation } from 'react-router-dom';


export default function ForgetPassword() {

    const [switcher, setSwitcher] = useState(false)
    const [email, setEmail] = useState("")

    const location = useLocation()
    const token = new URLSearchParams(location.search).get('token')

    useEffect(() => {
        if (token) {
            setSwitcher(true)
        }
    }, [])

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
                                <div className="row">
                                    <div className="col-lg-6 d-none d-lg-block bg-password-image" />
                                    <div className="col-lg-6">
                                        {!switcher ?
                                            <ForgetPasswordComponent setEmail={setEmail} setSwitcher={setSwitcher}></ForgetPasswordComponent>
                                            : <RestLink email={email} token={token}></RestLink>
                                        }
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