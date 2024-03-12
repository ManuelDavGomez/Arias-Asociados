import { Link } from "react-router-dom";
import logo from "../../assets/Img/logo.avif";
import "./foot.css";

const Foot = () => {
  return (
    <footer>
      <section className="foot_container_general">
        <img width="100%" height="100%" src={logo} alt="Nombre de la empresa" />

        <p className="foot_title">
          Nuestro despacho de abogados ofrece servicios legales especializados
          en derecho civil, penal y laboral. Brindamos asesoramiento jurídico
          integral y representación en casos de litigio. Nuestro compromiso es
          defender tus derechos y buscar la justicia que mereces. Contáctanos
          para una consulta legal gratuita y confía en nuestros abogados
          expertos en abogados, derecho, justicia, consulta legal y litigio.
        </p>

        <article className="foot_links_articles">
          <ul>
            <li>
              <Link to="/" title="Inicio">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/areas-de-practicas" title="Áreas de prácticas">
                Áreas de prácticas
              </Link>
            </li>
            <li>
              <Link to="/abogados" title="Abogados">
                Abogados
              </Link>
            </li>
            <li>
              <Link to="/noticias" title="Noticias">
                Noticias
              </Link>
            </li>
            <li>
              <Link to="/contacto" title="Contacto">
                Contacto
              </Link>
            </li>
          </ul>
        </article>

        <article className="copy_container">
          <p className="copy_title">© 2023 Todos los derechos reservados.</p>

          <div className="copy_icons">
            <a
              href="https://api.WhatsApp.com/send?phone=573223827630"
              title="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-whatsapp" aria-label="WhatsApp"></i>
            </a>
            <a
              href="https://www.facebook.com/tuempresa"
              title="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-facebook" aria-label="Facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/analistagestionhumana23/"
              title="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-instagram" aria-label="Instagram"></i>
            </a>
            <a
              href="https://dependientesjudicialesariasyasociados.blogspot.com/"
              title="Blog"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-journal" aria-label="Blog"></i>
            </a>
          </div>
        </article>
      </section>
    </footer>
  );
};

export default Foot;
