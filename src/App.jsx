import "./App.css";

function App() {
  return (
    <>
      <header className="navbar">
        <h2 className="logo">IB STUDIO</h2>

        <nav>
          <a href="#accueil">Accueil</a>
          <a href="#services">Services</a>
          <a href="#realisations">Réalisations</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="accueil">
          <p className="hero-label">STUDIO CRÉATIF DIGITAL</p>

          <h1>Nous créons des sites web modernes.</h1>

          <p className="hero-text">
            IB STUDIO imagine des expériences numériques élégantes,
            rapides et adaptées à tous les écrans.
          </p>

          <a className="hero-button" href="#services">
            Découvrir nos services
          </a>
        </section>

        <section className="services" id="services">
          <p className="section-label">NOS SERVICES</p>
          <h2>Des solutions pour développer votre présence en ligne</h2>

          <div className="cards">
            <article className="card">
              <span>01</span>
              <h3>Site vitrine</h3>
              <p>
                Un site moderne et professionnel pour présenter votre activité.
              </p>
            </article>

            <article className="card">
              <span>02</span>
              <h3>Portfolio</h3>
              <p>
                Une présentation élégante de vos créations et de vos projets.
              </p>
            </article>

            <article className="card">
              <span>03</span>
              <h3>Boutique en ligne</h3>
              <p>
                Une expérience claire et efficace pour vendre vos produits.
              </p>
            </article>
          </div>
        </section>

        <section className="projects" id="realisations">
          <p className="section-label">NOS RÉALISATIONS</p>
          <h2>Des projets simples, élégants et performants</h2>

          <div className="project-grid">
            <article className="project">
              <div className="project-image">Projet 01</div>
              <h3>Maison Élégance</h3>
              <p>Site vitrine</p>
            </article>

            <article className="project">
              <div className="project-image">Projet 02</div>
              <h3>Atelier Créatif</h3>
              <p>Portfolio</p>
            </article>

            <article className="project">
              <div className="project-image">Projet 03</div>
              <h3>Concept Store</h3>
              <p>Boutique en ligne</p>
            </article>
          </div>
        </section>

        <section className="contact" id="contact">
          <p className="section-label">CONTACT</p>
          <h2>Parlons de votre projet</h2>

          <form>
            <input type="text" placeholder="Votre nom" />
            <input type="email" placeholder="Votre adresse email" />
            <textarea placeholder="Décrivez votre projet"></textarea>
            <button type="submit">Envoyer le message</button>
          </form>
        </section>
      </main>

      <footer>
        <p>© 2026 IB STUDIO — Tous droits réservés.</p>
      </footer>
    </>
  );
}

export default App;