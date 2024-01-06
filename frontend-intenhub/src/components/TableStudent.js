export default function TableStudent({children}) {
  return (
    <div className="page-body">
    <div className="container-xl">
      <div className="card">
        <div className="card-body">
          <div id="table-default" className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th><button className="table-sort" data-sort="sort-date-debut">Date debut</button></th>
                <th><button className="table-sort" data-sort="sort-date-fin">Date fin</button></th>
                <th><button className="table-sort" data-sort="sort-entreprise">Entreprise</button></th>
                <th><button className="table-sort" data-sort="sort-niveau">Niveau</button></th>
                <th><button className="table-sort" data-sort="sort-num">Numéro</button></th>
                <th><button className="table-sort" data-sort="sort-statut">Statut</button></th>
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
