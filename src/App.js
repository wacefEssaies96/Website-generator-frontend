import { Route, Routes } from 'react-router-dom';
import AdminLayout from './components/admin/AdminLayout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/admin" element={<AdminLayout />}>
            <Route path="" element={<></>} />
          </Route>
      </Routes>
    </div>
  );
}

export default App;
