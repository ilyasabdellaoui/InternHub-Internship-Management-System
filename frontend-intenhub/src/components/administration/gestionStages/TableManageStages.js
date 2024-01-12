export default function TableManageStages({children}) {
  return (
    <div className="page-body">
    <div className="container-xl">
      <div className="card">
        <div className="card-body">
          <div id="table-default" className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Nom de l'étudiant</th>
                <th>Entreprise</th>
                <th>Date fin</th>
                <th>Infos</th>
                <th>Approuver</th>
                <th>Refuser</th>
              </tr>
            </thead>
              {children}
          </table>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
