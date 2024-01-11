import { useRef } from 'react';
import { useForm } from 'react-hook-form';

export default function NewCompetenceModal() {
  const {handleSubmit, register, formState : {errors}} = useForm();

  const annulerRef = useRef(null);
  function onSubmit(data) {
    console.log(data);
    // Send post request
    annulerRef.current.click();
  }

  return (
    <div className="modal modal-blur fade" id="new-competence" tabIndex={-1} aria-hidden="true" style={{display: 'none'}}>
    <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
      <form className="modal-content" onSubmit={handleSubmit(onSubmit)}>
        <div className="modal-header">
          <h5 className="modal-title required">Nouvelle compétence</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body"> 
        <div className="row">
            <div className="col-lg-12">
              <div className="mb-3">
                <label className="form-label required">Label de la compétence</label>
                <input type="text" {...register("libelle", {required : true})} className="form-control" />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="mb-3">
                <label className="form-label">Description de la compétence</label>
                <textarea type="text" {...register("description")} className="form-control" />
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
