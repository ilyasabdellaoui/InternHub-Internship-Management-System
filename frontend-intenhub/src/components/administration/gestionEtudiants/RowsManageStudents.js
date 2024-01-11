export default function RowsManageStudent() {
  const students = [
    {
      "numEtu": 123,
      "promo": {
        "anneePromo": "2027"
      },
      "nomEtu": "Najim",
      "prenomEtu" : "Said"
    },
    {
      "numEtu": 124,
      "promo": {
        "anneePromo": "2026"
      },
      "nomEtu": "Abdellaoui",
      "prenomEtu" : "Ilyas"
    }
  ];
  return (
    <tbody className="table-tbody">
      {students.map((student) => (
        <tr className="align-middle" key={student.numEtu}>
        <td> {student.numEtu} </td>
        <td> {student.promo.anneePromo} </td>
        <td> {student.nomEtu} </td>
        <td> {student.prenomEtu} </td>
        <td><button className="btn btn-warning w-100" data-bs-toggle="modal" data-bs-target={`#modal-${student.numEtu}`}>
            Détails
        </button></td>
        {/* TO DO : Delete the student record (by student.numEtu) */}
        <td className="ms-auto">
          <a href="/" className="btn btn-danger w-100">Supprimer</a>
        </td>
        <div className="modal modal-blur fade" id={`modal-${student.numEtu}`} tabIndex={-1} aria-hidden="true" style={{display: 'none'}}>
          <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
            <form className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Détails étudiant</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
              <div className="row">
            <div className="col-lg-4">
              <div className="mb-3">
                <label className="form-label">Nom de l'étudiant</label>
                <input type="text" name="dateDebut" defaultValue={student.nomEtu} disabled className="form-control"/>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mb-3">
                <label className="form-label">Prenom de l'étudiant</label>
                <input type="text" name="dateFin" defaultValue={student.prenomEtu} disabled className="form-control"/>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="mb-3">
                <label className="form-label">Promo</label>
                <input type="number" defaultValue={student.promo.anneePromo} disabled className="form-control" />
              </div>
            </div>
            <div className="col-lg-2">
              <div className="mb-3">
                <label className="form-label">Sexe</label>
                <select class="form-select" defaultValue={student.sexeEtu} disabled>
                  <option value="M">M</option>
                  <option value="F">F</option>
                </select>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mb-3">
                <label className="form-label">Date de naissance</label>
                <input type="text" defaultValue={student.dateNaiss} disabled className="form-control" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mb-3">
                <label className="form-label">Numéro de téléphone</label>
                <input type="text" defaultValue={student.telEtu} disabled className="form-control" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mb-3">
                <label className="form-label">Ville de provenance</label>
                <input type="text" defaultValue={student.villeEtu} disabled className="form-control" />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="mb-3">
                <label className="form-label">Adresse de l'étudiant</label>
                <input type="text" defaultValue={student.adresseEtu} disabled className="form-control" />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="mb-3">
                <label className="form-label">Suite adresse</label>
                <input type="text" defaultValue={student.suiteEtu} disabled className="form-control" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mb-3">
                <label className="form-label">Code postal</label>
                <input type="text" defaultValue={student.codePostalEtu} disabled className="form-control" />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="mb-3">
                <label className="form-label">Mention de l'étudiant</label>
                <textarea type="text" defaultValue={student.mention} disabled className="form-control" />
              </div>
            </div>
          </div>
              </div>
              {/* En révision (can delete and update), Accepté, En cours, Achevé */}
              <div className="modal-footer">
                <a href="/" className="btn btn-link link-secondary" data-bs-dismiss="modal">
                  Annuler
                </a>
              </div>
            </form>
          </div>
        </div>
        </tr>
      ))}
    </tbody>
  )
}
