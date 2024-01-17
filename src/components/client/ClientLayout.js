import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import { Outlet } from "react-router-dom";
import "../../styles/styles-client/bootstrap-icons/bootstrap-icons.min.css"
import "../../styles/styles-client/boxicons/css/boxicons.min.css"
import "../../styles/styles-client/animate.min.css"
import "../../styles/styles-client/aos.css"
import "../../styles/styles-client/bootstrap.min.css"
import "../../styles/styles-client/remixicon/remixicon.css"
import "../../styles/styles-client/swiper-bundle.min.css"
import "../../styles/styles-client/style.css"

export default function ClientLayout() {
    return (
        <>
            <Header></Header>
            <Hero></Hero>
            <main id="main">
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
            {/* <div id="preloader"></div> */}
            <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

            <script src="assets/vendor/purecounter/purecounter_vanilla.js"></script>
            <script src="assets/vendor/aos/aos.js"></script>
            <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
            <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
            <script src="assets/vendor/php-email-form/validate.js"></script>
            <script src="assets/js/main.js"></script>
        </>
    )
}