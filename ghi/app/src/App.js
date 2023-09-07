import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
// Inventory Page Imports
// import ManufacturerList from './ManufacturerList';
// import ManufacturerForm from './ManufacturerForm';
// Service Page Imports
import TechnicianList from './TechnicianList';
import TechnicianForm from './TechnicianForm';
import AppointmentList from './AppointmentList';
import AppointmentForm from './AppointmentForm';
// Sales Page Imports


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="inventory">
          <Route path="manufacturers" element={<MainPage />} />
          <Route path="manufacturers/new" element={<MainPage />} />
          <Route path="models" element={<MainPage />} />
          <Route path="models/new" element={<MainPage />} />
          <Route path="automobiles" element={<MainPage />} />
          <Route path="automobiles/new" element={<MainPage />} />
        </Route>
        <Route path="services">
          <Route path="technicians" element={<MainPage />} />
          <Route path="technicians/new" element={<MainPage />} />
          <Route path="appointments" element={<MainPage />} />
          <Route path="appointments/new" element={<MainPage />} />
        </Route>
        <Route path="sales">
          <Route path="salespeople" element={<MainPage />} />
          <Route path="salespeople/new" element={<MainPage />} />
          <Route path="customers" element={<MainPage />} />
          <Route path="customers/new" element={<MainPage />} />
          <Route path="sales" element={<MainPage />} />
          <Route path="sales/new" element={<MainPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
