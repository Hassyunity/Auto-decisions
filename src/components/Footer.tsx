import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Branding */}
        <div className="footer-brand">
          <div className="footer-logo">
            <div className="logo-box">P</div>
            <div>
              <div className="logo-text">Auto |</div>
              <div className="logo-sub">DECISIONS</div>
            </div>
          </div>

          <p className="footer-desc">
            Nous concevons des solutions d’automatisation intelligentes basées
            sur n8n pour optimiser vos processus métiers critiques.
          </p>

          {/* Développeur / Créateur */}
          <p className="footer-dev">
            Développé par Hassy Tsihoarana, développeur web
            fullstack passionné par l’ IA, l'automatisation et les workflows intelligents.
          </p>
        </div>

        {/* Navigation */}
        <div className="footer-links">
          <div>
            <h4>Produits</h4>
            <ul>
              <li>RH & Recrutement</li>
              <li>Finance & Facturation</li>
              <li>Marketing Automation</li>
              <li>Support & Tickets</li>
            </ul>
          </div>

          <div>
            <h4>Solutions</h4>
            <ul>
              <li>Workflows n8n</li>
              <li>Intégrations API</li>
              <li>Automatisation sur mesure</li>
              <li>Reporting & Data</li>
            </ul>
          </div>

          <div>
            <h4>Entreprise</h4>
            <ul>
              <li>À propos</li>
              <li>Clients</li>
              <li>Partenaires</li>
              <li>Ressources</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="footer-cta">
          <h4>Parlons de votre automatisation</h4>
          <p>
            Découvrez comment n8n peut transformer vos processus internes.
          </p>
          <button className="footer-button">Demander une démo</button>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Auto Decisions. Tous droits réservés.</span>
        <span className="footer-bottom-links">
          Mentions légales · Politique de confidentialité
        </span>
      </div>
    </footer>
  );
}
