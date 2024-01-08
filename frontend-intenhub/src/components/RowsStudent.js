import React from 'react'

export default function RowsStudent() {
  const internships = [
    {
      "idStage": 123,
      "dateDebut": "2023-01-02",
      "dateFin": "2024-01-02",
      "entreprise" : "Intenhub",
      "villeEntreprise" : "Rabat",
      "contactEntreprise" : "06xxxxxxxx",
      "enacdrantEntreprise" : "Ilyas ABDELLAOUI",
      "contactEncadrant" : "ilyasabdellaoui@pro.ma", 
      "profEncadrant" : "Karim SBAINA",
      "niveau" : "2A",
      "numero" : "1er",
      "statut" : "En révision"
    },
    {
      "idStage": 1234,
      "dateDebut": "2025-01-02",
      "dateFin": "2026-01-02",
      "entreprise" : "Good",
      "villeEntreprise" : "Rabat",
      "contactEntreprise" : "06xxxxxxxx",
      "enacdrantEntreprise" : "Ilyas ABDELLAOUI",
      "contactEncadrant" : "ilyasabdellaoui@pro.ma", 
      "profEncadrant" : "Karim SBAINA",
      "niveau" : "1A",
      "numero" : "2ème",
      "statut" : "En cours"   
    }
  ];
  return (
    <tbody className="table-tbody">
      {internships.map((internship) => (
        <tr className="align-middle" key={internship.idStage}>
        {/* Lharba: this is UNIX timestamp = sec elapsed since Jan 1, 1970 (the Unix epoch) */}
        <td className="sort-date-debut" data-date={Math.floor(new Date(internship.dateDebut).getTime() / 1000)}>
          {internship.dateDebut}
        </td>
        <td className="sort-date-fin" data-date={Math.floor(new Date(internship.dateFin).getTime() / 1000)}>
          {internship.dateFin}
        </td>
        <td className="sort-entreprise">{internship.entreprise}</td>
        <td className="sort-niveau">{internship.niveau}</td>
        <td className="sort-num">{internship.numero}</td>
        <td className="sort-statut">{internship.statut}</td>
        <td><button className="btn btn-warning w-100" data-bs-toggle="modal" data-bs-target={`#modal-${internship.idStage}`}>
            Détails
        </button></td>
        <div className="modal modal-blur fade" id={`modal-${internship.idStage}`} tabIndex={-1} aria-hidden="true" style={{display: 'none'}}>
          <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
            <form className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Détails stage</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="mb-3">
                      <label className="form-label">Date début</label>
                      <input type="text" value={internship.dateDebut} className="form-control" disabled />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="mb-3">
                      <label className="form-label">Date fin</label>
                      <input type="text" value={internship.dateFin} className="form-control" disabled />
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <div className="mb-3">
                      <label className="form-label">Année</label>
                      <input type="text" value={internship.niveau} className="form-control" disabled />
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <div className="mb-3">
                      <label className="form-label">Ordre</label>
                      <input type="text" value={internship.numero} className="form-control" />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="mb-3">
                      <label className="form-label">Nom entreprise</label>
                      <input type="text" value={internship.entreprise} className="form-control" />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="mb-3">
                      <label className="form-label">Ville entreprise</label>
                      <input type="text" value={internship.villeEntreprise} className="form-control" />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="mb-3">
                      <label className="form-label">Contact entreprise</label>
                      <input type="text" value={internship.contactEntreprise} placeholder="Email ou GSM" className="form-control" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">Encadrant entreprise</label>
                      <input type="text" value={internship.enacdrantEntreprise} placeholder="Nom complet" className="form-control" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">Contact encadrant</label>
                      <input type="text" value={internship.contactEncadrant} placeholder="Email ou GSM" className="form-control" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">Professeur encadrant</label>
                      <input type="text" value={internship.profEncadrant} disabled className="form-control" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">Convention</label>
                      <a href="/" className="btn btn-success w-100">Télécharger convention</a>
                    </div>
                  </div>
                </div>
              </div>
              {/* En révision (can delete and update), Accepté, En cours, Achevé */}
              <div className="modal-footer">
                <a href="/" className="btn btn-link link-secondary" data-bs-dismiss="modal">
                  Annuler
                </a>
                { internship.statut === "En révision" && <div className="ms-auto">
                  <a href="/" className="btn btn-danger" data-bs-dismiss="modal">
                    Supprimer
                  </a>
                  <button type='submit' className="btn btn-info ms-2" data-bs-dismiss="modal">
                    Enregistrer
                  </button>
                </div>}
              </div>
            </form>
          </div>
        </div>
        </tr>
      ))}
    </tbody>
  )
}
