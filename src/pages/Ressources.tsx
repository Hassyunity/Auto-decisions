import "../styles/ressources.css";

const ressources = [
  {
    type: "Guide",
    title: "Automatiser un processus RH avec n8n",
    desc: "Guide étape par étape pour automatiser la réception des CV, le scoring et l’onboarding.",
    tag: "RH",
  },
  {
    type: "Cas client",
    title: "Automatisation de la facturation mensuelle",
    desc: "Comment une PME a réduit de 60 % le temps de traitement de ses factures.",
    tag: "Finance",
  },
  {
    type: "Template n8n",
    title: "Workflow de notification Slack",
    desc: "Template prêt à l’emploi pour notifier automatiquement vos équipes.",
    tag: "Ops",
  },
  {
    type: "Article",
    title: "Pourquoi n8n est idéal pour les entreprises",
    desc: "Comparaison n8n vs Zapier / Make pour des workflows complexes.",
    tag: "Tech",
  },
  {
    type: "Guide",
    title: "Sécuriser ses workflows n8n",
    desc: "Bonnes pratiques : credentials, environnements, logs et monitoring.",
    tag: "Sécurité",
  },
  {
    type: "Template n8n",
    title: "Synchronisation CRM automatique",
    desc: "Synchronisez vos leads entre plusieurs outils sans duplication.",
    tag: "Marketing",
  },
];

export default function Ressources() {
  return (
    <section className="ressources">
      <div className="ressources-container">
        {/* HERO */}
        <header className="ressources-header">
          <h1>Ressources & Expertise</h1>
          <p>
            Guides, cas concrets et templates pour comprendre et maîtriser
            l’automatisation avec n8n.
          </p>
        </header>

        {/* GRID */}
        <div className="ressources-grid">
          {ressources.map((r) => (
            <div key={r.title} className="ressource-card">
              <span className="ressource-type">{r.type}</span>
              <h3>{r.title}</h3>
              <p>{r.desc}</p>

              <div className="ressource-footer">
                <span className="ressource-tag">{r.tag}</span>
                <button className="ressource-link">Lire →</button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="ressources-cta">
          <h2>Besoin d’une automatisation sur mesure ?</h2>
          <p>
            Nos ressources montrent le possible. Parlons maintenant de votre
            besoin réel.
          </p>
          <button className="cta-main">Demander une démo</button>
        </div>
      </div>
    </section>
  );
}
