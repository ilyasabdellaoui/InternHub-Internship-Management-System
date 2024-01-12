import axios from "axios";
import { useState } from "react";

function CalendierFormRow({ annee, stage }) {
  const [data, setData] = useState({
    typeStage: annee * 10 + stage,
    dateDebut: "",
    dateFin: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    axios
      .post("http://localhost:8080/modalitedate/update", data)
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div className="row">
      <div className="col m-1">
        <input
          type="text"
          defaultValue={`${annee}A`}
          className="form-control"
          disabled
        />
      </div>
      <div className="col m-1">
        <input
          type="text"
          defaultValue={stage}
          className="form-control"
          disabled
        />
      </div>
      <div className="col m-1">
        <input
          type="date"
          name="dateDebut"
          className="form-control"
          onChange={(e) => {
            setData({ ...data, dateDebut: e.target.value });
          }}
        />
      </div>
      <div className="col m-1">
        <input
          type="date"
          name="dateFin"
          className="form-control"
          onChange={(e) => {
            setData({ ...data, dateFin: e.target.value });
          }}
        />
      </div>
      <div className="col m-1">
        <button className="btn btn-success w-100" onClick={handleSubmit}>
          Enregistrer
        </button>
      </div>
    </div>
  );
}

export default CalendierFormRow;
