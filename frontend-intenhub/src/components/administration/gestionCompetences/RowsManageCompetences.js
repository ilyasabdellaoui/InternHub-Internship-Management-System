import React, { useEffect, useState } from "react";
import axios from "axios";

export default function RowsManageCompetences() {
  const [competences, setCompetences] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/competence/getAll"
        );
        console.log(response.data);
        const uniqueCompetences = Array.from(new Set(response.data));

        setCompetences(uniqueCompetences);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // const competences = [
  //   {
  //     "codeCompetence": 123,
  //     "libelle": "Boom Boom",
  //     "description" : "kat3rf dir boom boom, kat3rf dir boom boom, kat3rf dir boom boom ..."
  //   },
  //   {
  //     "codeCompetence": 1223,
  //     "libelle": "Zda7 Zda7",
  //     "description" : "kat3rf dir Zda7 Zda7, kat3rf dir Zda7 Zda7, kat3rf dir Zda7 Zda7 ..."
  //   }
  // ];

  return (
    <tbody className="table-tbody">
      {competences.map((competence) => (
        <tr className="align-middle" key={competence.codeCompetence}>
          <td> {competence.codeCompetence} </td>
          <td> {competence.libelle} </td>
          <td className="text-truncate">{competence.description}</td>
          <td>
            <button
              className="btn btn-warning w-100"
              data-bs-toggle="modal"
              data-bs-target={`#modal-${competence.codeCompetence}`}
            >
              Détails
            </button>
          </td>
          {/* TO DO : Delete the competence record (by competence.codeCompetence) */}
          <td className="ms-auto">
            <a href="/" className="btn btn-danger w-100">
              Supprimer
            </a>
          </td>
          <div
            className="modal modal-blur fade"
            id={`modal-${competence.codeCompetence}`}
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
                  <h5 className="modal-title">
                    Détails de la compétence {competence.codeCompetence}
                  </h5>
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
                        <label className="form-label">
                          Label de la compétence
                        </label>
                        <input
                          type="text"
                          defaultValue={competence.libelle}
                          className="form-control"
                          disabled
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Description de la compétence
                        </label>
                        <textarea
                          type="text"
                          defaultValue={competence.description}
                          className="form-control"
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
