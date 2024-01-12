import { useEffect, useState } from "react";
import axios from "axios";

export default function ModaliteCompetences() {
  const [competences, setCompetences] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/competence/getAll"
        );
        const fetchedCompetences = Array.from(new Set(response.data));
        setCompetences(fetchedCompetences);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSkillSelectChange = (event) => {
    const selectedValue = event.target.value;

    if (selectedValue === "new") {
      window.open("/admin/competences", "_blank");
    }
  };

  return (
    <div className="col-12">
      {/* Add Acquis de chaque stage */}
      <div className="card">
        <div style={{ width: "100%" }} className="card-header">
          <h3 className="card-title me-auto">Éxigences des stages</h3>
          <select
            style={{ width: "20%" }}
            className="form-select border-info border-wide"
          >
            <option value={31}>3A - 2ème</option>
            <option value={32}>3A - 1er</option>
            <option value={22}>2A - 2ème</option>
            <option value={21}>2A - 1er</option>
            <option value={11}>1A - 1er</option>
          </select>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table mb-0" style={{ width: "100%" }}>
              <thead>
                <tr>
                  <th>compétence</th>
                  <th>Niveau requis</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <select
                      id="skillSelect"
                      onChange={handleSkillSelectChange}
                      className="form-select"
                    >
                      {competences &&
                        competences.length > 0 &&
                        competences.map((competence) => (
                          <option
                            key={competence.codeCompetence}
                            value={competence.codeCompetence}
                          >
                            {competence.libelle}
                          </option>
                        ))}
                      <option value="new">+ Nouvelle compétence</option>
                    </select>
                  </td>
                  <td>
                    <input type="number" className="form-control" />
                  </td>
                  <td>
                    <a
                      href="/"
                      className="btn btn-pinterest w-100 btn-icon"
                      title="Se déconnecter"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                    >
                      Supprimer
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="card-footer text-end">
          <button type="submit" className="btn btn-warning">
            Enregistrer
          </button>
        </div>
      </div>
    </div>
  );
}
