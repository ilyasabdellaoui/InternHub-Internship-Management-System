import { useForm } from 'react-hook-form'

export default function RowsManageprofesseur() {
  const {handleSubmit, register, formState : {errors}} = useForm();

  function onSubmit(data) {
    console.log(data);
    window.location.href = "/";
  }

  const professeurs = [
    {
      "numProf": 123,
      "genreProf": "M",
      "nomProf": "Najim",
      "prenomProf" : "Said"
    },
    {
      "numProf": 1243,
      "genreProf": "F",
      "nomProf": "Najlaa",
      "prenomProf" : "who"
    }
  ];
  return (
    <tbody className="table-tbody">
      {professeurs.map((professeur) => (
        <tr className="align-middle" key={professeur.numProf}>
        <td> {professeur.numProf} </td>
        <td> {professeur.nomProf} </td>
        <td> {professeur.prenomProf} </td>
        <td><button className="btn btn-warning w-100" data-bs-toggle="modal" data-bs-target={`#modal-${professeur.numProf}`}>
            Détails
        </button></td>
        <div className="modal modal-blur fade" id={`modal-${professeur.numProf}`} tabIndex={-1} aria-hidden="true" style={{display: 'none'}}>
          <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
            <form className="modal-content" onSubmit={handleSubmit(onSubmit)}>
              <div className="modal-header">
                <h5 className="modal-title">Détails professeur</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                <div className="row">
              <div className="col-lg-4">
                <div className="mb-3">
                  <label className="form-label required">Nom du professeur</label>
                  <input type="text" defaultValue={professeur.nomProf} {...register("nomProf", {"required" : true})} className="form-control" />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="mb-3">
                  <label className="form-label required">Prenom de l'étudiant</label>
                  <input type="text" defaultValue={professeur.prenomProf} {...register("prenomProf", {"required" : true})} className="form-control" />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="mb-3">
                  <label className="form-label required">Sexe</label>
                  <select class="form-select" defaultValue={professeur.genreProf} {...register("genreProf", {"required" : true})} >
                    <option value="M">M</option>
                    <option value="F">F</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-3">
                  <label className="form-label">Date d'embauche</label>
                  <input className="form-control" type="text" defaultValue={professeur.dateEmbauche} {...register("dateEmbauche")} />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-3">
                  <label className="form-label">Date de départ</label>
                  <input className="form-control" type="text" defaultValue={professeur.dateDepart} {...register("dateDepart")} />
                </div>
              </div>
              <div className="col-lg-10">
                <div className="mb-3">
                  <label className="form-label">Adresse</label>
                  <input className="form-control" type="text" defaultValue={professeur.adresseProf} {...register("adresseProf")} />
                </div>
              </div>
              <div className="col-lg-2">
                <div className="mb-3">
                  <label className="form-label">Code postal</label>
                  <input className="form-control" type="number" defaultValue={professeur.codePostalProf} {...register("codePostalProf")} />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-3">
                  <label className="form-label">Téléphone de Domicile</label>
                  <input className="form-control" type="text" defaultValue={professeur.telDomicile} {...register("telDomicile")} />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-3">
                  <label className="form-label">Téléphone de l'école</label>
                  <input className="form-control" type="text" defaultValue={professeur.telEcoleProf} {...register("telEcoleProf")} />
                </div>
              </div>
                </div>
              </div>
              {/* En révision (can delete and update), Accepté, En cours, Achevé */}
              <div className="modal-footer">
                <a href="/" className="btn btn-link link-secondary" data-bs-dismiss="modal">
                  Annuler
                </a>
                { Object.keys(errors).length > 0 && <div className="ms-auto"><p className='form-hint text-danger'>Erreur</p></div>}
                <div className="ms-auto">
                  <a href="/" className="btn btn-danger" data-bs-dismiss="modal">
                    Supprimer
                  </a>
                  <button type='submit' className="btn btn-info ms-2" data-bs-dismiss="modal">
                    Enregistrer
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        </tr>
      ))}
    </tbody>
  )
}
