import "../styles/prix.css";

const plans = [
  {
    name: "Starter",
    price: "Sur devis",
    features: [
      "Automatisation simple",
      "Workflows n8n standards",
      "Support email",
    ],
  },
  {
    name: "Pro",
    price: "Sur devis",
    features: [
      "Workflows complexes",
      "Intégrations API",
      "Monitoring & alertes",
      "Support prioritaire",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Sur devis",
    features: [
      "Architecture sur mesure",
      "Sécurité avancée",
      "Scalabilité & SLA",
      "Support dédié",
    ],
  },
];

export default function Prix() {
  return (
    <section className="prix">
      <div className="prix-container">
        <header className="prix-header">
          <h1>Tarification</h1>
          <p>
            Des offres flexibles adaptées à la complexité de vos processus.
          </p>
        </header>

        <div className="prix-grid">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`prix-card ${p.highlight ? "highlight" : ""}`}
            >
              <h3>{p.name}</h3>
              <div className="prix-value">{p.price}</div>

              <ul>
                {p.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>

              <button className="cta-main">Demander une démo</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
