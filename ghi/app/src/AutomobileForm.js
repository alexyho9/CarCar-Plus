import React, {useEffect, useState} from 'react';


const AutomobileForm = () => {
    // color year vin sold model is foreign
    const [year, setYear] = useState('');
    const [vin, setVin] = useState('');
    const [sold, setSold] = useState('');
    const [model, setModel] = useState('');
    const [models, setModels] = useState([]);

    const handleYearChange = (event) => {
        setYear(event.target.value);
    }

    const handleVinChange = (event) => {
        setVin(event.target.value);
    }

    const handleSoldChange = (event) => {
        setSold(event.target.value);
    }

    const handleModelChange = (event) => {
        setModel(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {};
        data.year = year;
        data.vin = vin;
        data.sold = sold;
        data.model = model;

        const autoUrl = 'http://localhost:8100/api/automobiles/'
        const fetchConfig = {
            method: 'post',
            body: JSON.stringify(data),
            headers: {'Content-Type': 'application/json'},
        };
        const response = await fetch(autoUrl, fetchConfig);
        if (response.ok) {
            setYear('');
            setVin('');
            setSold('');
            setModel('');
        }
    }

    // const fetchData = async () => {
    //     const url = 'http://localhost:8100/api/automobiles/'
    //     const response = await fetch(url);
    //     if (response.ok) {
    //         const data = await response.json();
    //         setModels(data.models);
    //     }
    // }

    // useEffect(() => {
    //     fetchData();
    // }, []);

    return (

        <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Add a New Salesperson</h1>
            <form onSubmit={handleSubmit} id="create-automobile-form">
              <div className="form-floating mb-3">
                <input onChange={handleYearChange} placeholder="Year" required
                  type="text" name="year" id="year" value={year}
                  className="form-control" />
                <label htmlFor="employee_id">Year</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={handleVinChange} placeholder="Vin" required
                  type="text" name="vin" id="vin" value={vin}
                  className="form-control" />
                <label htmlFor="Vin">Vin</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={handleSoldChange} placeholder="Sold" required
                  type="text" name="sold" id="sold" value={sold}
                  className="form-control" />
                <label htmlFor="Sold">Sold</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={handleModelChange} placeholder="Model" required
                  type="text" name="model" id="model" value={model}
                  className="form-control" />
                <label htmlFor="model">Model</label>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>

    );
}
export default AutomobileForm;
