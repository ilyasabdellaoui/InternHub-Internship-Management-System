export default function ModaliteDates() {
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
              <tr>
                <th style={{width: '20%'}}>Annee</th>
                <th style={{width: '20%'}}>Ordre</th>
                <th>Date debut</th>
                <th>Date fin</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="text" defaultValue="3A" className="form-control" disabled /></td>
                <td>
                  <input type="text" defaultValue={2} className="form-control" disabled /></td>
                <td>
                  <input type="text" className="form-control" /></td>
                <td>
                  <input type="text" className="form-control" /></td>
              </tr>
              <tr>
                <td>
                  <input type="text" defaultValue="3A" className="form-control" disabled /></td>
                <td>
                  <input type="text" defaultValue={1} className="form-control" disabled /></td>
                <td>
                  <input type="text" className="form-control" /></td>
                <td>
                  <input type="text" className="form-control" /></td>
              </tr>
              <tr>
                <td>
                  <input type="text" defaultValue="2A" className="form-control" disabled /></td>
                <td>
                  <input type="text" defaultValue={2} className="form-control" disabled /></td>
                <td>
                  <input type="text" className="form-control" /></td>
                <td>
                  <input type="text" className="form-control" /></td>
              </tr>
              <tr>
                <td>
                  <input type="text" defaultValue="2A" className="form-control" disabled /></td>
                <td>
                  <input type="text" defaultValue={1} className="form-control" disabled /></td>
                <td>
                  <input type="text" className="form-control" /></td>
                <td>
                  <input type="text" className="form-control" /></td>
              </tr>
              <tr>
                <td>
                  <input type="text" defaultValue="1A" className="form-control" disabled /></td>
                <td>
                  <input type="text" defaultValue={1} className="form-control" disabled /></td>
                <td>
                  <input type="text" className="form-control" /></td>
                <td>
                  <input type="text" className="form-control" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="card-footer text-end">
        <button type="submit" className="btn btn-warning">Enregistrer</button>
      </div>
    </form>
  </div>
  )
}
