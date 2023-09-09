import React, {useEffect, useState} from 'react';


const SalespersonHistory = () => {
  const [salesperson, setSalesperson] = useState('');
  const [salespeople, setSalespeople] = useState([]);
  const [sales, setSales] = useState([]);

  const handleSalespersonChange = (event) => {
    setSalesperson(event.target.value);
  }

  const fetchData = async () => {
    let url = 'http://localhost:8090/api/sales/';
    let response = await fetch(url);

    if (response.ok) {
      let data = await response.json();
      setSales(data.sales);
    }

    url = 'http://localhost:8090/api/salespeople/';
    response = await fetch(url);

    if (response.ok) {
      let data = await response.json();
      setSalespeople(data.salespersons);
    }
  }

    useEffect(() => {
      fetchData();
    }, []);

    return (

      <div className="shadow p-4 mt-4">
        <h1>Salesperson History</h1>

        <div className="mb-3">

          <select onChange={handleSalespersonChange} required
            id="salesperson" name="salesperson" value={salesperson}
            className="form-select">
            <option value="">Choose a Salesperson</option>
              {salespeople.map(salesperson => {
                return (
                  <option value={salesperson.employee_id} key={salesperson.employee_id}>
                    {salesperson.first_name} {salesperson.last_name}
                  </option>
                );
              })}
          </select>
        </div>

        <table className="table table-striped">
          <thead>
            <tr>
              <th>Salesperson</th>
              <th>Customer</th>
              <th>VIN</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {sales.filter(venta => venta.salesperson.employee_id == salesperson).map(sale => {
              return (
                <tr key={sale.href}>
                  <td>{sale.salesperson.first_name} {sale.salesperson.last_name}</td>
                  <td>{sale.customer.first_name} {sale.customer.last_name}</td>
                  <td>{sale.automobile.vin}</td>
                  <td>${sale.price}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
}

export default SalespersonHistory;
