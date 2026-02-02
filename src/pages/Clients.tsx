import "../styles/clients.css";

const clients = [
  {
    name: "Entreprise RH",
    quote:
      "L’automatisation a réduit notre temps de traitement des CV de 70 %. Un gain immédiat.",
    role: "Responsable RH",
  },
  {
    name: "Société Finance",
    quote:
      "La gestion des factures et des paiements est devenue fiable et sans erreur.",
    role: "Directeur Financier",
  },
  {
    name: "Startup SaaS",
    quote:
      "Nos workflows marketing et CRM sont maintenant entièrement automatisés.",
    role: "CEO",
  },
];

export default function Clients() {
  return (
    <section className="clients">
      <div className="clients-container">
        <header className="clients-header">
          <h1>Ils nous font confiance</h1>
          <p>
            Des équipes qui ont transformé leurs processus grâce à
            l’automatisation avec n8n.
          </p>
        </header>

        <div className="clients-grid">
          {clients.map((c) => (
            <div key={c.name} className="client-card">
              <p className="client-quote">“{c.quote}”</p>
              <div className="client-meta">
                <strong>{c.name}</strong>
                <span>{c.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
