import axios from "axios";
import { useForm } from "react-hook-form";
import { useRef } from "react";

export default function NewInternshipModal({ studentId }) {
  const annulerRef = useRef();
  const etudiant = {
    etudiant: {
      numEtu: 253,
    },
    professeur: {
      numProf: "P1",
    },
    tuteur: {
      numTut: "T1",
    },
    typeStage: {
      codeType: 11,
    },
    dateDebut: "2024-01-12T13:33:12.474Z",
    dateFin: "2024-01-12T13:33:12.474Z",
    annee: "2024",
  };
  const promo = "20" + studentId.toString().substring(0, 2);
  const currentYear = new Date().getFullYear();
  var annee = currentYear - parseInt(promo);
  switch (annee) {
    case 0:
      annee = "3A";
      break;
    case 1:
      annee = "2A";
      break;
    default:
      annee = "1A";
  }

  // I have to send anneee + ordre to receive this
  const dates = [
    {
      dateDebut: new Date(etudiant.dateDebut).toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }),
      dateFin: new Date(etudiant.dateFin).toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }),
    },
  ];

  const {
    handleSubmit,
    setValue,
    register,
    formState: { errors },
  } = useForm();
  function onSubmit(data) {
    setValue("numero", "1");
    // I have to send the post request here
    console.log(data);
  }

  const handleAjouter = () => {
    axios
      .post("http://localhost:8080/stage/add", etudiant)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    annulerRef.current.click();
  };

  return (
    <div
      className="modal modal-blur fade"
      id="new-internship"
      tabIndex={-1}
      aria-hidden="true"
      style={{ display: "none" }}
    >
      <div
        className="modal-dialog modal-lg modal-dialog-centered"
        role="document"
      >
        <form className="modal-content" onSubmit={handleSubmit(onSubmit)}>
          <div className="modal-header">
            <h5 className="modal-title">Nouveau stage</h5>
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
                  <label className="form-label">Date début</label>
                  <input
                    type="text"
                    name="dateDebut"
                    value={dates[0].dateDebut}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="mb-3">
                  <label className="form-label">Date fin</label>
                  <input
                    type="text"
                    name="dateFin"
                    value={dates[0].dateFin}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-lg-2">
                <div className="mb-3">
                  <label className="form-label">Année</label>
                  <input
                    type="text"
                    value={annee}
                    name="niveau"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-lg-2">
                <div className="mb-3">
                  <label className="form-label">Ordre</label>
                  <input
                    type="text"
                    {...register("numero")}
                    name="numero"
                    defaultValue="1"
                    className="form-control"
                  />
                  {annee !== "1A" && (
                    <select
                      class="form-select"
                      {...register("numero", { required: true })}
                      name="numero"
                    >
                      <option value="1">Premier</option>
                      <option value="2">Deuxième</option>
                    </select>
                  )}
                </div>
              </div>
              <div className="col-lg-4">
                <div className="mb-3">
                  <label className="form-label">Nom entreprise</label>
                  <input
                    type="text"
                    {...register("entreprise", { required: true })}
                    name="entreprise"
                    defaultValue={"ioSolutions"}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="mb-3">
                  <label className="form-label">Ville entreprise</label>
                  <input
                    type="text"
                    {...register("villeEntreprise", { required: true })}
                    name="villeEntreprise"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="mb-3">
                  <label className="form-label">Contact entreprise</label>
                  <input
                    type="text"
                    {...register("contactEntreprise", { required: true })}
                    name="contactEntreprise"
                    placeholder="Email ou GSM"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-3">
                  <label className="form-label">Encadrant entreprise</label>
                  <input
                    type="text"
                    {...register("enacdrantEntreprise", { required: true })}
                    name="enacdrantEntreprise"
                    placeholder="Nom complet"
                    className="form-control"
                    defaultValue={"Bouali Kaiss"}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-3">
                  <label className="form-label">Contact encadrant</label>
                  <input
                    type="text"
                    {...register("contactEncadrant", { required: true })}
                    name="contactEncadrant"
                    placeholder="Email ou GSM"
                    className="form-control"
                    defaultValue={"ilyasabdellaoui@pro.ma"}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* En révision (can delete and update), Accepté, En cours, Achevé */}
          <div className="modal-footer">
            <a
              href="/"
              className="btn btn-link link-secondary me-auto"
              data-bs-dismiss="modal"
              ref={annulerRef}
            >
              Annuler
            </a>
            {Object.keys(errors).length > 0 && (
              <div className="ms-auto">
                <p className="form-hint text-danger">Erreur</p>
              </div>
            )}
            <div className="ms-auto">
              <button onClick={handleAjouter} className="btn btn-success ms-2">
                Ajouter
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
