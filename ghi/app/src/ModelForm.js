import React, {useEffect, useState} from 'react';


const ModelForm = () => {
  const [model, setModel] = useState('');
  const [pictureUrl, setPictureUrl] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [manufacturers, setManufacturers] = useState([]);

  const handleModelChange = (event) => {
    setModel(event.target.value);
  }

  const handlePictureUrlChange = (event) => {
    setPictureUrl(event.target.value);
  }

  const handleManufacturerChange = (event) => {
    setManufacturer(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {};
    data.name = model;
    data.picture_url = pictureUrl;
    data.manufacturer_id = manufacturer;

    const url = 'http://localhost:8100/api/models/';
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(url, fetchConfig);
    if  (response.ok) {
      const newModel = await response.json();
      console.log(newModel);
      setModel('');
      setPictureUrl('');
      setManufacturer('');
    }
  }

  const fetchData = async () => {
    const url = 'http://localhost:8100/api/manufacturers/';
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setManufacturers(data.manufacturers);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (

    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
        <h1>Add a New Model</h1>
        <form onSubmit={handleSubmit} id="create-model-form">
          <div className="form-floating mb-3">
            <input onChange={handleModelChange} placeholder="Model" required
              type="text" id="model" value={model}
              name="model" className="form-control" />
            <label htmlFor="model">Model</label>
          </div>
          <div className="form-floating mb-3">
            <input onChange={handlePictureUrlChange} placeholder="Picture URL" required
              type="url" id="picture_url" value={pictureUrl}
              name="picture_url" className="form-control" />
            <label htmlFor="picture_url">Picture URL</label>
          </div>
          <div className="mb-3">
            <select onChange={handleManufacturerChange} required
              id="manufacturer" name="manufacturer" value={manufacturer}
              className="form-select">
              <option value="">Choose a Manufacturer</option>
              {manufacturers.map(manufacturer => {
                return (
                  <option value={manufacturer.id} key={manufacturer.name}>
                    {manufacturer.name}
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
export default ModelForm;
