import React, {useEffect, useState} from 'react';


const ModelList = () => {
  const [models, setModels] = useState([]);

  const fetchData = async () => {
    const url = 'http://localhost:8100/api/models/';
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        setModels(data.models);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (

    <div className="shadow p-4 mt-4">
      <h1>Models</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Manufacturer</th>
            <th>Picture</th>
          </tr>
        </thead>
        <tbody>
          {models.map(model => {
            return (
              <tr key={model.href}>
                <td>{model.name}</td>
                <td>{model.manufacturer.name}</td>
                <td><img className="img-thumbnail" src={model.picture_url} width={250} alt={model.name} /></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
export default ModelList;
