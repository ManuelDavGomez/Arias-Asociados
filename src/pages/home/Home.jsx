import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import styles from "../home/home.module.css";
import Seo from "../../layout/Seo.jsx";
import About_img from "../../assets/Img/about.avif";
import About_horizon from "../../assets/Img/about_horizon.avif";

import One from "../../assets/svg/one.svg";
import Two from "../../assets/svg/two.svg";
import Three from "../../assets/svg/three.svg";
import Four from "../../assets/svg/four.svg";
import Five from "../../assets/svg/five.svg";
import Six from "../../assets/svg/six.svg";

export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [aboutImage, setAboutImage] = useState(About_img);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 926) {
        setAboutImage(About_horizon);
      } else {
        setAboutImage(About_img);
      }
    };

    handleResize();

    // Verifica si la ubicación actual es la página de inicio
    if (location.pathname === "/") {
      // Agrega el event listener solo si estamos en la página de inicio
      window.addEventListener("resize", handleResize);
    }

    // Limpia el event listener en el desmontaje del componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [location.pathname]); // Ejecuta el useEffect cuando location.pathname cambie

  // ...

  return (
    <>
      <Seo
        title="Arias & Asociados | Inicio"
        description="Soluciones legales expertas y personalizadas. Confía en nuestros abogados, especializado en derecho corporativo. Arias y Asociados: tu socio legal de confianza."
      ></Seo>

      <main>
        <article className={styles.container_general}>
          
          <article className={styles.hero_container}>
            <section className={styles.hero_parallax}>
              <section className={styles.hero_parallax_content}>
                <hr />
                <h1>
                  ARIAS <br /> & <br />
                  ASOCIADOS
                </h1>
                <hr />
              </section>
            </section>
          </article>

          <article className={styles.about_container_general}>
            <h2 className={styles.about_title}>SOBRE NOSOTROS</h2>

            <section className={styles.about_container}>
              <div className={styles.about_img_div}>
                <img
                  loading="lazy"
                  src={aboutImage}
                  className={styles.about_image}
                  alt="Imagen sobre nosotros"
                />
              </div>

              <div className={styles.about_text_div}>
                <p className={styles.about_text}>
                  En Arias y Asociados, somos un destacado despacho de abogados
                  especializado en brindar servicios integrales de consultoría
                  jurídica y asesoría legal. Con un equipo altamente capacitado
                  y una amplia experiencia en diversas ramas del derecho,
                  estamos comprometidos en proporcionar soluciones legales
                  efectivas y personalizadas a nuestros clientes. Nuestra pasión
                  por la justicia y nuestro enfoque centrado en el cliente nos
                  distinguen. Trabajamos arduamente para comprender las
                  necesidades específicas de cada individuo, empresa o
                  institución a la que representamos. Nuestro objetivo es proteger tus intereses y alcanzar los resultados deseados.
                </p>
                <Link to="/abogados">
                  <button className={styles.about_btn}>
                    Nuestros abogados
                  </button>
                </Link>
              </div>
            </section>
          </article>

          <article className={styles.advisory_container_general}>
            <h2 className={styles.advisory_title_primary}>
              ASESORIAS & REPRESENTACIONES
            </h2>

            <article className={styles.advisory_container}>
              <Link to="/areas-de-practicas">
                <section className={styles.advisory_box}>
                  <img src={One} alt="Representación penal" loading="lazy" />
                  <h3 className={styles.advisory_titles}>Derecho Penal</h3>
                </section>
              </Link>
              <Link to="/areas-de-practicas">
                <section className={styles.advisory_box}>
                  <img src={Two} alt="Representación judicial" loading="lazy" />
                  <h3 className={styles.advisory_titles}>Derecho Judicial</h3>
                </section>
              </Link>
              <Link to="/areas-de-practicas">
                <section className={styles.advisory_box}>
                  <img src={Three} alt="Representación civil" loading="lazy" />
                  <h3 className={styles.advisory_titles}>Derecho Civil</h3>
                </section>
              </Link>
              <Link to="/areas-de-practicas">
                <section className={styles.advisory_box}>
                  <img
                    src={Four}
                    alt="Representación laboral y comercial"
                    loading="lazy"
                  />
                  <h3 className={styles.advisory_titles}>
                    Laboral y Comercial
                  </h3>
                </section>
              </Link>
              <Link to="/areas-de-practicas">
                <section className={styles.advisory_box}>
                  <img src={Five} alt="Derechos de autor" loading="lazy" />
                  <h3 className={styles.advisory_titles}>Derechos de Autor</h3>
                </section>
              </Link>
              <Link to="/areas-de-practicas">
                <section className={styles.advisory_box}>
                  <img
                    src={Six}
                    alt="Escrituras y testimonios"
                    loading="lazy"
                  />
                  <h3 className={styles.advisory_titles}>
                    Escrituras y Testimonios
                  </h3>
                </section>
              </Link>
            </article>
          </article>

          <section className={styles.news_container}>
            <h2 className={styles.news_title}>
              ¿Buscas información actualizada sobre artículos y temas legales
              relevantes?
            </h2>
            <p className={styles.news_text}>
              En Arias y Asociados, te ofrecemos una amplia selección de
              noticias y artículos para mantenerte informado sobre los
              acontecimientos más recientes en el mundo jurídico.
            </p>
            <Link to="/noticias">
              <button className={styles.news_btn}>Ver artículos</button>
            </Link>
          </section>

          <article className={styles.decoration_container}>
            <section className={styles.decoration_parallax}></section>
          </article>

          <section className={styles.network_container}>
            <h2 className={styles.network_title}>
              Escribenos tus consultas y dudas
            </h2>
            <p className={styles.network_text}>
              Estamos aquí para ayudarte a encontrar respuestas a tus preguntas
              legales y brindarte el asesoramiento necesario. Nuestro equipo de
              abogados expertos está listo para escuchar tus inquietudes y
              ofrecerte soluciones personalizadas. Si necesitas orientación
              legal, no dudes en utilizar el boton de contacto a continuación.
              ¡Escríbenos tus consultas y dudas y nos comunicaremos contigo lo
              antes posible! Podrás conectarte con uno de nuestros abogados
              especializados en derecho civil, laboral, penal u otros aspectos
              legales. No importa la naturaleza de tu consulta, estamos aquí
              para brindarte la ayuda que necesitas. ¡Contáctanos hoy mismo para
              recibir el apoyo legal que mereces!
            </p>
            <Link to="/contacto">
              <button className={styles.network_btn}>Contáctanos</button>
            </Link>
          </section>

          <article className={styles.frase_container}>
            <section className={styles.frase_parallax}>
              <section className={styles.frase_parallax_content}>
                <p>
                  Los abogados son los embajadores de la justicia, los
                  guardianes de la libertad y los defensores de la igualdad ante
                  la ley. - Robert Kennedy
                </p>
              </section>
            </section>
          </article>
        </article>
      </main>
    </>
  );
};

export default Home;
