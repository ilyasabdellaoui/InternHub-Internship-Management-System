import Footer from "../../components/Footer";
import NewInternshipModal from "../../components/etudiant/NewInternshipModal";
import Navbar from "../../components/Navbar";
import PageHeader from "../../components/PageHeader";
import RowsStudent from "../../components/etudiant/RowsStudent";
import TableStudent from "../../components/etudiant/TableStudent";
import { useEffect, useState } from "react";
import axios from "axios";

export default function InterListStudent() {
  const [nom, setNom] = useState("");
  useEffect(() => {
    axios
      .post("http://localhost:8080/student/get", {
        numEtu: localStorage.getItem("numEtu"),
      })
      .then((response) => {
        setNom(response.data.nomEtu + " " + response.data.prenomEtu);
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
        {nom && nom.length > 0 && <Navbar nom={nom} fonction="Etudiant" />}
        <div className="h-100 page-wrapper">
          <PageHeader
            title="Mes stages"
            btnType="primary"
            btnText="+ Ajouter un stage"
            target="#new-internship"
          />
          <NewInternshipModal studentId={localStorage.getItem("numEtu")} />
          <TableStudent>
            <RowsStudent />
          </TableStudent>
          <Footer />
        </div>
      </div>
    </div>
  );
}
