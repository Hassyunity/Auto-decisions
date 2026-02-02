import "../styles/produits.css";

const produits = [
  {
    title: "RH & Recrutement",
    desc: "Automatisez la gestion des candidatures, le parsing de CV et l’onboarding des employés.",
    icon: "🧑‍💼",
  },
  {
    title: "Finance & Facturation",
    desc: "Traitement automatique des factures, rapprochement comptable et alertes de paiement.",
    icon: "💰",
  },
  {
    title: "Marketing Automation",
    desc: "Déclenchez des campagnes, synchronisez vos leads et automatisez vos actions marketing.",
    icon: "📢",
  },
  {
    title: "Support & Tickets",
    desc: "Centralisez les demandes clients, priorisez les tickets et automatisez les réponses.",
    icon: "🧾",
  },
  {
    title: "Reporting & Data",
    desc: "Collectez, transformez et diffusez vos données automatiquement en temps réel.",
    icon: "📊",
  },
  {
    title: "Intégrations & APIs",
    desc: "Connectez vos outils SaaS, APIs et systèmes internes via des workflows n8n.",
    icon: "🔗",
  },
];

export default function Produits() {
  return (
    <section className="produits">
      <div className="produits-container">
        <h1>Nos Produits d’Automatisation</h1>
        <p className="produits-subtitle">
          Des solutions basées sur n8n pour automatiser vos processus métier
          critiques.
        </p>

        <div className="produits-grid">
          {produits.map((p) => (
            <div key={p.title} className="produit-card">
              <div className="produit-icon">{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <button className="produit-cta">Découvrir</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
