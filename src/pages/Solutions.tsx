import "../styles/solutions.css";

const solutions = [
  {
    title: "Automatisation RH",
    desc: "Optimisez le recrutement, l’onboarding et la gestion RH grâce à des workflows n8n automatisés et sécurisés.",
    points: [
      "Parsing automatique des CV",
      "Scoring candidats",
      "Notifications RH & managers",
      "Onboarding automatisé",
    ],
    image: "../../public/images/n8n.png",
  },
  {
    title: "Finance & Facturation",
    desc: "Automatisez la gestion financière pour réduire les erreurs et accélérer les processus comptables.",
    points: [
      "Traitement automatique des factures",
      "Rapprochement comptable",
      "Alertes de paiement",
      "Export ERP / outils comptables",
    ],
    image: "../../public/images/n8n.png",
  },
  {
    title: "Marketing Automation",
    desc: "Synchronisez vos outils marketing et déclenchez des actions intelligentes basées sur vos données.",
    points: [
      "Campagnes email automatisées",
      "Synchronisation CRM",
      "Lead scoring",
      "Reporting marketing",
    ],
    image: "../../public/images/n8n.png",
  },
];

export default function Solutions() {
  return (
    <section className="solutions">
      <div className="solutions-container">
        {/* HERO */}
        <header className="solutions-header">
          <h1>Nos Solutions d’Automatisation</h1>
          <p>
            Des workflows n8n robustes, évolutifs et conçus pour automatiser vos
            processus métier de bout en bout.
          </p>
        </header>

        {/* SOLUTIONS */}
        <div className="solutions-list">
          {solutions.map((s, index) => (
            <div
              key={s.title}
              className={`solution-row ${index % 2 !== 0 ? "reverse" : ""}`}
            >
              {/* TEXTE */}
              <div className="solution-text">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <ul>
                  {s.points.map((p) => (
                    <li key={p}>✔ {p}</li>
                  ))}
                </ul>
                <button className="solution-link">Voir la solution</button>
              </div>

              {/* IMAGE */}
              <div className="solution-image">
                <img src={s.image} alt={`Workflow ${s.title}`} />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="solutions-cta">
          <h2>Voyez vos processus fonctionner automatiquement</h2>
          <p>
            Nos workflows n8n sont conçus pour être sécurisés, maintenables et
            prêts à évoluer avec votre entreprise.
          </p>
          <button className="cta-main">Demander une démo</button>
        </div>
      </div>
    </section>
  );
}
