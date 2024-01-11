import Footer from '../../components/Footer';
import NewInternshipModal from '../../components/etudiant/NewInternshipModal';
import Navbar from '../../components/Navbar';
import PageHeader from '../../components/PageHeader';
import RowsStudent from '../../components/etudiant/RowsStudent';
import TableStudent from '../../components/etudiant/TableStudent';

export default function InterListStudent() {
  return (
  <div className="h-100" style={{fontFamily: "var(--tblr-body-font-family)"}}>
    <div className="h-100 page">
      <Navbar nom="Ahmed Lazrak" fonction="Etudiant"/>
      <div className="h-100 page-wrapper">
        <PageHeader title="Mes stages" btnType="primary" btnText="+ Ajouter un stage" target="#new-internship"/>
        <NewInternshipModal studentId={26123}/>
        <TableStudent>
          <RowsStudent/>
        </TableStudent>
        <Footer />
      </div>
    </div>
  </div>
  )
}
