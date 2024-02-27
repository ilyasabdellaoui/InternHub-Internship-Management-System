import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function NewStudentModal() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const [promoList, setPromoList] = useState([]);

  // const propositionPromo = new Date().getFullYear() + 3;
  const annulerRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      axios.get("http://localhost:8080/promo/getAll").then((res) => {
        res.data.map((promo) => {
          setPromoList((promoList) => [...promoList, promo.anneePromo]);
          setPromoList((promoList) => [...new Set(promoList)]);
        });
      });
    };
    fetchData();
    promoList && console.log(promoList);
  }, []);

  function onSubmit(data) {
    // const d = {
    //   promo: {
    //     anneePromo: "2025",
    //   },
    //   numDsPromo: "18",
    //   qualiteEtu: "M",
    //   nomEtu: "bn9lan",
    //   prenomEtu: "flan",
    //   codePostalEtu: "20210",
    //   dateNaiss: "2002-03-03",
    //   mention: "ins",
    //   telEtu: "0601020304",
    // };
    console.log(data);
    axios.post("http://localhost:8080/student/add", data).then((res) => {
      console.log(res.data);
    });
    annulerRef.current.click();
    // setTimeout(() => {
    //   window.location.reload();
    // }, 100);
  }

  return (
    <div
      className="modal modal-blur fade"
      id="new-student"
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
            <h5 className="modal-title required">Nouveau étudiant</h5>
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
                    {...register("nomEtu", { required: true })}
                    className="form-control"
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
                    {...register("prenomEtu", { required: true })}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-lg-2">
                <div className="mb-3">
                  <label className="form-label required">Promo</label>
                  {promoList && promoList.length > 0 && (
                    <input
                      type="number"
                      defaultValue={Math.min(...promoList)}
                      {...register("promo.anneePromo", { required: true })}
                      className="form-control"
                      min={Math.min(...promoList)}
                      max={Math.max(...promoList)}
                    />
                  )}
                  {/* <select
                    class="form-select"
                    {...register("promo.anneePromo", { required: true })}
                    name="anneePromo"
                  >
                    {promoList &&
                      promoList.length > 0 &&
                      promoList.map((promo) => (
                        <option value={promo}>{promo}</option>
                      ))}
                  </select> */}
                </div>
              </div>
              <div className="col-lg-2">
                <div className="mb-3">
                  <label className="form-label required">Sexe</label>
                  <select
                    class="form-select"
                    {...register("qualiteEtu", { required: true })}
                    name="numero"
                  >
                    <option value="M">M</option>
                    <option value="F">F</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="mb-3">
                  <label className="form-label">Date de naissance</label>
                  <input
                    type="text"
                    {...register("dateNaiss")}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="mb-3">
                  <label className="form-label">Numéro de téléphone</label>
                  <input
                    type="text"
                    {...register("telEtu")}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="mb-3">
                  <label className="form-label">Ville de provenance</label>
                  <input
                    type="text"
                    {...register("villeEtu")}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="mb-3">
                  <label className="form-label">Adresse de l'étudiant</label>
                  <input
                    type="text"
                    {...register("adresseEtu")}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="mb-3">
                  <label className="form-label">Suite adresse</label>
                  <input
                    type="text"
                    {...register("suiteEtu")}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="mb-3">
                  <label className="form-label">Code postal</label>
                  <input
                    type="text"
                    {...register("codePostalEtu")}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="mb-3">
                  <label className="form-label">Mention de l'étudiant</label>
                  <textarea
                    type="text"
                    {...register("mention")}
                    className="form-control"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* En révision (can delete and update), Accepté, En cours, Achevé */}
          <div className="modal-footer">
            <a
              ref={annulerRef}
              href="/"
              className="btn btn-link link-secondary me-auto"
              data-bs-dismiss="modal"
            >
              Annuler
            </a>
            {Object.keys(errors).length > 0 && (
              <div className="ms-auto">
                <p className="form-hint text-danger">Erreur</p>
              </div>
            )}
            <div className="ms-auto">
              <button type="submit" className="btn btn-success ms-2">
                Ajouter
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
