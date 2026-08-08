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
<a href="#tarifs">Tarifs</a>
<a href="#realisations">Réalisations</a>
<a href="#temoignages">Témoignages</a>
<a href="#apropos">À propos</a>
<a href="#contact">Contact</a>
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
              Nous créons des sites web qui développent votre activité.
            </h1>

            <p>
              IB STUDIO accompagne les artistes, les labels, les DJ et les
              créateurs dans la création de sites web premium et
              d'identités digitales élégantes.
            </p>

            <div className="buttons">
              <a href="#services" className="btn">
                Découvrir nos services
              </a>

              <a href="#contact" className="btn btn-outline">
                Nous contacter
              </a>
            </div>
          </div>

          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
              alt="Composants électroniques et technologie"
            />
          </div>
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
      <p className="price">250€ - 350€</p>
      <ul>
        <li>Site vitrine 1 page</li>
        <li>Design responsive</li>
        <li>Formulaire de contact</li>
        <li>Liens réseaux sociaux</li>
        <li>Livraison 5-7 jours</li>
      </ul>
      <a href="#contact" className="btn">
        Demander un devis
      </a>
    </article>

    <article className="pricing-card pricing-featured">
      <span className="badge">Populaire</span>
      <h3>PRO</h3>
      <p className="price">500€ - 700€</p>
      <ul>
        <li>Site multi-sections</li>
        <li>Design personnalisé</li>
        <li>SEO de base</li>
        <li>Formulaire + réseaux sociaux</li>
        <li>Livraison 10-14 jours</li>
      </ul>
      <a href="#contact" className="btn">
        Demander un devis
      </a>
    </article>

    <article className="pricing-card">
      <h3>PREMIUM</h3>
      <p className="price">900€ - 1200€</p>
      <ul>
        <li>Tout le pack Pro</li>
        <li>Boutique en ligne</li>
        <li>Blog intégré</li>
        <li>SEO avancé</li>
        <li>1 mois de support inclus</li>
        <li>Livraison 3-4 semaines</li>
      </ul>
      <a href="#contact" className="btn">
        Demander un devis
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

              <h3>Boutique en ligne premium</h3>
<p>Étude de style — Projet conceptuel</p>
            </article>
          </div>
        </section>
<section
  id="temoignages"
  className="testimonials"
  data-aos="fade-up"
>

  <p className="subtitle">TÉMOIGNAGES</p>
  <h2>Ce qu'en disent nos clients</h2>

  <div className="testimonial-grid">
    <article className="testimonial-card">
      <p className="quote">
        « IB STUDIO a su capturer mon univers à la perfection. Un site élégant, rapide et qui me ressemble vraiment. »
      </p>
      <div className="testimonial-author">
        <h3>Maël Vasquez</h3>
        <span>Rap</span>
      </div>
    </article>

    <article className="testimonial-card">
      <p className="quote">
        « Un travail soigné du début à la fin. Mon portfolio a transformé l'image que je renvoie à mon public. »
      </p>
      <div className="testimonial-author">
        <h3>Léna Sow</h3>
        <span>R&B</span>
      </div>
    </article>
    <article className="testimonial-card">
      <p className="quote">
        « Professionnalisme, écoute et créativité. Ma boutique en ligne est à la fois belle et redoutablement efficace. »
      </p>
      <div className="testimonial-author">
        <h3>Kofi Mensah</h3>
        <span>Afro</span>
      </div>
    </article>
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
          <span>IB</span> STUDIO
        </div>

        <p>Créatif · Digital · Performance</p>
        <p>© 2026 IB STUDIO. Tous droits réservés.</p>
      </footer>
    </>
  );
}

export default App;