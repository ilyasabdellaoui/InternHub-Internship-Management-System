import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import PageHeader from "../../components/PageHeader";
import TableProfesseur from "../../components/professeur/TableProfesseur";
import RowsProfesseur from "../../components/professeur/RowsProfesseur";
import { useEffect, useState } from "react";
import axios from "axios";

export default function InterListProfesseur() {
  const [nom, setNom] = useState("");
  useEffect(() => {
    axios
      .post("http://localhost:8080/professor/get", {
        numProf: localStorage.getItem("numProf").toString(),
      })
      .then((response) => {
        setNom(response.data.nomProf + " " + response.data.prenomProf);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div
      className="h-100"
      style={{ fontFamily: "var(--tblr-body-font-family)" }}
    >
      <div className="h-100 page">
        <Navbar nom={nom} fonction="Professeur" />
        <div className="h-100 page-wrapper">
          <PageHeader title="Mes stages à encadrer" />
          <TableProfesseur>
            <RowsProfesseur />
          </TableProfesseur>
          <Footer />
        </div>
      </div>
    </div>
  );
}
