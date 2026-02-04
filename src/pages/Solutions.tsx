import "../styles/solutions.css";

const solutions = [
  {
    title: "Automatisation RH",
    desc: "Recrutez plus vite et efficacement : tri automatique des CV, scoring intelligent et onboarding simplifié.",
    points: [
      "📝 Parsing automatique des CV",
      "⭐ Scoring candidats avancé",
      "📣 Notifications RH & managers",
      "🚀 Onboarding automatisé",
    ],
    image: "/images/n8n.png",
  },
  {
    title: "Finance & Facturation",
    desc: "Gérez vos finances sans erreurs : automatisation des factures, rapprochements et alertes de paiement.",
    points: [
      "💸 Traitement automatique des factures",
      "📊 Rapprochement comptable",
      "⏰ Alertes de paiement",
      "🔗 Export ERP / outils comptables",
    ],
    image: "/images/Facturations.png",
  },
  {
    title: "Marketing Automation",
    desc: "Boostez vos ventes et leads : campagnes automatiques, synchronisation CRM et reporting instantané.",
    points: [
      "📧 Campagnes email automatisées",
      "🔄 Synchronisation CRM",
      "🎯 Lead scoring intelligent",
      "📈 Reporting marketing",
    ],
    image: "/images/coming.jpg",
  },
];

export default function Solutions() {
  return (
    <section className="solutions">
      <div className="solutions-container">
        {/* HERO */}
        <header className="solutions-header">
          <h1>Transformez vos processus avec nos workflows n8n</h1>
          <p>
            Des solutions robustes, évolutives et simples à déployer pour
            automatiser vos processus critiques et booster votre productivité.
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
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <button className="solution-link">Découvrir la solution</button>
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
          <h2>Laissez vos processus se gérer automatiquement</h2>
          <p>
            Nos workflows n8n sont sécurisés, maintenables et prêts à évoluer avec
            votre entreprise pour maximiser votre efficacité.
          </p>
          <button className="cta-main">Demander une démo</button>
        </div>
      </div>
    </section>
  );
}
