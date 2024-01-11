import AdminLayout from "../../components/administration/AdminLayout";
import PageHeader from "../../components/PageHeader";
import NewCompetenceModal from "../../components/administration/gestionCompetences/NewCompetenceModal"
import RowsManageCompetences from "../../components/administration/gestionCompetences/RowsManageCompetences";
import TableManageCompetences from "../../components/administration/gestionCompetences/TableManageCompetences";

export default function GestionCompetences() {
  return (
    <AdminLayout>
      <div className="page-wrapper">
        {/* Page header */}
        <PageHeader title="Gestion des compétences" btnText="+ Ajoute une compétence" target="#new-competence"/>
        <NewCompetenceModal/>
        <TableManageCompetences>
          <RowsManageCompetences/>
        </TableManageCompetences>
      </div>
    </AdminLayout>
  );
}
