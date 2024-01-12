import { useEffect, useState } from "react";
import axios from "axios";

export default function RowsCompetences() {
  const [competences, setCompetences] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/acquerir/getAll"
        );
        const uniqueCompetences = Array.from( new Set( response.data));

        setCompetences(uniqueCompetences);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <tbody className="table-tbody">
      {competences &&
        competences.length > 0 &&
        competences.map((competence) => (
          <tr className="align-middle" key={competence.typeStage.codeType + competence.competence.codeCompetence}>
            <td>{competence.typeStage.codeType}</td>
            <td>{competence.competence.libelle}</td>
            <td>{competence.nvExige}</td>
          </tr>
        ))}
    </tbody>
  );
}
