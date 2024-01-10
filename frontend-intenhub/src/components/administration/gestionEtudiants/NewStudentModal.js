import { useRef } from 'react';
import { useForm } from 'react-hook-form';

export default function NewStudentModal() {
  const {handleSubmit, register, formState : {errors}} = useForm();
  const propositionPromo = new Date().getFullYear() + 3;
  const annulerRef = useRef(null);
  function onSubmit(data) {
    console.log(data);
    // Send post request
    annulerRef.current.click();
  }

  return (
    <div className="modal modal-blur fade" id="new-student" tabIndex={-1} aria-hidden="true" style={{display: 'none'}}>
    <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
      <form className="modal-content" onSubmit={handleSubmit(onSubmit)}>
        <div className="modal-header">
          <h5 className="modal-title required">Nouveau étudiant</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body"> 
          <div className="row">
            <div className="col-lg-4">
              <div className="mb-3">
                <label className="form-label required">Nom de l'étudiant</label>
                <input type="text" name="dateDebut" {...register("nomEtu", {"required" : true})} className="form-control" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mb-3">
                <label className="form-label required">Prenom de l'étudiant</label>
                <input type="text" name="dateFin" {...register("prenomEtu", {"required" : true})} className="form-control" />
              </div>
            </div>
            <div className="col-lg-2">
              <div className="mb-3">
                <label className="form-label required">Promo</label>
                <input type="number" defaultValue={propositionPromo} {...register("promo.anneePromo", {"required" : true})} className="form-control" />
              </div>
            </div>
            <div className="col-lg-2">
              <div className="mb-3">
                <label className="form-label required">Sexe</label>
                <select class="form-select" {...register("sexeEtu", {"required" : true})} name="numero">
                  <option value="M">M</option>
                  <option value="F">F</option>
                </select>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mb-3">
                <label className="form-label">Date de naissance</label>
                <input type="text" {...register("dateNaiss")} className="form-control" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mb-3">
                <label className="form-label">Numéro de téléphone</label>
                <input type="text" {...register("telEtu")} className="form-control" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mb-3">
                <label className="form-label">Ville de provenance</label>
                <input type="text" {...register("villeEtu")} className="form-control" />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="mb-3">
                <label className="form-label">Adresse de l'étudiant</label>
                <input type="text" {...register("adresseEtu")} className="form-control" />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="mb-3">
                <label className="form-label">Suite adresse</label>
                <input type="text" {...register("suiteEtu")} className="form-control" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mb-3">
                <label className="form-label">Code postal</label>
                <input type="text" {...register("codePostalEtu")} className="form-control" />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="mb-3">
                <label className="form-label">Mention de l'étudiant</label>
                <textarea type="text" {...register("mention")} className="form-control" />
              </div>
            </div>
          </div>
        </div>
        {/* En révision (can delete and update), Accepté, En cours, Achevé */}
        <div className="modal-footer">
          <a ref={annulerRef} href="/" className="btn btn-link link-secondary me-auto" data-bs-dismiss="modal">
            Annuler
          </a>
          { Object.keys(errors).length > 0 && <div className="ms-auto"><p className='form-hint text-danger'>Erreur</p></div>}
          <div className="ms-auto">
            <button type='submit' className="btn btn-success ms-2">
              Ajouter
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
  )
}
