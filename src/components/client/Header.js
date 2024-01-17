export default function Header() {
    return (
        <>
            {/* ======= Header ======= */}
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center">
                    <h1 className="logo me-auto">
                        <a href="index.html">Mentor</a>
                    </h1>
                    {/* Uncomment below if you prefer to use an image logo */}
                    {/* <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>
                            <li>
                                <a className="active" href="index.html">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="about.html">About</a>
                            </li>
                            <li>
                                <a href="courses.html">Courses</a>
                            </li>
                            <li>
                                <a href="trainers.html">Trainers</a>
                            </li>
                            <li>
                                <a href="events.html">Events</a>
                            </li>
                            <li>
                                <a href="pricing.html">Pricing</a>
                            </li>
                            <li className="dropdown">
                                <a href="#">
                                    <span>Drop Down</span> <i className="bi bi-chevron-down" />
                                </a>
                                <ul>
                                    <li>
                                        <a href="#">Drop Down 1</a>
                                    </li>
                                    <li className="dropdown">
                                        <a href="#">
                                            <span>Deep Drop Down</span>{" "}
                                            <i className="bi bi-chevron-right" />
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="#">Deep Drop Down 1</a>
                                            </li>
                                            <li>
                                                <a href="#">Deep Drop Down 2</a>
                                            </li>
                                            <li>
                                                <a href="#">Deep Drop Down 3</a>
                                            </li>
                                            <li>
                                                <a href="#">Deep Drop Down 4</a>
                                            </li>
                                            <li>
                                                <a href="#">Deep Drop Down 5</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Drop Down 2</a>
                                    </li>
                                    <li>
                                        <a href="#">Drop Down 3</a>
                                    </li>
                                    <li>
                                        <a href="#">Drop Down 4</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="contact.html">Contact</a>
                            </li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle" />
                    </nav>
                    {/* .navbar */}
                    <a href="courses.html" className="get-started-btn">
                        Get Started
                    </a>
                </div>
            </header>
            {/* End Header */}
        </>

    )
}