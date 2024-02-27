import AdminLayout from "../../components/administration/AdminLayout";
import PageHeader from "../../components/PageHeader";
import NewProfesseurModal from "../../components/administration/gestionProfesseurs/NewProfesseurModal"
import TableManageProfesseurs from "../../components/administration/gestionProfesseurs/TableManageProfesseur";
import RowsManageProfesseurs from "../../components/administration/gestionProfesseurs/RowsManageProfesseurs";

export default function GestionProfesseurs() {
  return (
    <AdminLayout active="gesProf">
      <div className="page-wrapper">
        {/* Page header */}
        <PageHeader title="Gestion des professeurs" btnText="+ Ajoute un professeur" target="#new-professor"/>
        <NewProfesseurModal/>
        <TableManageProfesseurs>
          <RowsManageProfesseurs/>
        </TableManageProfesseurs>
      </div>
    </AdminLayout>
  );
}
