import React from 'react'
import AdminLayout from '../../components/administration/AdminLayout'

export default function ModalitesStage() {
  return (
    <AdminLayout>
      <div className="page-wrapper">
        {/* Page header */}
        <div className="page-header d-print-none">
          <div className="container-xl">
            <div className="row g-2 align-items-center">
              <div className="col">
                {/* Page pre-title */}
                <div className="page-pretitle">
                  Espace administration
                </div>
                <h2 className="page-title">
                  Modalités du stage
                </h2>
              </div>
            </div>
          </div>
        </div>
        {/* Page body */}
        <div className="page-body">
          <div className="container-xl">
            <div className="row row-deck row-cards">
              <div className="col-12">
                <form className="card">
                  <div className="card-header">
                    <h3 className="card-title">Calendrier des stages</h3>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table mb-0" style={{width: '100%'}}>
                        <thead>
                          <tr>
                            <th style={{width: '20%'}}>Annee</th>
                            <th style={{width: '20%'}}>Ordre</th>
                            <th>Date debut</th>
                            <th>Date fin</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <input type="text" defaultValue="3A" className="form-control" disabled /></td>
                            <td>
                              <input type="text" defaultValue={2} className="form-control" disabled /></td>
                            <td>
                              <input type="text" className="form-control" /></td>
                            <td>
                              <input type="text" className="form-control" /></td>
                          </tr>
                          <tr>
                            <td>
                              <input type="text" defaultValue="3A" className="form-control" disabled /></td>
                            <td>
                              <input type="text" defaultValue={1} className="form-control" disabled /></td>
                            <td>
                              <input type="text" className="form-control" /></td>
                            <td>
                              <input type="text" className="form-control" /></td>
                          </tr>
                          <tr>
                            <td>
                              <input type="text" defaultValue="2A" className="form-control" disabled /></td>
                            <td>
                              <input type="text" defaultValue={2} className="form-control" disabled /></td>
                            <td>
                              <input type="text" className="form-control" /></td>
                            <td>
                              <input type="text" className="form-control" /></td>
                          </tr>
                          <tr>
                            <td>
                              <input type="text" defaultValue="2A" className="form-control" disabled /></td>
                            <td>
                              <input type="text" defaultValue={1} className="form-control" disabled /></td>
                            <td>
                              <input type="text" className="form-control" /></td>
                            <td>
                              <input type="text" className="form-control" /></td>
                          </tr>
                          <tr>
                            <td>
                              <input type="text" defaultValue="1A" className="form-control" disabled /></td>
                            <td>
                              <input type="text" defaultValue={1} className="form-control" disabled /></td>
                            <td>
                              <input type="text" className="form-control" /></td>
                            <td>
                              <input type="text" className="form-control" /></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="card-footer text-end">
                    <button type="submit" className="btn btn-warning">Enregistrer</button>
                  </div>
                </form>
              </div>
              <div className="col-12">
                <div className="card">
                  <div style={{width: '100%'}} className="card-header">
                    <h3 className="card-title me-auto">Éxigences des stages</h3>
                    <select style={{width: '20%'}} className="form-select border-info border-wide">
                      <option value={31}>3A - 2ème</option>
                      <option value={32}>3A - 1er</option>
                      <option value={22}>2A - 2ème</option>
                      <option value={21}>2A - 1er</option>
                      <option value={11}>1A - 1er</option>
                    </select>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table mb-0" style={{width: '100%'}}>
                        <thead>
                          <tr>
                            <th>compétence</th>
                            <th>Niveau requis</th>
                            <th />
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <select id="skillSelect" className="form-select">
                                <option value={31}>Compétence A</option>
                                <option value={32}>Compétence B</option>
                                <option value="new">+ Nouvelle compétence</option>
                              </select>
                            </td>
                            <td>
                              <input type="number" className="form-control" />
                            </td>
                            <td>
                              <a href="/" className="btn btn-pinterest w-100 btn-icon" title="Se déconnecter" data-bs-toggle="tooltip" data-bs-placement="bottom">
                                Supprimer
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center" colSpan={3}>+ Ajoute une nouvelle éxigence</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="card-footer text-end">
                    <button type="submit" className="btn btn-warning">Enregistrer</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}
