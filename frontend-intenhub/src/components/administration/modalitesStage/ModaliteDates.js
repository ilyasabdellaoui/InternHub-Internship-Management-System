import axios from "axios";


export default function ModaliteDates() {
  const handleASubmit = (e, typeStage) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(data);
    axios.post(`http://localhost:8080/modalitedate/update/`, data, {typeStage})
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  return (
    <div className="col-12">
    <form className="card">
      <div className="card-header">
        <h3 className="card-title">Calendrier des stages</h3>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table mb-0" style={{width: '100%'}}>
            <thead>
                <th className="text-center"  style={{width: '20%'}}>Annee</th>
                <th className="text-center"  style={{width: '20%'}}>Ordre</th>
                <th className="text-center" >Date debut</th>
                <th className="text-center" >Date fin</th>
                <th className="text-center" >Action</th>
            </thead>
          </table>
        </div>
          <div className="container">
              <form className="row" onSubmit={(e) => handleASubmit(e, "32")}>
                  <div className="col m-1"><input type="text" defaultValue="3A" className="form-control" disabled /></div>
                  <div className="col m-1"><input type="text" defaultValue={2} className="form-control" disabled /></div>
                  <div className="col m-1"><input type="date" name="dateDebut" className="form-control" /></div>
                  <div className="col m-1"><input type="date" name="dateFin" className="form-control" /></div>
                  <div className="col m-1"><button className="btn btn-success w-100" type="submit">Enregistrer</button></div>
              </form>
  
              <form className="row" action="">
                <input type="hidden" value="31"/>
                  <div className="col m-1"><input type="text" defaultValue="3A" className="form-control" disabled /></div>
                  <div className="col m-1"><input type="text" defaultValue={1} className="form-control" disabled /></div>
                  <div className="col m-1"><input type="date" className="form-control" /></div>
                  <div className="col m-1"><input type="date" className="form-control" /></div>
                  <div className="col m-1"><button className="btn btn-success w-100" type="submit">Enregistrer</button></div>
              </form>

              <form className="row" action="">
                <input type="hidden" value="22"/>
                  <div className="col m-1"><input type="text" defaultValue="2A" className="form-control" disabled /></div>
                  <div className="col m-1"><input type="text" defaultValue={2} className="form-control" disabled /></div>
                  <div className="col m-1"><input type="date" className="form-control" /></div>
                  <div className="col m-1"><input type="date" className="form-control" /></div>
                  <div className="col m-1"><button className="btn btn-success w-100" type="submit">Enregistrer</button></div>       
              </form>
              <form className="row" action="">
                <input type="hidden" value="32"/>        
                  <div className="col m-1"> <input type="text" defaultValue="2A" className="form-control" disabled /></div>
                  <div className="col m-1"> <input type="text" defaultValue={1} className="form-control" disabled /></div>
                  <div className="col m-1"> <input type="date" className="form-control" /></div>
                  <div className="col m-1"> <input type="date" className="form-control" /></div>
                  <div className="col m-1"><button className="btn btn-success w-100" type="submit">Enregistrer</button></div>
                  
              </form>

              <form className="row" action="">
                <input type="hidden" value="32"/>
                <div className="col m-1"><input type="text" defaultValue="1A" className="form-control" disabled /></div>
                <div className="col m-1"><input type="text" defaultValue={1} className="form-control" disabled /></div>
                <div className="col m-1"><input type="date" className="form-control" /></div>
                <div className="col m-1"><input type="date" className="form-control" /></div>
                <div className="col m-1"><button className="btn btn-success w-100" type="submit">Enregistrer</button></div>
              </form>
        </div>
      </div>
    </form>
  </div>
  )
}
