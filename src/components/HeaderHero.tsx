import { NavLink } from "react-router-dom";
import "../style.css";

const menu = [
  { label: "Produits", path: "/produits" },
  { label: "Solutions", path: "/solutions" },
  { label: "Ressources", path: "/ressources" },
  { label: "Partenaires", path: "/partenaires" },
  { label: "Clients", path: "/clients" },
  { label: "À propos", path: "/a-propos" },
  { label: "Prix", path: "/prix" },
];

export default function HeaderHero() {
  return (
    <>
      <div className="top-line" />

      <header className="navbar">
        <div className="navbar-container">
          <div className="logo">
            <div className="logo-box">H</div>
            <div>
              <div className="logo-text">Auto |</div>
              <div className="logo-sub">DECISIONS</div>
            </div>
          </div>

          <nav className="nav-menu">
            {menu.map((item) => (
              <NavLink key={item.path} to={item.path}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="nav-actions">
            <div className="lang">🌐 FR</div>
            <button className="cta-outline">DEMANDER UNE DÉMO</button>
          </div>
        </div>
      </header>
    </>
  );
}
