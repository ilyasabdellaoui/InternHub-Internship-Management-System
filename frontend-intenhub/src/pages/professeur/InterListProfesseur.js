import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import PageHeader from '../../components/PageHeader';
import TableProfesseur from '../../components/professeur/TableProfesseur';
import RowsProfesseur from '../../components/professeur/RowsProfesseur';

export default function InterListProfesseur() {
  return (
  <div className="h-100" style={{fontFamily: "var(--tblr-body-font-family)"}}>
    <div className="h-100 page">
      <Navbar nom="Ahmed Lazrak" fonction="Etudiant"/>
      <div className="h-100 page-wrapper">
        <PageHeader title="Mes stages à encadrer" btnType="warning" btnText="+ Ajouter un stage" target="#new-internship"/>
        <TableProfesseur>
          <RowsProfesseur/>
        </TableProfesseur>
        <Footer />
      </div>
    </div>
  </div>
  )
}
