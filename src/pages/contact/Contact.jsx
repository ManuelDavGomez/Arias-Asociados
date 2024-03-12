import Seo from "../../layout/Seo";
import styles from "../contact/contact.module.css";
import React, { Suspense, lazy } from "react";
import { useEffect } from "react";
import { HashLoader } from "react-spinners";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const LazyMap = lazy(
    () =>
      new Promise((resolve) =>
        setTimeout(() => resolve(import("../../components/Map/Map")), 5000)
      )
  );

  return (
    <>
      <Seo
        title="Arias y asociados | Contacto"
        description="Contáctame en Arias & Asociados, un prestigioso despacho de abogados especializado en derecho corporativo, consultoría jurídica y representación legal. "
      />

      <main>
        <article className={styles.contact_container_general}>
          <article className={styles.contact_hero}>
            <section className={styles.contact_parallax}>
              <section className={styles.contact_parallax_content}>
                <h1>
                  Si tienes alguna pregunta, consulta o simplemente quieres
                  ponerte en contacto con nosotros, no dudes en hacerlo.
                </h1>
              </section>
            </section>
          </article>

          <article className={styles.contacto_container_general}>
            <article className={styles.contactos_containers}>
              <h2 className={styles.contactos_title}>CONTACTANOS</h2>
              <p>
                Ponte en contacto con nosotros para recibir asesoramiento legal
                de calidad. Nuestro equipo de abogados especializados está listo
                para ayudarte en tus casos legales. ¡Contáctanos hoy mismo!
              </p>

              <article className={styles.iconos_container_general}>
                <section className={styles.iconos_container}>
                  <i className="bi bi-geo-alt-fill" />
                  <h3>
                    <strong>Direccion: </strong>
                    Carrera 1A # 17 - 23
                  </h3>
                </section>

                <section className={styles.iconos_container}>
                  <i className="bi bi-envelope" />
                  <h3>
                    <strong>Email: </strong>
                    analistagestion <br /> humana23@gmail.com
                  </h3>
                </section>

                <section className={styles.iconos_container}>
                  <i className="bi bi-telephone" />
                  <h3>
                    <strong>Telefono: </strong>
                    314-794-6350 <br /> 322-382-7630
                  </h3>
                </section>
              </article>

              <section className={styles.social_container}>
                <a
                  href="https://api.WhatsApp.com/send?phone=573223827630"
                  title="Whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-whatsapp"></i>
                </a>

                <a
                  href="#"
                  title="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-facebook"></i>
                </a>

                <a
                  href="https://www.instagram.com/analistagestionhumana23/"
                  target="_blank"
                  title="Instagram"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-instagram"></i>
                </a>

                <a
                  href="https://dependientesjudicialesariasyasociados.blogspot.com/"
                  target="_blank"
                  title="Blog"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-journal"></i>
                </a>
              </section>
            </article>

            <section className={styles.contactos_containers}>
              <form className={styles.contact_form}>
                <section className={styles.form_group}>
                  <label htmlFor="name">Nombre:</label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="Escriba su nombre"
                  />
                </section>
                <section className={styles.form_group}>
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="sucorreo@gmail.com"
                  />
                </section>
                <section className={styles.form_group}>
                  <label htmlFor="phone">Teléfono:</label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    placeholder="Ejemplo: 322 239 1929"
                  />
                </section>
                <section className={styles.form_group}>
                  <label htmlFor="message">Cuentanos su caso:</label>
                  <textarea
                    id="message"
                    required
                    placeholder="Nuestro equipo se encargara del proceso"
                  ></textarea>
                </section>
                <button type="submit" className={styles.form_btn}>
                  Enviar
                </button>
              </form>
            </section>
          </article>

          <article
            style={{ width: "100%", height: "100%", backgroundColor: "black" }}
          >
            <Suspense
              fallback={
                <section
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "55vh",
                  }}
                >
                  <HashLoader color="#40e0d0" size={120} />
                </section>
              }
            >
              <LazyMap />
            </Suspense>
          </article>
        </article>
      </main>
    </>
  );
};

export default Contact;
