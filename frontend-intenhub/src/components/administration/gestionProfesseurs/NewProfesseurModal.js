import { useRef } from 'react';
import { useForm } from 'react-hook-form';

export default function NewStudentModal() {
  const {handleSubmit, register, formState : {errors}} = useForm();
  const annulerRef = useRef(null);
  function onSubmit(data) {
    console.log(data);
    // Send post request
    annulerRef.current.click();
  }

  return (
    <div className="modal modal-blur fade" id="new-professor" tabIndex={-1} aria-hidden="true" style={{display: 'none'}}>
    <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
      <form className="modal-content" onSubmit={handleSubmit(onSubmit)}>
        <div className="modal-header">
          <h5 className="modal-title required">Nouveau Professeur</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body"> 
        <div className="row">
              <div className="col-lg-4">
                <div className="mb-3">
                  <label className="form-label required">Nom du professeur</label>
                  <input type="text"  {...register("nomProf", {"required" : true})} className="form-control" />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="mb-3">
                  <label className="form-label required">Prenom du professeur</label>
                  <input type="text"  {...register("prenomProf", {"required" : true})} className="form-control" />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="mb-3">
                  <label className="form-label required">Sexe</label>
                  <select class="form-select"  {...register("genreProf", {"required" : true})} >
                    <option value="M">M</option>
                    <option value="F">F</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-3">
                  <label className="form-label">Date d'embauche</label>
                  <input className="form-control" type="text"  {...register("dateEmbauche")} />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-3">
                  <label className="form-label">Date de départ</label>
                  <input className="form-control" type="text"  {...register("dateDepart")} />
                </div>
              </div>
              <div className="col-lg-10">
                <div className="mb-3">
                  <label className="form-label">Adresse</label>
                  <input className="form-control" type="text"  {...register("adresseProf")} />
                </div>
              </div>
              <div className="col-lg-2">
                <div className="mb-3">
                  <label className="form-label">Code postal</label>
                  <input className="form-control" type="number"  {...register("codePostalProf")} />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-3">
                  <label className="form-label">Téléphone de Domicile</label>
                  <input className="form-control" type="text"  {...register("telDomicile")} />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-3">
                  <label className="form-label">Téléphone de l'école</label>
                  <input className="form-control" type="text"  {...register("telEcoleProf")} />
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
