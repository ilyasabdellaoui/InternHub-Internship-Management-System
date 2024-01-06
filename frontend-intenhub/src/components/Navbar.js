import largeLogo from '../images/largeLogo3.png';
import emcLogo from '../images/emcLogo.png';

export default function Navbar({nom, fonction}) {
  return (
    <header className="navbar navbar-expand-md d-print-none">
    <div className="container-xl">
      <h1 className="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
        <a href=".">
          <img src={largeLogo} width={110} height={32} alt="Tabler" className="navbar-brand-image" />
        </a>
      </h1>
      <div className="navbar-nav flex-row order-md-last me-2">
        <div className="d-none d-md-flex m-2">
          <a href="/" className="btn btn-pinterest w-100 btn-icon" title="Se déconnecter" data-bs-toggle="tooltip" data-bs-placement="bottom">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-power" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 6a7.75 7.75 0 1 0 10 0" /><path d="M12 4l0 8" /></svg>
          </a>
          <a href="?theme=dark" className="nav-link px-0 hide-theme-dark" title="Activer dark mode" data-bs-toggle="tooltip" data-bs-placement="bottom">
            {/* Download SVG icon from http://tabler-icons.io/i/moon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="icon" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" /></svg>
          </a>
          <a href="?theme=light" className="nav-link px-0 hide-theme-light" title="Activer light mode" data-bs-toggle="tooltip" data-bs-placement="bottom">
            {/* Download SVG icon from http://tabler-icons.io/i/sun */}
            <svg xmlns="http://www.w3.org/2000/svg" className="icon" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" /></svg>
          </a>            
        </div>
        <div className="nav-item dropdown">
          <a href="/" className="nav-link d-flex lh-1 text-reset p-0" data-bs-toggle="dropdown" aria-label="Open user menu">
            <span className="avatar avatar-sm" style={{backgroundImage: `url(${emcLogo})`}} />
            <div className="d-none d-xl-block ps-2">
              <div>{nom}</div>
              <div className="mt-1 small text-muted">{fonction}</div>
            </div>
          </a>
          <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
            <a href="../login.html" className="dropdown-item">Se déconnecter</a>
          </div>
        </div>
      </div>
    </div>
  </header>
  )
}
