import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const examples = [
  { category: "Coiffure et beauté", name: "Rosa Style", detail: "Présentez vos prestations et facilitez la prise de contact.", status: "Site client", url: "https://rosastyle.fr", image: "https://rosastyle.fr/assets/rosa-logo.png", logo: true },
  { category: "Décoration et intérieur", name: "Essentiel et M.O.Y", detail: "Mettez en valeur votre univers et vos accompagnements.", status: "Projet client · En cours de validation", url: "https://essentiel-et-moy.dialloib124.chatgpt.site", image: "https://essentiel-et-moy.dialloib124.chatgpt.site/assets/salon-hd.jpg" },
  { category: "Artistes et musique", name: "NOVA", detail: "Réunissez votre musique, votre image et vos contacts booking.", status: "Démonstration fictive", url: "https://nova-ib-studio.dialloib124.chatgpt.site", image: "https://nova-ib-studio.dialloib124.chatgpt.site/assets/scene.webp" },
  { category: "Boutiques et vente", name: "Maison Noryelis", detail: "Découvrez un exemple de présentation de produits et de collections.", status: "Projet conceptuel", url: "https://maison-noryelis.dialloib124.chatgpt.site", image: "https://maison-noryelis.dialloib124.chatgpt.site/maison-noryelis-hero.png" },
  { category: "Bâtiment et artisans", name: "ChantierFacile", detail: "Explorez une application de gestion des clients, prestations et devis.", status: "Application de démonstration", url: "https://chantierfacile-ib.dialloib124.chatgpt.site", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80" },
];

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
<a href="#realisations">Exemples</a>
<a href="#apropos">À propos</a>
<a href="https://chantierfacile-ib.dialloib124.chatgpt.site">ChantierFacile</a>
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
<a
  href="https://ib-studio-business.dialloib124.chatgpt.site/offre"
  className="btn"
>
  Découvrir l’offre à 490 €
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
              <a
                href="https://chantierfacile-ib.dialloib124.chatgpt.site"
                className="btn-primary"
                style={{ marginTop: "20px", padding: "12px 18px" }}
              >
                Accéder à ChantierFacile
              </a>
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
        <section id="realisations" className="projects sector-examples" aria-labelledby="examples-title">
          <p className="subtitle">DES EXEMPLES POUR VOTRE ACTIVITÉ</p>
          <h2 id="examples-title">Trouvez l’inspiration pour votre projet</h2>
          <p className="examples-intro">Choisissez votre univers, explorez un exemple et parlons du site ou de l’application adapté à votre activité.</p>
          <div className="examples-grid">
            {examples.map((example) => (
              <article className="example-card" key={example.name}>
                <a href={example.url} target="_blank" rel="noopener noreferrer" className="example-preview" aria-label={`Voir l’exemple ${example.name} (nouvel onglet)`}>
                  <img src={example.image} alt={`Aperçu de l’univers ${example.name}`} loading="lazy" className={example.logo ? "example-logo" : undefined} />
                  <span className="example-category">{example.category}</span>
                </a>
                <div className="example-content">
                  <p className="example-status">{example.status}</p>
                  <h3>{example.name}</h3>
                  <p className="example-detail">{example.detail}</p>
                  <div className="example-actions">
                    <a href={example.url} className="btn-primary" target="_blank" rel="noopener noreferrer" aria-label={`Voir l’exemple ${example.name} (nouvel onglet)`}>Voir l’exemple ↗</a>
                    <a href={`https://wa.me/33650744061?text=${encodeURIComponent(`Bonjour IB Studio, j’ai découvert votre exemple ${example.name} (${example.url}). Je souhaite un ${example.name === "ChantierFacile" ? "outil" : "site"} comme celui-ci pour mon activité. Pouvons-nous en parler ?`)}`} className="example-contact" target="_blank" rel="noopener noreferrer">{example.name === "ChantierFacile" ? "Je veux un outil comme celui-ci" : "Je veux un site comme celui-ci"}</a>
                  </div>
                </div>
              </article>
            ))}
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
        <section className="newsletter-section">
  <p className="subtitle">ACTUALITÉS</p>
  <h2 className="newsletter-mobile-title">
  Recevez les actualités IB Studio
</h2>
  <p className="newsletter-intro">
  Découvrez nos nouveaux projets, des conseils pour renforcer votre image et des offres réservées aux abonnés.
</p>

  <iframe
    src="https://15nsl.mjt.lu/wgt/15nsl/0y9u/form?c=40134689"
    title="Inscription aux actualités IB Studio"
    width="100%"
    height="300"
    scrolling="no"
    style={{ border: "0" }}
  />
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
  action="https://api.web3forms.com/submit"
  method="POST"
>
  <input
    type="hidden"
    name="access_key"
    value="e8037a34-2d45-4552-809a-4dfdfc63ab4e"
  /><
    input
  type="hidden"
  name="subject"
  value="Nouvelle demande IB Studio"
/>
  <input
    type="hidden"
    name="redirect"
    value="https://www.ibstudio-agency.com/merci.html"
  />

  <input
    type="text"
    name="nom"
    placeholder="Votre nom complet"
    required
  />
<select name="metier" required>
  <option value="">Choisissez votre métier</option>
  <option value="Artiste">Artiste</option>
  <option value="Rappeur">Rappeur</option>
  <option value="DJ">DJ</option>
  <option value="Entrepreneur">Entrepreneur</option>
  <option value="Label">Label</option>
  <option value="Autre">Autre</option>
</select>
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
        <a
  href="https://wa.me/33650744061?text=Bonjour%20IB%20Studio%2C%20je%20souhaite%20discuter%20de%20mon%20projet."
  className="whatsapp-float"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Contacter IB Studio sur WhatsApp"
>
  ☎
</a>
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