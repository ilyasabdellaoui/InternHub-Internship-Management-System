export default function TableManageStudent({children}) {
  return (
    <div className="page-body">
    <div className="container-xl">
      <div className="card">
        <div className="card-body">
          <div id="table-default" className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Identifiant</th>
                <th>Nom</th>
                <th>Prenom</th>
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
