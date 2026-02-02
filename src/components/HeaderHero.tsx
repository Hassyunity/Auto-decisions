import { useState } from "react";
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
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <div className="top-line" />

      <header className="navbar">
        <div className="navbar-container">
          {/* LOGO */}
          <div className="logo">
            <div className="logo-box">H</div>
            <div>
              <div className="logo-text">Auto | DECISIONS</div>
              <div className="logo-sub">by_Hassy</div>
            </div>
          </div>

          {/* MENU DESKTOP */}
          <nav className="nav-menu">
            {menu.map((item) => (
              <NavLink key={item.path} to={item.path}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* ACTIONS */}
          <div className="nav-actions">
            <div className="lang">🌐 FR</div>
            <button className="cta-outline">DEMANDER UNE DÉMO</button>

            {/* HAMBURGER MOBILE */}
            <button
              className="hamburger"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              ☰
            </button>
          </div>
        </div>

        {/* MENU MOBILE */}
        {mobileOpen && (
          <div className="mobile-menu">
            {menu.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        )}
      </header>
    </>
  );
}
