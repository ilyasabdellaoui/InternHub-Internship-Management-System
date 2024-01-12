import AdminLayout from '../../components/administration/AdminLayout'
import ModaliteCompetences from '../../components/administration/modalitesStage/ModaliteCompetences'
import ModaliteDates from '../../components/administration/modalitesStage/ModaliteDates'
import TableCompetences from "../../components/administration/modalitesStage/TableCompetences";
import RowsCompetences from "../../components/administration/modalitesStage/RowsCompetences";

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
              <ModaliteDates/>
              <ModaliteCompetences/>
              <TableCompetences>
                <RowsCompetences/>
              </TableCompetences>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}
