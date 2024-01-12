import { Link } from 'react-router-dom';
import largeLogo from '../../images/largeLogo3.png';
import Footer from '../Footer';

export default function AdminLayout({ children , active=""}) {
  return (
    <div className="h-100" style={{ fontFamily: "var(--tblr-body-font-family)" }}>
      <div className="h-100 page">
        {/* Sidebar */}
        <aside className="navbar navbar-vertical navbar-expand-lg navbar-transparent">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                    data-bs-target="#sidebar-menu" aria-controls="sidebar-menu" 
                    aria-expanded="false" aria-label="Toggle navigation" > 
            <span className="navbar-toggler-icon" /> 
            </button>
            <h1 className="navbar-brand navbar-brand-autodark mx-auto">
              <a href=".">
                <img src={largeLogo} width={110} height={32} alt="InternHub" className="navbar-brand-image" />
              </a>
            </h1>
            <div className="collapse navbar-collapse" id="sidebar-menu">
              <ul className="navbar-nav pt-lg-3">
                <li className={active === 'modalites' ? 'nav-item active' : 'nav-item'}>
                  <Link to="/admin/modalitesstages" className="nav-link" href="./form-elements.html">
                    <span className="nav-link-icon d-md-none d-lg-inline-block">
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" > <path stroke="none" d="M0 0h24v24H0z" fill="none" /> <path d="M9 11l3 3l8 -8" /> <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" /> </svg>
                    </span>
                    <span className="nav-link-title">Modalités stages</span>
                  </Link>
                </li>
                <li className={active === 'gesStages' ? 'nav-item active' : 'nav-item'}>
                  <Link to="/admin/stages" className="nav-link" href="./form-elements.html">
                    <span className="nav-link-icon d-md-none d-lg-inline-block">
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-info-circle" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg>                    </span>
                    <span className="nav-link-title">Gestion stages</span>
                  </Link>
                </li>
                <li className={active === 'gesEtu' ? 'nav-item active' : 'nav-item'}>
                  <Link to="/admin/etudiants" className="nav-link" href="./form-elements.html">
                    <span className="nav-link-icon d-md-none d-lg-inline-block">{/* Download SVG icon from http://tabler-icons.io/i/lifebuoy */}
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-school" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" /><path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" /></svg>                    </span>
                    <span className="nav-link-title">
                      Gestion étudiants
                    </span>
                  </Link>
                </li>
                <li className={active === 'gesProf' ? 'nav-item active' : 'nav-item'}>
                  <Link to="/admin/professeurs" className="nav-link" href="./form-elements.html">
                    <span className="nav-link-icon d-md-none d-lg-inline-block">{/* Download SVG icon from http://tabler-icons.io/i/lifebuoy */}
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-book-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19 4v16h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12z" /><path d="M19 16h-12a2 2 0 0 0 -2 2" /><path d="M9 8h6" /></svg>                    </span>
                    <span className="nav-link-title">
                      Gestion professeurs
                    </span>
                  </Link>
                </li>
                <li className={active === 'gesCompetences' ? 'nav-item active' : 'nav-item'}>
                  <Link to="/admin/competences" className="nav-link" href="./form-elements.html">
                    <span className="nav-link-icon d-md-none d-lg-inline-block">{/* Download SVG icon from http://tabler-icons.io/i/lifebuoy */}
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-tools" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4" /><path d="M14.5 5.5l4 4" /><path d="M12 8l-5 -5l-4 4l5 5" /><path d="M7 8l-1.5 1.5" /><path d="M16 12l5 5l-4 4l-5 -5" /><path d="M16 17l-1.5 1.5" /></svg>
                    </span>
                    <span className="nav-link-title">
                      Gestion Compétences 
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </aside>
        {children}
        <Footer />
      </div>
    </div>
  );
}
