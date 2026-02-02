import "../styles/partenaire.css";

const partenaires = [
  {
    name: "n8n",
    desc: "Plateforme d’automatisation open-source utilisée comme cœur de nos solutions.",
    category: "Automatisation",
    logo: "/images/partners/n8n.svg",
  },
  {
    name: "Google Workspace",
    desc: "Automatisation des emails, Drive, Sheets et processus collaboratifs.",
    category: "Productivité",
    logo: "/images/partners/google.svg",
  },
  {
    name: "Slack",
    desc: "Notifications temps réel et workflows collaboratifs automatisés.",
    category: "Communication",
    logo: "/images/partners/slack.svg",
  },
  {
    name: "Stripe",
    desc: "Automatisation de la facturation, paiements et reporting financier.",
    category: "Paiement",
    logo: "/images/partners/stripe.svg",
  },
  {
    name: "HubSpot",
    desc: "Synchronisation CRM, leads et automatisation marketing.",
    category: "CRM",
    logo: "/images/partners/hubspot.svg",
  },
  {
    name: "AWS",
    desc: "Infrastructure scalable, sécurisée et hautement disponible.",
    category: "Cloud",
    logo: "/images/partners/aws.svg",
  },
];

export default function Partenaire() {
  return (
    <section className="partenaires">
      <div className="partenaires-container">
        {/* HEADER */}
        <header className="partenaires-header">
          <h1>Nos Partenaires & Écosystème</h1>
          <p>
            Nous construisons des automatisations robustes en nous appuyant sur
            des technologies éprouvées et reconnues.
          </p>
        </header>

        {/* GRID */}
        <div className="partenaires-grid">
          {partenaires.map((p) => (
            <div key={p.name} className="partenaire-card">
              <div className="partenaire-logo">
                <img src={p.logo} alt={p.name} />
              </div>

              <h3>{p.name}</h3>
              <p>{p.desc}</p>

              <span className="partenaire-category">{p.category}</span>
            </div>
          ))}
        </div>

        {/* TRUST BLOCK */}
        <div className="partenaires-trust">
          <h2>Un écosystème fiable et évolutif</h2>
          <p>
            Chaque partenaire est sélectionné pour sa stabilité, sa sécurité et
            sa capacité à s’intégrer parfaitement avec n8n.
          </p>
        </div>
      </div>
    </section>
  );
}
