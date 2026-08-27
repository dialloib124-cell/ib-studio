import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <header className="header">
        <div className="logo">
  <span>IB</span> STUDIO
</div>

        <nav>
          <a href="#accueil">Accueil</a>
<a href="#services">Services</a>
<a href="#apropos">À propos</a>
<a href="#contact" className="btn">Prendre rendez-vous</a>
        </nav>
      </header>

      <main>
        <section
          id="accueil"
          className="hero"
          data-aos="fade-up"
        >
          <div className="hero-text">
            <p className="subtitle">STUDIO CRÉATIF DIGITAL</p>

            <h1>
  Transformez votre passion en une présence digitale qui attire des clients.
</h1>

<p>
  IB Studio crée des sites web premium pour les artistes, les labels, les DJ
  et les créateurs qui veulent développer leur activité et renforcer leur image.
</p>

            <div className="buttons">
              <a href="#services" className="btn">
                Découvrir nos solutions
              </a>

              <a href="#contact" className="btn btn-outline">
                parler de mon projet
              </a>
            </div>
          </div>

          <div className="hero-image">
            <img
  src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=85"
  alt="Artiste en performance dans un univers musical"
/>
          </div></section>
  <section
          id="diagnostic"
          className="diagnostic"
          data-aos="fade-up"
        >
          <div>
            <p className="subtitle">Votre mini-diagnostic digital gratuit</p>

            <p>
              Recevez gratuitement 3 recommandations personnalisées pour
              améliorer votre présence en ligne avec la méthode COP-COL :
              comprendre, créer.
            </p>
          </div>

          <form
            action="https://formsubmit.co/contact.ibstudioweb@gmail.com"
            method="POST"
          >
            <input type="hidden" name="_next" value="/merci.html" />

            <input
              type="text"
              name="prenom"
              placeholder="Prénom"
            />

            <input
              type="email"
              name="email"
              placeholder="Votre adresse e-mail"
              required
            />
            <select name="type_de_projet" defaultValue="vitrine">
              <option value="vitrine">site vitrine</option>
              <option value="boutique">boutique en ligne</option>
              <option value="portfolio">portfolio</option>
              <option value="application">application web</option>
              <option value="autre">autre</option>
            </select>

            <textarea
              name="description"
              placeholder="Une courte description du projet"
              rows={5}
            />

            <label className="checkbox-label" style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "12px" }}>
              <input
                type="checkbox"
                name="consentement"
                value="oui"
                required
              />
              J’accepte d’être recontacté(e) par IB Studio au sujet de mon projet.
            </label>

            <button className="btn-primary" type="submit">
              Recevoir mon diagnostic gratuit
            </button>
          </form>
        </section>

        <section
          id="services"
          className="services"
          data-aos="zoom-in"
        >
        <p className="subtitle services-title">nos services</p>
          <h2>
            Des solutions complètes pour votre présence en ligne
          </h2>

          <div className="cards">
            <article className="card">
              <span>01</span>
              <h3>Création de sites web</h3>
              <p>
                Sites vitrines modernes, rapides et adaptés aux téléphones,
                tablettes et ordinateurs.
              </p>
            </article>

            <article className="card">
              <span>02</span>
              <h3>Boutiques en ligne</h3>
              <p>
                Des boutiques simples, élégantes et efficaces pour vendre vos
                produits sur internet.
              </p>
            </article>

            <article className="card">
              <span>03</span>
              <h3>Applications web</h3>
              <p>
                Des applications personnalisées pour répondre aux besoins de
                votre activité.
              </p>
            </article>

            <article className="card">
              <span>04</span>
              <h3>Conception UX/UI</h3>
              <p>
                Des interfaces claires, agréables et faciles à utiliser pour
                vos visiteurs.
              </p>
            </article>

            <article className="card">
              <span>05</span>
              <h3>SEO et performance</h3>
              <p>
                Optimisation de la vitesse et du référencement de votre site
                sur les moteurs de recherche.
              </p>
            </article>

            <article className="card">
              <span>06</span>
              <h3>Maintenance</h3>
              <p>
                Mise à jour, sécurité, correction des problèmes et assistance
                technique.
              </p>
            </article>
          </div>
        </section>
<section
  id="tarifs"
  className="pricing"
  data-aos="fade-up"
>

  <p className="subtitle">TARIFS</p>
  <h2>Une offre pour chaque projet</h2>

  <div className="pricing-grid">
    <article className="pricing-card">
      <h3>STARTER</h3>
      <p className="price">À partir de 250€</p>
      <ul>
        <li>Site vitrine 1 page</li>
        <li>Design responsive</li>
        <li>Formulaire de contact</li>
        <li>Liens réseaux sociaux</li>
        <li>Livraison 24-48 heures</li>
      </ul>
      <a href="https://buy.stripe.com/bJeaF0c6ebDadcSe3NdQQ00" className="btn">
        Payer l’offre Starter — 250 €
      </a>
    </article>
    <article className="pricing-card pricing-featured">
      <span className="badge">Populaire</span>
      <h3>PRO</h3>
      <p className="price">À partir de 500€</p>
      <ul>
        <li>Site multi-sections</li>
        <li>Design personnalisé</li>
        <li>SEO de base</li>
        <li>Formulaire + réseaux sociaux</li>
        <li>Livraison 48 heures à 1 semaine</li>
      </ul>
      <a href="https://buy.stripe.com/6oU3cyb2a36Egp4bVFdQQ01" className="btn">
        Payer l’offre Pro — 500 €
      </a>
    </article>

    <article className="pricing-card">
      <h3>PREMIUM</h3>
      <p className="price">À partir de 900€</p>
      <ul>
        <li>Tout le pack Pro</li>
        <li>Boutique en ligne</li>
        <li>Blog intégré</li>
        <li>SEO avancé</li>
        <li>1 mois de support inclus</li>
        <li>Livraison 1-2 semaines</li>
      </ul>
      <a href="https://buy.stripe.com/00w4gC1rA0Ywfl01h1dQQ02" className="btn">
        Payer l’offre Premium — 900 €
      </a>
    </article>
  </div>
</section>
        <section
          id="realisations"
          className="projects"
          data-aos="fade-up"
        >
          <p className="subtitle">NOS RÉALISATIONS</p>

          <h2>
            Des projets simples, élégants et performants
          </h2>

          <div className="project-grid">
            <article className="project">
              <div className="project-image project-one">
                <span>Projet 01</span>
              </div>

              <h3>Site premium pour artiste</h3>
<p>Étude de style — Projet conceptuel</p>
            </article>

            <article className="project">
              <div className="project-image project-two">
                <span>Projet 02</span>
              </div>

              <h3>Portfolio premium pour artiste</h3>
<p>Étude de style — Projet conceptuel</p>
            </article>

            <article className="project">
              <div className="project-image project-three">
                <span>Projet 03</span>
              </div>

              <h3>Maison Noryelis — Boutique de bijoux premium<a href="https://maison-noryelis.dialloib124.chatgpt.site" target="_blank" rel="noopener noreferrer" style={{ display: "block", marginTop: "12px", color: "#f5b934", fontSize: "14px", textDecoration: "none" }}>Voir le site ↗</a></h3>
<p>Projet conceptuel — Création IB Studio</p>            </article>
          </div>
        </section>
<section
  id="temoignages"
  className="testimonials"
  data-aos="fade-up"
>
  <p className="subtitle">TÉMOIGNAGES</p>
  <h2>Les premiers témoignages arrivent bientôt.</h2>

  <p style={{ maxWidth: "720px", margin: "20px auto", textAlign: "center" }}>
    Vous avez un projet ? Collaborez avec IB Studio et devenez l’un de nos
    premiers clients partenaires.
  </p>

  <div style={{ textAlign: "center", marginTop: "24px" }}>
    <a href="#contact" className="btn">
      Parler de votre projet
    </a>
  </div>
</section>
        <section
          id="apropos"
          className="about"
          data-aos="fade-up"
        >
          <div>
            <p className="subtitle">À PROPOS</p>

            <h2>
              Nous créons des univers numériques qui marquent les esprits.
            </h2>

            <p>
              IB STUDIO accompagne les artistes, les labels, les DJ et les
              créateurs dans la création de sites web premium, d'identités
              visuelles et d'univers numériques élégants.
            </p>

            <p>
              Chaque projet est conçu avec élégance, stratégie et souci du
              détail afin de renforcer l'image de chaque artiste et
              créateur.
            </p>
          </div>
        </section>

        <section
          id="contact"
          className="contact"
          data-aos="fade-up"
        >
          <div className="contact-text">
            <p className="subtitle">CONTACT</p>

            <h2>Parlons de votre projet</h2>

            <p>
              Vous avez besoin d'un site internet, d'un portfolio ou
              d'une boutique en ligne ? Envoyez-nous votre demande.
            </p>
          </div>

         <p className="contact-email">
  E-mail :{" "}
<a href="mailto:contact.ibstudioweb@gmail.com">
  contact.ibstudioweb@gmail.com
</a>
</p>

<form
  action="https://formsubmit.co/contact.ibstudioweb@gmail.com"
  method="POST"
>
  <input
    type="hidden"
    name="_next"
    value="https://www.ibstudio-agency.com/merci.html"
  />

  <input
    type="text"
    name="nom"
    placeholder="Votre nom"
    required
  />

  <input
    type="email"
    name="email"
    placeholder="Votre adresse e-mail"
    required
  />

            <textarea
            name="message"
              placeholder="Décrivez votre projet"
              rows="7"
              required
            />

            <button
              className="btn-primary"
              type="submit"
            >
              Envoyer le message
            </button>
          </form>
        </section>
      </main>

      <footer>
        <div className="logo">
          <span>IB⁹²</span> STUDIO
        </div>

        <p>Créatif · Digital · Performance</p>
        <p>© 2026 IB STUDIO. Tous droits réservés.</p>
      </footer>
    </>
  );
}

export default App;