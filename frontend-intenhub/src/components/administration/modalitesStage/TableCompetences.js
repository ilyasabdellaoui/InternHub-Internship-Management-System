export default function TableCompetences({children}) {
  return (
    <div className="col-12">
      <div className="card">
      <div className="card-header">
          <h3 className="card-title">Éxigences requises aux stages</h3>
        </div>
        <div className="card-body">
          <div id="table-default" className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Type stage</th>
                <th>Libelle compétence</th>
                <th>Niveau requis</th>
              </tr>
            </thead>
              {children}
          </table>
          </div>
        </div>
      </div>
    </div>
  )
}
