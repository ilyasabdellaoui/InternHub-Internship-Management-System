import { useEffect, useState } from "react";
import axios from "axios";

export default function RowsManageStages() {
  const [stages, setStages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/stage/getRevision"
        );
        console.log(response.data);
        const uniqueStages = Array.from(
          new Set(response.data)
        );

        setStages(uniqueStages);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <tbody className="table-tbody">
      {stages &&
        stages.length > 0 &&
        stages.map((stage) => (
          <tr className="align-middle" key={stage.numStage}>
            <td> {stage.etudiant.nomEtu} {stage.etudiant.prenomEtu} </td>
            <td> {stage.tuteur.entreprise.raisonSocial} </td>
            <td> {stage.dateFin} </td>
            <td>
              <button
                className="btn btn-warning w-100"
                data-bs-toggle="modal"
                data-bs-target={`#modal-${stage.numStage}`}
              >
                Détails
              </button>
            </td>
            {/* TO DO : Update internship status to Accepté */}
            <td className="ms-auto">
            <div method="get" action={`/stage/approve/${stage.numStage}`}>
              <button className="btn btn-success w-100">
                Approuver
              </button>
            </div>
            </td>
            <td className="ms-auto">
              <a href="/" className="btn btn-danger w-100">
                Supprimer
              </a>
            </td>
            <div
              className="modal modal-blur fade"
              id={`modal-${stage.numStage}`}
              tabIndex={-1}
              aria-hidden="true"
              style={{ display: "none" }}
            >
              <div
                className="modal-dialog modal-lg modal-dialog-centered"
                role="document"
              >
                <form className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Détails stage</h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <label className="form-label">Nom de l'étudiant</label>
                          <input type="text" value={stage.etudiant.nomEtu + " " + stage.etudiant.prenomEtu} className="form-control" disabled />
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="mb-3">
                          <label className="form-label">Date début</label>
                          <input type="text" value={stage.dateDebut} className="form-control" disabled />
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="mb-3">
                          <label className="form-label">Date fin</label>
                          <input type="text" value={stage.dateFin} className="form-control" disabled />
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="mb-3">
                          <label className="form-label">Nom entreprise</label>
                          <input type="text" value={stage.tuteur.entreprise.raisonSocial} className="form-control" disabled />
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="mb-3">
                          <label className="form-label">Ville entreprise</label>
                          <input type="text" value={stage.tuteur.entreprise.villeEntreprise} className="form-control" disabled />
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="mb-3">
                          <label className="form-label">Contact entreprise</label>
                          <input type="text" value={stage.tuteur.entreprise.contact} className="form-control" disabled />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">Encadrant entreprise</label>
                          <input type="text" value={stage.tuteur.nomTut + " " + stage.tuteur.prenomTut} className="form-control" disabled />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">Contact encadrant</label>
                          <input type="text" value={stage.tuteur.telTut} className="form-control" disabled />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <a
                      href="/"
                      className="btn btn-link link-secondary"
                      data-bs-dismiss="modal"
                    >
                      Annuler
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </tr>
        ))}
    </tbody>
  );
}
