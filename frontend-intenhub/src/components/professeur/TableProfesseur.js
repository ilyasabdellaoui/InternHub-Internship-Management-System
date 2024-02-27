export default function TableProfesseur({children}) {
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
                <th>Date debut</th>
                <th>Date fin</th>
                <th>Entreprise</th>
                <th>Niveau</th>
                <th>Numéro</th>
                <th>Infos</th>
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
