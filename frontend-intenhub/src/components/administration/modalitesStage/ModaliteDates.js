import axios from "axios";
import CalendierFormRow from "./CalendierFormRow";

export default function ModaliteDates() {
  const handleASubmit = (e, typeStage) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(data);
  };
  const stages = [
    { annee: 3, stage: 2 },
    { annee: 3, stage: 1 },
    { annee: 2, stage: 2 },
    { annee: 2, stage: 1 },
    { annee: 1, stage: 1 },
  ];

  return (
    <div className="col-12">
      <form className="card">
        <div className="card-header">
          <h3 className="card-title">Calendrier des stages</h3>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table mb-0" style={{ width: "100%" }}>
              <thead>
                <th className="text-center" style={{ width: "20%" }}>
                  Annee
                </th>
                <th className="text-center" style={{ width: "20%" }}>
                  Ordre
                </th>
                <th className="text-center">Date debut</th>
                <th className="text-center">Date fin</th>
                <th className="text-center">Action</th>
              </thead>
            </table>
          </div>
          <div className="container">
            {stages.map(({ annee, stage }) => (
              <CalendierFormRow annee={annee} stage={stage} />
            ))}
          </div>
        </div>
      </form>
    </div>
  );
}
