import "../styles/produits.css";

const produits = [
  {
    title: "RH & Recrutement",
    desc: "Recrutez plus vite et mieux : automatisez le tri des CV, le scoring des candidats et l’onboarding.",
    icon: "🧑‍💼",
  },
  {
    title: "Finance & Facturation",
    desc: "Gagnez du temps et réduisez les erreurs : automatisez vos factures, rapprochements et alertes de paiement.",
    icon: "💰",
  },
  {
    title: "Marketing Automation",
    desc: "Transformez vos leads en clients : déclenchez des campagnes, synchronisez vos CRM et boostez vos conversions.",
    icon: "📢",
  },
  {
    title: "Support & Tickets",
    desc: "Offrez un support réactif : centralisez, priorisez et automatisez vos réponses aux demandes clients.",
    icon: "🧾",
  },
  {
    title: "Reporting & Data",
    desc: "Décidez plus vite : collectez, analysez et partagez vos données automatiquement et en temps réel.",
    icon: "📊",
  },
  {
    title: "Intégrations & APIs",
    desc: "Connectez tous vos outils : SaaS, APIs et systèmes internes via des workflows intelligents et robustes.",
    icon: "🔗",
  },
];

export default function Produits() {
  return (
    <section className="produits">
      <div className="produits-container">
        <h1>Boostez votre entreprise avec nos solutions d’automatisation</h1>
        <p className="produits-subtitle">
          Des workflows n8n puissants pour transformer vos processus critiques
          en expériences fluides et efficaces.
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
