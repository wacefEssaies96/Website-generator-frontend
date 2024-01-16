import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import LogoutModal from "./LogoutModal";
import '../../styles/styles-admin/fontawesome-free/css/all.min.css'
import '../../styles/styles-admin/css/dataTables.bootstrap4.min.css'
import '../../styles/styles-admin/css/sb-admin-2.css'
// import 'https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i'

export default function AdminLayout() {
    return (
        <>
            <div id="wrapper">
                <Sidebar></Sidebar>
                <div id="content-wrapper" class="d-flex flex-column">
                    <Outlet />
                    {/* <Footer></Footer> */}
                </div>
                <script src="vendor/jquery/jquery.min.js"></script>
                <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
                <script src="vendor/jquery-easing/jquery.easing.min.js"></script>
                <script src="vendor/datatables/jquery.dataTables.min.js"></script>
                <script src="vendor/datatables/dataTables.bootstrap4.min.js"></script>
                <script src="js/sb-admin-2.min.js"></script>
                <script src="js/demo/datatables-demo.js"></script>
            </div>
            <ScrollToTop></ScrollToTop>
            <LogoutModal></LogoutModal>
        </>
    )
}