import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function RowsManageStudent() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log(data);
    window.location.href = "/";
  }

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
              ...student,
              dateNaiss: new Date(student.dateNaiss).toLocaleDateString(
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

        setStudents(uniqueStudents);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
            <td className="ms-auto">
              <a href="/" className="btn btn-danger w-100">
                Supprimer
              </a>
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
                  className="modal-content"
                  onSubmit={handleSubmit(onSubmit)}
                >
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
                          <label className="form-label required">
                            Nom de l'étudiant
                          </label>
                          <input
                            type="text"
                            name="dateDebut"
                            defaultValue={student.nomEtu}
                            {...register("nomEtu", { required: true })}
                            className="form-control"
                            disabled
                          />
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="mb-3">
                          <label className="form-label required">
                            Prenom de l'étudiant
                          </label>
                          <input
                            type="text"
                            name="dateFin"
                            defaultValue={student.prenomEtu}
                            {...register("prenomEtu", { required: true })}
                            className="form-control"
                            disabled
                          />
                        </div>
                      </div>
                      <div className="col-lg-2">
                        <div className="mb-3">
                          <label className="form-label required">Promo</label>
                          <input
                            type="number"
                            disabled
                            defaultValue={student.promo.anneePromo}
                            {...register("promo.anneePromo", {
                              required: true,
                            })}
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-lg-2">
                        <div className="mb-3">
                          <label className="form-label required">Sexe</label>
                          <select
                            class="form-select"
                            defaultValue={student.qualiteEtu}
                            {...register("qualiteEtu", { required: true })}
                            name="numero"
                            disabled
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
                            {...register("dateNaiss")}
                            className="form-control"
                            disabled
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
                            {...register("telEtu")}
                            className="form-control"
                            disabled
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
                            {...register("villeEtu")}
                            className="form-control"
                            disabled
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
                            {...register("adresseEtu")}
                            className="form-control"
                            disabled
                          />
                        </div>
                      </div>
                      <div className="col-lg-8">
                        <div className="mb-3">
                          <label className="form-label">Suite adresse</label>
                          <input
                            type="text"
                            defaultValue={student.suiteEtu}
                            {...register("suiteEtu")}
                            className="form-control"
                            disabled
                          />
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="mb-3">
                          <label className="form-label">Code postal</label>
                          <input
                            type="text"
                            defaultValue={student.codePostalEtu}
                            {...register("codePostalEtu")}
                            className="form-control"
                            disabled
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
                            {...register("mention")}
                            className="form-control"
                            disabled
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* En révision (can delete and update), Accepté, En cours, Achevé */}
                </form>
              </div>
            </div>
          </tr>
        ))}
    </tbody>
  );
}
