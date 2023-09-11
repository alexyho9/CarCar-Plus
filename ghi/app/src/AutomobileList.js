import React, { useEffect, useState } from 'react';

const AutomobileList = () => {
  const [autos, setAutos] = useState([]);

  const fetchData = async () => {
    const url = 'http://localhost:8100/api/automobiles/';
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setAutos(data.autos);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="shadow p-4 mt-4">
      <h1>Automobiles</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>VIN</th>
            <th>Color</th>
            <th>Year</th>
            <th>Model</th>
            <th>Manufacturer</th>
            <th>Sold</th>
          </tr>
        </thead>
        <tbody>
          {autos.map(auto => {
            return (
              <tr key={auto.vin}>
                <td>{auto.vin}</td>
                <td>{auto.color}</td>
                <td>{auto.year}</td>
                <td>{auto.model.name}</td>
                <td>{auto.model.manufacturer.name}</td>
                <td>{auto.sold ? "Yes" : "No"}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default AutomobileList;
