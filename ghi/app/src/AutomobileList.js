import React, { useEffect, useState } from 'react';

const AutomobileList = () => {
<<<<<<< HEAD
  const [automobiles, setAutomobiles] = useState([]);
  useEffect(()=> {console.log(automobiles)}, [automobiles]);
  const fetchData = async() => {
    const url = 'http://localhost:8100/api/automobiles/';
    const response = await fetch(url);

      if (response.ok) {
        const data = await response.json();
        setAutomobiles(data.automobiles);
        // console.log("Is ok?:", response.ok)
        // console.log("How about data?:", data)
=======
  const [autos, setAutos] = useState([]);

  const fetchData = async () => {
    const url = 'http://localhost:8100/api/automobiles/';
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setAutos(data.autos);
>>>>>>> main
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
<<<<<<< HEAD
=======
            <th>Manufacturer</th>
>>>>>>> main
            <th>Sold</th>
          </tr>
        </thead>
        <tbody>
<<<<<<< HEAD
          {automobiles.map(automobile => {
            return (
              <tr key={automobile.href}>
                <td>{automobile.vin}</td>
                <td>{automobile.color}</td>
                <td>{automobile.year}</td>
                <td>{automobile.model}</td>
                <td>{automobile.sold ? 'Yes' : 'No'}</td>
=======
          {autos.map(auto => {
            return (
              <tr key={auto.vin}>
                <td>{auto.vin}</td>
                <td>{auto.color}</td>
                <td>{auto.year}</td>
                <td>{auto.model.name}</td>
                <td>{auto.model.manufacturer.name}</td>
                <td>{auto.sold ? "Yes" : "No"}</td>
>>>>>>> main
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default AutomobileList;
