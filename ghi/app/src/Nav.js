import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Inventory
              </NavLink>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><NavLink className="dropdown-item" to="/inventory/manufacturers">Manufacturers</NavLink></li>
                <li><NavLink className="dropdown-item" to="/inventory/models">Vehicle Models</NavLink></li>
                <li><NavLink className="dropdown-item" to="/inventory/automobiles">Automobile Inventory</NavLink></li>
                <li><hr className="dropdown-divider" /></li>
                <li><NavLink className="dropdown-item" to="/inventory/manufacturers-new">Add Manufacturer</NavLink></li>
                <li><NavLink className="dropdown-item" to="/inventory/models-new">Add Vehicle Model</NavLink></li>
                <li><NavLink className="dropdown-item" to="/inventory/automobiles-new">Add Automobile</NavLink></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Auto Servicing
              </NavLink>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><NavLink className="dropdown-item" to="/services/technicians">Technicians</NavLink></li>
                <li><NavLink className="dropdown-item" to="/services/appointments">Appointments</NavLink></li>
                <li><NavLink className="dropdown-item" to="/services/history">Service History</NavLink></li>
                <li><hr className="dropdown-divider" /></li>
                <li><NavLink className="dropdown-item" to="/services/technicians-new">Add Technician</NavLink></li>
                <li><NavLink className="dropdown-item" to="/services/appointments-new">Add Service Appointment</NavLink></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Vehicle Sales
              </NavLink>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><NavLink className="dropdown-item" to="/sales/salespeople">Salespeople</NavLink></li>
                <li><NavLink className="dropdown-item" to="/sales/customers">Customers</NavLink></li>
                <li><NavLink className="dropdown-item" to="/sales/sales">Sales</NavLink></li>
                <li><hr className="dropdown-divider" /></li>
                <li><NavLink className="dropdown-item" to="/sales/salespeople-new">Add Salesperson</NavLink></li>
                <li><NavLink className="dropdown-item" to="/sales/customers-new">Add Customer</NavLink></li>
                <li><NavLink className="dropdown-item" to="/sales/sales-new">Record Sale</NavLink></li>
              </ul>
            </li>



          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
