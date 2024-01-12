import AdminLayout from "../../components/administration/AdminLayout";
import PageHeader from "../../components/PageHeader";
import NewStudentModal from "../../components/administration/gestionEtudiants/NewStudentModal"
import TableManageStudent from "../../components/administration/gestionEtudiants/TableManageStudent";
import RowsManageStudent from "../../components/administration/gestionEtudiants/RowsManageStudents";

export default function GestionEtudiants() {
  return (
    <AdminLayout active="gesEtu">
      <div className="page-wrapper">
        {/* Page header */}
        <PageHeader title="Gestion des étudiants" btnText="+ Ajoute un étudiant" target="#new-student"/>
        <NewStudentModal/>
        <TableManageStudent>
          <RowsManageStudent/>
        </TableManageStudent>
      </div>
    </AdminLayout>
  );
}
