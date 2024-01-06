export default function NewInternshipModal() {
  return (
    <div className="modal modal-blur fade" id="new-internship" tabIndex={-1} aria-hidden="true" style={{display: 'none'}}>
    <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
      <form className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Nouveau stage</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body"> 
          <div className="row">
            <div className="col-lg-4">
              <div className="mb-3">
                <label className="form-label">Date début</label>
                <input type="text" name="dateDebut" className="form-control" disabled />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mb-3">
                <label className="form-label">Date fin</label>
                <input type="text" name="dateFin" className="form-control" disabled />
              </div>
            </div>
            <div className="col-lg-2">
              <div className="mb-3">
                <label className="form-label">Année</label>
                <input type="text" name="niveau" className="form-control" disabled />
              </div>
            </div>
            <div className="col-lg-2">
              <div className="mb-3">
                <label className="form-label">Ordre</label>
                <input type="text" name="numero" className="form-control" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mb-3">
                <label className="form-label">Nom entreprise</label>
                <input type="text" name="entreprise" className="form-control" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mb-3">
                <label className="form-label">Ville entreprise</label>
                <input type="text" name="villeEntreprise" className="form-control" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mb-3">
                <label className="form-label">Contact entreprise</label>
                <input type="text" name="contactEntreprise" placeholder="Email ou GSM" className="form-control" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mb-3">
                <label className="form-label">Encadrant entreprise</label>
                <input type="text" name="enacdrantEntreprise" placeholder="Nom complet" className="form-control" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mb-3">
                <label className="form-label">Contact encadrant</label>
                <input type="text" name="contactEncadrant" placeholder="Email ou GSM" className="form-control" />
              </div>
            </div>
          </div>
        </div>
        {/* En révision (can delete and update), Accepté, En cours, Achevé */}
        <div className="modal-footer">
          <a href="/" className="btn btn-link link-secondary" data-bs-dismiss="modal">
            Annuler
          </a>
          <div className="ms-auto">
            <button type='submit' className="btn btn-success ms-2" data-bs-dismiss="modal">
              Ajouter
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
  )
}
