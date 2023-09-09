import React, {useEffect, useState} from 'react';


const AutomobileForm = () => {
  const [color, setColor] = useState('');
  const [year, setYear] = useState('');
  const [vin, setVin] = useState('');
  const [model, setModel] = useState('');
  const [models, setModels] = useState([]);

  const handleColorChange = (event) => {
    setColor(event.target.value);
  }

  const handleYearChange = (event) => {
    setYear(event.target.value);
  }

  const handleVinChange = (event) => {
    setVin(event.target.value);
  }

  const handleModelChange = (event) => {
    setModel(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {};
    data.color = color;
    data.year = year;
    data.vin = vin;
    data.model_id = model;

    const url = 'http://localhost:8100/api/automobiles/';
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(url, fetchConfig);
    if (response.ok) {
      setColor('');
      setYear('');
      setVin('');
      setModel('');
    }

  }

  const fetchData = async () => {
    let url = 'http://localhost:8100/api/models/';
    let response = await fetch(url);
    if (response.ok) {
      let data = await response.json();
      setModels(data.models);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (

    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
        <h1>Add a New Automobile to Inventory</h1>
        <form onSubmit={handleSubmit} id="create-automobile-form">

          <div className="form-floating mb-3">
            <input onChange={handleColorChange} placeholder="Color" required
              type="text" id="color" value={color}
              name="color" className="form-control" />
            <label htmlFor="color">Color</label>
          </div>

          <div className="form-floating mb-3">
            <input onChange={handleYearChange} placeholder="Year" required
              type="number" id="year" value={year}
              name="year" className="form-control" />
            <label htmlFor="year">Year</label>
          </div>

          <div className="form-floating mb-3">
            <input onChange={handleVinChange} placeholder="VIN" required
              type="text" id="vin" value={vin}
              name="vin" className="form-control" />
            <label htmlFor="vin">VIN</label>
          </div>

          <div className="mb-3">
            <select onChange={handleModelChange} required
              id="model" name="model" value={model}
              className="form-select">
              <option value="">Choose a Manufacturer</option>
              {models.map(model => {
                return (
                  <option value={model.id} key={model.id}>
                    {model.manufacturer.name} {model.name}
                  </option>
                  );
              })}
            </select>
          </div>

          <button className="btn btn-primary">Create</button>

        </form>
        </div>
      </div>
    </div>

  );

}

export default AutomobileForm;
