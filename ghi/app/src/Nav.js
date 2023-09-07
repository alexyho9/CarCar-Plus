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
              <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Inventory
              </NavLink>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <NavLink className="dropdown-item" to="#">Manufacturers</NavLink>
                <NavLink className="dropdown-item" to="#">Vehicle Models</NavLink>
                <NavLink className="dropdown-item" to="#">Automobiles</NavLink>
                <div className="dropdown-divider"></div>
                <NavLink className="dropdown-item" to="#">Add Manufacturer</NavLink>
                <NavLink className="dropdown-item" to="#">Add Vehicle Model</NavLink>
                <NavLink className="dropdown-item" to="#">Add Automobile</NavLink>
              </div>
            </li>
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Auto Servicing
              </NavLink>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <NavLink className="dropdown-item" to="#">Technicians</NavLink>
                <NavLink className="dropdown-item" to="#">Appointments</NavLink>
                <NavLink className="dropdown-item" to="#">Service History</NavLink>
                <div className="dropdown-divider"></div>
                <NavLink className="dropdown-item" to="#">Add Technician</NavLink>
                <NavLink className="dropdown-item" to="#">Add Service Appointment</NavLink>
              </div>
            </li>
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Vehicle Sales
              </NavLink>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <NavLink className="dropdown-item" to="#">Salespeople</NavLink>
                <NavLink className="dropdown-item" to="#">Customers</NavLink>
                <NavLink className="dropdown-item" to="#">Sales</NavLink>
                <NavLink className="dropdown-item" to="#">Salesperson History</NavLink>
                <div className="dropdown-divider"></div>
                <NavLink className="dropdown-item" to="#">Add Salesperson</NavLink>
                <NavLink className="dropdown-item" to="#">Add Customer</NavLink>
                <NavLink className="dropdown-item" to="#">Add Sale</NavLink>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
