import React, {useEffect, useState} from 'react';


const SaleForm = () => {
  const [automobile, setAutomobile] = useState('');
  const [salesperson, setSalesperson] = useState('');
  const [customer, setCustomer] = useState('');
  const [price, setPrice] = useState('');
  const [automobiles, setAutomobiles] = useState([]);
  const [salespeople, setSalespeople] = useState([]);
  const [customers, setCustomers] = useState([]);

  const handleAutomobileChange = (event) => {
    setAutomobile(event.target.value);
  }

  const handleSalespersonChange = (event) => {
    setSalesperson(event.target.value);
  }

  const handleCustomerChange = (event) => {
    setCustomer(event.target.value);
  }

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Populate Form Data for POST
    const data = {};
    data.automobile_vin = automobile;
    data.salesperson_id = salesperson;
    data.customer_id = customer;
    data.price = price;

    let url = 'http://localhost:8090/api/sales/';
    let fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    // Send request to sales micro-service using URL, data and config
    let response = await fetch(url, fetchConfig);
    // If sale is successful, update automobile in inventory to sold
    if (response.ok) {
      let url = `http://localhost:8100/api/automobiles/${automobile}/`;
      let fetchConfig = {
        method: "put",
        body: JSON.stringify({"sold": true}),
        headers: {'Content-Type': 'application/json'}
      }
      // Send request to inventory micro-service
      let response = await fetch(url, fetchConfig);
      if (response.ok) {
        // If update is successful, reset form fields to blank
        setAutomobile('');
        setSalesperson('');
        setCustomer('');
        setPrice('');
      }
    }
  }

  const fetchData = async () => {
    let url = 'http://localhost:8100/api/automobiles/';
    let response = await fetch(url);
    if (response.ok) {
      let data = await response.json();
      setAutomobiles(data.autos);
    }
    url = 'http://localhost:8090/api/salespeople/';
    response = await fetch(url);
    if (response.ok) {
      let data = await response.json();
      setSalespeople(data.salespersons);
    }
    url = 'http://localhost:8090/api/customers/';
    response = await fetch(url);
    if (response.ok) {
      let data = await response.json();
      setCustomers(data.customers);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (

    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
        <h1>Enter a New Sale</h1>
        <form onSubmit={handleSubmit} id="create-sale-form">

          <div className="mb-3">
            <select onChange={handleAutomobileChange} required
              id="automobile" name="automobile" value={automobile}
              className="form-select">
              <option value="">Choose an Automobile</option>
              {automobiles.map(automobile => {
                return (
                <option value={automobile.vin} key={automobile.vin}>
                  {automobile.year} {automobile.model.manufacturer.name} {automobile.model.name}
                </option>
                  );
              })}
            </select>
          </div>

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

          <div className="mb-3">
            <select onChange={handleCustomerChange} required
              id="customer" name="customer" value={customer}
              className="form-select">
              <option value="">Choose a Customer</option>
              {customers.map(customer => {
                return (
                <option value={customer.id} key={customer.href}>
                  {customer.first_name} {customer.last_name}
                </option>
                );
              })}
            </select>
          </div>

          <div className="form-floating mb-3">
            <input onChange={handlePriceChange} placeholder="Price" required
              type="number" id="price" value={price}
              name="price" className="form-control" />
            <label htmlFor="price">Price</label>
          </div>

          <button className="btn btn-primary">Create</button>
        </form>
        </div>
      </div>
    </div>
  );
}

export default SaleForm;
