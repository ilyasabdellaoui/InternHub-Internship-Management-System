import { useEffect, useState } from "react";
import axios from "axios";

export default function RowsManageprofesseur() {
  const [profs, setProfs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/professor/getAll"
        );
        console.log(response.data);
        const uniqueProfs = Array.from(
          new Set(
            response.data.map((prof) => ({
              ...prof,
              dateDepart: new Date(prof.dateDepart).toLocaleDateString(
                "fr-FR",
                {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                }
              ),
              dateEmbauche: new Date(prof.dateEmbauche).toLocaleDateString(
                "fr-FR",
                {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                }
              ),
            }))
          )
        );

        setProfs(uniqueProfs);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <tbody className="table-tbody">
      {profs &&
        profs.length > 0 &&
        profs.map((professeur) => (
          <tr className="align-middle" key={professeur.numProf}>
            <td> {professeur.numProf} </td>
            <td> {professeur.nomProf} </td>
            <td> {professeur.prenomProf} </td>
            <td>
              <button
                className="btn btn-warning w-100"
                data-bs-toggle="modal"
                data-bs-target={`#modal-${professeur.numProf}`}
              >
                Détails
              </button>
            </td>
            <div
              className="modal modal-blur fade"
              id={`modal-${professeur.numProf}`}
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
                    <h5 className="modal-title">Détails professeur</h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="mb-3">
                          <label className="form-label">
                            Nom du professeur
                          </label>
                          <input
                            type="text"
                            defaultValue={professeur.nomProf}
                            className="form-control"
                            disabled
                          />
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="mb-3">
                          <label className="form-label">
                            Prenom de l'étudiant
                          </label>
                          <input
                            type="text"
                            defaultValue={professeur.prenomProf}
                            className="form-control"
                            disabled
                          />
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="mb-3">
                          <label className="form-label">Sexe</label>
                          <select
                            class="form-select"
                            defaultValue={professeur.genreProf}
                            disabled
                          >
                            <option value="M">M</option>
                            <option value="F">F</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">Date d'embauche</label>
                          <input
                            className="form-control"
                            type="text"
                            defaultValue={professeur.dateEmbauche}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">Date de départ</label>
                          <input
                            className="form-control"
                            type="text"
                            defaultValue={professeur.dateDepart}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="col-lg-10">
                        <div className="mb-3">
                          <label className="form-label">Adresse</label>
                          <input
                            className="form-control"
                            type="text"
                            defaultValue={professeur.adresseProf}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="col-lg-2">
                        <div className="mb-3">
                          <label className="form-label">Code postal</label>
                          <input
                            className="form-control"
                            type="number"
                            defaultValue={professeur.codePostalProf}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Téléphone de Domicile
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            defaultValue={professeur.telDomicile}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Téléphone de l'école
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            defaultValue={professeur.telEcoleProf}
                            disabled
                          />
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
