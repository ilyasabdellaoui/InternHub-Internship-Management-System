import React from 'react'

export default function RowsProfesseur() {
  // Here send the prof identifier to fetch relates internships
  const internships = [
    {
      "idStage": 123,
      "nomEtu" : "Said",
      "prenomEtu" : "Najim",
      "dateDebut": "2023-01-02",
      "dateFin": "2024-01-02",
      "entreprise" : "Intenhub",
      "villeEntreprise" : "Rabat",
      "contactEntreprise" : "06xxxxxxxx",
      "enacdrantEntreprise" : "Ilyas ABDELLAOUI",
      "contactEncadrant" : "ilyasabdellaoui@pro.ma", 
      "niveau" : "2A",
      "numero" : "1er"
    },
    {
      "idStage": 1234,
      "nomEtu" : "Ilyas",
      "prenomEtu" : "Abdellaoui",
      "dateDebut": "2025-01-02",
      "dateFin": "2026-01-02",
      "entreprise" : "Good",
      "villeEntreprise" : "Rabat",
      "contactEntreprise" : "06xxxxxxxx",
      "enacdrantEntreprise" : "Ilyas ABDELLAOUI",
      "contactEncadrant" : "ilyasabdellaoui@pro.ma", 
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
        <td> {internship.nomEtu} {internship.prenomEtu} </td>
        <td className="sort-date-debut" data-date={Math.floor(new Date(internship.dateDebut).getTime() / 1000)}>
          {internship.dateDebut}
        </td>
        <td className="sort-date-fin" data-date={Math.floor(new Date(internship.dateFin).getTime() / 1000)}>
          {internship.dateFin}
        </td>
        <td>{internship.entreprise}</td>
        <td>{internship.niveau}</td>
        <td>{internship.numero}</td>
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
                  <div className="col-lg-12">
                    <div className="mb-3">
                      <label className="form-label">Nom de l'étudiant</label>
                      <input type="text" value={internship.nomEtu + " " + internship.prenomEtu} className="form-control" disabled />
                    </div>
                  </div>
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
                      <input type="text" value={internship.niveau} className="form-control" disabled/>
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <div className="mb-3">
                      <label className="form-label">Ordre</label>
                      <input type="text" value={internship.numero} className="form-control" disabled />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="mb-3">
                      <label className="form-label">Nom entreprise</label>
                      <input type="text" value={internship.entreprise} className="form-control" disabled />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="mb-3">
                      <label className="form-label">Ville entreprise</label>
                      <input type="text" value={internship.villeEntreprise} className="form-control" disabled />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="mb-3">
                      <label className="form-label">Contact entreprise</label>
                      <input type="text" value={internship.contactEntreprise} placeholder="Email ou GSM" className="form-control" disabled />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">Encadrant entreprise</label>
                      <input type="text" value={internship.enacdrantEntreprise} placeholder="Nom complet" className="form-control" disabled />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">Contact encadrant</label>
                      <input type="text" value={internship.contactEncadrant} placeholder="Email ou GSM" className="form-control" disabled />
                    </div>
                  </div>
                </div>
              </div>
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
