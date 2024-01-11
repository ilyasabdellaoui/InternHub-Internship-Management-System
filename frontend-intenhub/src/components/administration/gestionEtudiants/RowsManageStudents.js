import { useEffect, useState } from "react";
import axios from "axios";

export default function RowsManageStudent() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/student/getAll"
        );
        const uniqueStudents = Array.from(
          new Set(
            response.data.map((student) => ({
              numEtu: student.numEtu,
              promo: {
                anneePromo: student.promo.anneePromo,
              },
              nomEtu: student.nomEtu,
              prenomEtu: student.prenomEtu,
            }))
          )
        );

        setStudents(uniqueStudents);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // const students = [
  //   {
  //     "numEtu": 123,
  //     "promo": {
  //       "anneePromo": "2027"
  //     },
  //     "nomEtu": "Najim",
  //     "prenomEtu" : "Said"
  //   },
  //   {
  //     "numEtu": 124,
  //     "promo": {
  //       "anneePromo": "2026"
  //     },
  //     "nomEtu": "Abdellaoui",
  //     "prenomEtu" : "Ilyas"
  //   }
  // ];
  return (
    <tbody className="table-tbody">
      {students &&
        students.length > 0 &&
        students.map((student) => (
          <tr className="align-middle" key={student.numEtu}>
            <td className="sort-num-etu">{student.numEtu}</td>
            <td className="sort-date-fin">{student.promo.anneePromo}</td>
            <td className="sort-entreprise">{student.nomEtu}</td>
            <td className="sort-entreprise">{student.prenomEtu}</td>
            <td>
              <button
                className="btn btn-warning w-100"
                data-bs-toggle="modal"
                data-bs-target={`#modal-${student.numEtu}`}
              >
                Détails
              </button>
            </td>
            {/* TO DO : Delete the Professeur record (by professeur.numProf) */}
            <td className="ms-auto">
              <a href="/" className="btn btn-danger w-100">Supprimer</a>
            </td>
            <div
              className="modal modal-blur fade"
              id={`modal-${student.numEtu}`}
              tabIndex={-1}
              aria-hidden="true"
              style={{ display: "none" }}
            >
              <div
                className="modal-dialog modal-lg modal-dialog-centered"
                role="document"
              >
                <form
                  className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Détails étudiant</h5>
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
                            Nom de l'étudiant
                          </label>
                          <input
                            type="text"
                            name="dateDebut"
                            defaultValue={student.nomEtu}
                            className="form-control" disabled
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
                            name="dateFin"
                            defaultValue={student.prenomEtu}
                            className="form-control" disabled
                          />
                        </div>
                      </div>
                      <div className="col-lg-2">
                        <div className="mb-3">
                          <label className="form-label">Promo</label>
                          <input
                            type="number"
                            defaultValue={student.promo.anneePromo}
                            className="form-control" disabled
                          />
                        </div>
                      </div>
                      <div className="col-lg-2">
                        <div className="mb-3">
                          <label className="form-label">Sexe</label>
                          <select
                            class="form-select"
                            defaultValue={student.sexeEtu}
                            name="numero" disabled
                          >
                            <option value="M">M</option>
                            <option value="F">F</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="mb-3">
                          <label className="form-label">
                            Date de naissance
                          </label>
                          <input
                            type="text"
                            defaultValue={student.dateNaiss}
                            className="form-control" disabled
                          />
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="mb-3">
                          <label className="form-label">
                            Numéro de téléphone
                          </label>
                          <input
                            type="text"
                            defaultValue={student.telEtu}
                            className="form-control" disabled
                          />
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="mb-3">
                          <label className="form-label">
                            Ville de provenance
                          </label>
                          <input
                            type="text"
                            defaultValue={student.villeEtu}
                            className="form-control" disabled
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Adresse de l'étudiant
                          </label>
                          <input
                            type="text"
                            defaultValue={student.adresseEtu}
                            className="form-control" disabled
                          />
                        </div>
                      </div>
                      <div className="col-lg-8">
                        <div className="mb-3">
                          <label className="form-label">Suite adresse</label>
                          <input
                            type="text"
                            defaultValue={student.suiteEtu}
                            className="form-control" disabled
                          />
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="mb-3">
                          <label className="form-label">Code postal</label>
                          <input
                            type="text"
                            defaultValue={student.codePostalEtu}
                            className="form-control" disabled 
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Mention de l'étudiant
                          </label>
                          <textarea
                            type="text"
                            defaultValue={student.mention}
                            className="form-control" disabled
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
