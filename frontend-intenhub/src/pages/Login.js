import { useState } from "react";
import largeLogo from "../images/largeLogo2.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [role, setRole] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const navigate = useNavigate();

  function handleClick(e) {
    axios.post();
    e.preventDefault();
    console.log(role);
    if (role === "etudiant") {
      navigate("/etudiant/stages");
    } else if (role === "professeur") {
      navigate("/professeur/stages");
    } else if (role === "administrateur") {
      navigate("/admin/etudiants");
    }
  }

  return (
    <div
      className="h-100 d-flex flex-column"
      style={{ fontFamily: "var(--tblr-body-font-family)" }}
    >
      <div className="h-100 page page-center">
        <div className="container container-tight py-4">
          <div className="text-center mb-4">
            <a href="." className="navbar-brand navbar-brand-autodark">
              <img src={largeLogo} height={36} alt="" />
            </a>
          </div>
          <form
            className="card card-md"
            action="./"
            method="get"
            autoComplete="off"
            noValidate
          >
            {/* <select name="role" onChange={(e) => setRole(e.target.value)}>
              <option value="etudiant">Etudiant</option>
              <option value="professeur">Professeur</option>
              <option value="administrateur">Administrateur</option>
            </select> */}
            <div className="card-body text-center">
              <div className="mb-4">
                <h2 className="card-title">Connectez vous</h2>
                <p className="text-muted">
                  Entrez le nom d'utilisateur et le mot de passe fournit par
                  l'administrateur
                </p>
              </div>
              <div className="mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nom d'utilisateur"
                  onChange={(e) => setUserEmail(e.target.value)}
                />
              </div>
              <div>
                <div className="mb-4">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Mot de passe"
                    onChange={(e) => setUserPassword(e.target.value)}
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    onClick={handleClick}
                    className="btn btn-primary w-100"
                  >
                    Se connecter
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
