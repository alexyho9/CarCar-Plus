import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
// Inventory Page Imports
import ManufacturerList from './ManufacturerList';
import ManufacturerForm from './ManufacturerForm';
import ModelList from './ModelList';
import ModelForm from './ModelForm';
import AutomobileList from './AutomobileList';
import AutomobileForm from './AutomobileForm';
// Service Page Imports
import TechnicianList from './TechnicianList';
import TechnicianForm from './TechnicianForm';
import AppointmentList from './AppointmentList';
import AppointmentForm from './AppointmentForm';
import ServicesHistory from './ServicesHistory';
// Sales Page Imports
import SalespeopleList from './SalespeopleList';
import SalespeopleForm from './SalespeopleForm';
import CustomerList from './CustomerList.js';
import CustomerForm from './CustomerForm';
import SaleList from './SaleList.js';
import SaleForm from './SaleForm';
import SalespersonHistory from './SalespersonHistory';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="inventory">
          <Route path="manufacturers" element={<ManufacturerList />} />
          <Route path="manufacturers-new" element={<ManufacturerForm />} />
          <Route path="models" element={<ModelList />} />
          <Route path="models-new" element={<ModelForm />} />
          <Route path="automobiles" element={<AutomobileList />} />
          <Route path="automobiles-new" element={<AutomobileForm />} />
        </Route>
        <Route path="services">
          <Route path="technicians" element={<TechnicianList />} />
          <Route path="technicians-new" element={<TechnicianForm />} />
          <Route path="appointments" element={<AppointmentList />} />
          <Route path="appointments-new" element={<AppointmentForm />} />
          <Route path="history" element={<ServicesHistory />} />
        </Route>
        <Route path="sales">
          <Route path="salespeople" element={<SalespeopleList />} />
          <Route path="salesperson-history" element={<SalespersonHistory />} />
          <Route path="salespeople-new" element={<SalespeopleForm />} />
          <Route path="customers" element={<CustomerList />} />
          <Route path="customers-new" element={<CustomerForm />} />
          <Route path="sales" element={<SaleList />} />
          <Route path="sales-new" element={<SaleForm />} />
        </Route>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
