import React, {useEffect, useState} from 'react';


const SaleList = () => {
  const [sales, setSales] = useState([]);

  const fetchData = async () => {
    const url = 'http://localhost:8090/api/sales/';
    const response = await fetch(url);
    console.log("response ok?", response.ok);
    if (response.ok) {
      const data = await response.json();
      setSales(data.salespersons);
    }
  }

  useEffect(() => {
      fetchData();
  }, []);

  return (

    <div className="shadow p-4 mt-4">
      <h1>Salespeople</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Salesperson Employee ID</th>
            <th>Salesperson Name</th>
            <th>Customer</th>
            <th>VIN</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {sales.map(sale => {
            return (
              <tr key={sale.href}>
                <td>{sale.salesperson.employee_id}</td>
                <td>{sale.salesperson.first_name} {sale.salesperson.last_name}</td>
                <td>{sale.customer.first_name} {sale.customer.last_name}</td>
                <td>{sale.automobile.vin}</td>
                <td>{sale.price}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}



export default SaleList;
