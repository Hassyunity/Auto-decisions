import "../styles/apropos.css";

export default function Apropos() {
  return (
    <section className="apropos">
      <div className="apropos-container">
        <h1>À propos</h1>

        <p className="apropos-lead">
          Nous aidons les entreprises à automatiser leurs processus critiques
          grâce à n8n et à des architectures robustes.
        </p>

        <div className="apropos-grid">
          <div>
            <h3>Notre mission</h3>
            <p>
              Réduire la complexité opérationnelle et libérer du temps grâce à
              des automatisations fiables, maintenables et évolutives.
            </p>
          </div>

          <div>
            <h3>Notre expertise</h3>
            <p>
              Automatisation RH, finance, marketing, intégration API, workflows
              complexes, sécurité et scalabilité.
            </p>
          </div>

          <div>
            <h3>Notre approche</h3>
            <p>
              Une approche orientée résultats : analyse métier, conception,
              automatisation, monitoring et amélioration continue.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
