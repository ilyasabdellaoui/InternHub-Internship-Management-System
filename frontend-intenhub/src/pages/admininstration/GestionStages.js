import AdminLayout from "../../components/administration/AdminLayout";
import PageHeader from "../../components/PageHeader";
import TableManageStages from "../../components/administration/gestionStages/TableManageStages";
import RowsManageStages from "../../components/administration/gestionStages/RowsManageStages";

export default function GestionStages() {
  return (
    <AdminLayout>
      <div className="page-wrapper">
        {/* Page header */}
        <PageHeader title="Gestion des stages"/>
        <TableManageStages>
          <RowsManageStages/>
        </TableManageStages>
      </div>
    </AdminLayout>
  );
}
