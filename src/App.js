import { Route, Routes } from 'react-router-dom';
import AdminLayout from './components/admin/AdminLayout';
import Login from './pages/Login';
import Register from './pages/Register';
import ClientLayout from './components/client/ClientLayout';
import "react-toastify/dist/ReactToastify.css"
import ForgetPassword from './pages/ForgetPassword';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/forget-password' element={<ForgetPassword></ForgetPassword>}></Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="" element={<></>} />
        </Route>
        <Route path="/" element={<ClientLayout />}>
          <Route path="" element={<></>} />
        </Route>

      </Routes>
    </div>
  );
}

export default App;
