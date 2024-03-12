import Seo from "../../layout/Seo";
import styles from "../practicas/practica.module.css";

import One from "../../assets/svg/one.svg";
import Two from "../../assets/svg/two.svg";
import Three from "../../assets/svg/three.svg";
import Four from "../../assets/svg/four.svg";
import Five from "../../assets/svg/five.svg";
import Six from "../../assets/svg/six.svg";
import { useEffect } from "react";

const Practica = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Seo
        title="Arias y Asociados | Áreas de práctica legal"
        description="Nuestro despacho de abogados, Arias y Asociados, ofrece consultoría y representación legal en derecho penal, judicial y otras áreas.Expertos en brindar asesoría"
      />

      <main>
        <article className={styles.practica_container_general}>
          <article className={styles.practica_hero}>
            <section className={styles.practica_parallax}>
              <section className={styles.practica_parallax_content}>
                <h1>
                  Ofrecemos una amplia gama de áreas de práctica legales y
                  comerciales para satisfacer las necesidades de nuestros
                  clientes.
                </h1>
              </section>
            </section>
          </article>

          <article className={styles.practicas_container}>
            <section className={styles.practical_containers}>
              <div className={styles.practical_box1}>
                <img
                  width="100%"
                  height="100%"
                  src={One}
                  alt="Representación penal"
                  loading="lazy"
                />
              </div>

              <div className={styles.practical_box2}>
                <h2>DERECHO PENAL</h2>
                <p>
                  Tener a tu lado a un equipo legal experimentado es fundamental
                  cuando se trata de enfrentar asuntos de Derecho Penal. En
                  Arias & Asociados, somos un destacado despacho de abogados con
                  una sólida experiencia en el ámbito del Derecho Penal. <br />{" "}
                  Nuestro equipo de abogados penalistas está comprometido en
                  proteger tus derechos y ofrecerte la mejor defensa posible en
                  casos penales. Entendemos que enfrentar cargos penales puede
                  ser una experiencia estresante y desafiante, por eso nos
                  esforzamos por brindarte un apoyo legal confiable y
                  estratégico en cada etapa del proceso.
                </p>
              </div>
            </section>

            <section
              className={`${styles.practical_containers} ${styles.practical_two}`}
            >
              <div className={styles.practical_box1}>
                <img
                  width="100%"
                  height="100%"
                  src={Two}
                  alt="Representación judicial"
                  loading="lazy"
                />
              </div>

              <div className={styles.practical_box2}>
                <h2>DERECHO JUDICIAL</h2>
                <p>
                  Confía en Arias y Asociados, el prestigioso despacho de
                  abogados especializado en derecho judicial y corporativo.
                  Nuestro equipo de expertos abogados se dedica a brindar una
                  sólida consultoría jurídica y asesoría legal a empresas y
                  particulares en busca de representación legal de calidad.{" "}
                  <br />
                  En Arias y Asociados, entendemos la importancia de contar con
                  un abogado competente en el complejo mundo del derecho.
                  Nuestro despacho se enorgullece de ofrecer un servicio
                  integral en litigio y resolución de conflictos, tanto en el
                  ámbito civil como penal. Nos dedicamos a proteger los derechos
                  e intereses de nuestros clientes, garantizando una
                  representación legal firme y efectiva en los tribunales.
                </p>
              </div>
            </section>

            <section
              className={`${styles.practical_containers} ${styles.practical_three}`}
            >
              <div className={styles.practical_box1}>
                <img
                  width="100%"
                  height="100%"
                  src={Three}
                  alt="Representación civil"
                  loading="lazy"
                />
              </div>

              <div className={styles.practical_box2}>
                <h2>DERECHO CIVIL</h2>
                <p>
                  En Arias y Asociados, nuestro despacho de abogados
                  especializado en derecho civil, ofrecemos una amplia gama de
                  servicios legales para resolver tus problemas jurídicos de
                  manera efectiva y confiable. Nuestro equipo de abogados
                  altamente capacitados está comprometido en brindarte una
                  asesoría legal integral y representación legal excepcional en
                  todos los asuntos relacionados con el derecho civil.
                  <br />
                  Con una sólida experiencia en consultoría jurídica y
                  asesoramiento legal, en Arias y Asociados entendemos que cada
                  caso es único. Ya sea que necesites ayuda en temas de
                  responsabilidad civil, contratos, reclamaciones de daños y
                  perjuicios, o cualquier otro aspecto del derecho civil,
                  estamos aquí para ayudarte a proteger tus derechos e
                  intereses.
                </p>
              </div>
            </section>

            <section className={styles.practical_containers}>
              <div className={styles.practical_box1}>
                <img
                  width="100%"
                  height="100%"
                  src={Four}
                  alt="Representación laboral y comercial"
                  loading="lazy"
                />
              </div>

              <div className={styles.practical_box2}>
                <h2>LABORAL Y COMERCIAL</h2>
                <p>
                  En el ámbito laboral, entendemos la importancia de contar con
                  una sólida base legal para garantizar relaciones laborales
                  justas y cumplir con las regulaciones vigentes. Nuestros
                  abogados laboralistas brindan asesoramiento experto en
                  contratos laborales, despidos, reclamaciones salariales,
                  acuerdos de confidencialidad y otros aspectos laborales clave.
                  Nos esforzamos por mantenernos al día con los cambios
                  legislativos para ofrecer a nuestros clientes la mejor
                  protección y orientación en asuntos laborales.
                  <br />
                  En el campo comercial, ofrecemos servicios de derecho
                  corporativo y contratos que ayudan a las empresas a operar de
                  manera eficiente y segura. Nuestros abogados comerciales son
                  expertos en la redacción y revisión de contratos comerciales,
                  acuerdos de distribución, fusiones y adquisiciones, protección
                  de la propiedad intelectual y resolución de conflictos
                  comerciales
                </p>
              </div>
            </section>

            <section
              className={`${styles.practical_containers} ${styles.practical_two}`}
            >
              <div className={styles.practical_box1}>
                <img
                  width="100%"
                  height="100%"
                  src={Five}
                  alt="Derechos de autor"
                  loading="lazy"
                />
              </div>

              <div className={styles.practical_box2}>
                <h2>DERECHOS DE AUTOR</h2>
                <p>
                  ¿Necesitas proteger tus derechos de autor? En Arias y
                  Asociados, nuestro despacho de abogados especializado en
                  derecho corporativo y consultoría jurídica, te ofrece la
                  representación legal y asesoría necesaria para salvaguardar tu
                  propiedad intelectual. Contáctanos hoy mismo. <br />
                  En un mundo donde la creatividad y la originalidad tienen un
                  valor incalculable, es fundamental contar con una protección
                  sólida para tus derechos de autor. En Arias y Asociados, un
                  prestigioso despacho de abogados con amplia experiencia en
                  consultoría jurídica, estamos comprometidos con brindarte la
                  asesoría legal necesaria para resguardar tus obras y
                  garantizar que obtengas los beneficios que te corresponden.
                </p>
              </div>
            </section>

            <section
              className={`${styles.practical_containers} ${styles.practical_three}`}
            >
              <div className={styles.practical_box1}>
                <img
                  width="100%"
                  height="100%"
                  src={Six}
                  alt="Escrituras y testimonios"
                  loading="lazy"
                />
              </div>

              <div className={styles.practical_box2}>
                <h2>ESCRICTURAS Y TESTIMONIOS</h2>
                <p>
                  Dentro de nuestros servicios legales, destacamos en la
                  redacción y gestión de escrituras y testimonios, un aspecto
                  fundamental en el ámbito legal. Sabemos lo importante que es
                  contar con documentos legales sólidos y precisos para
                  garantizar la validez y seguridad jurídica de tus
                  transacciones y acuerdos.
                  <br />
                  Nuestro equipo de abogados especializados en derecho
                  corporativo y contratos se encargará de redactar y revisar
                  minuciosamente tus escrituras y testimonios, asegurándose de
                  que cumplan con todas las formalidades legales necesarias. Nos
                  comprometemos a ofrecerte un servicio personalizado, adaptado
                  a tus necesidades específicas y a la legislación vigente.
                </p>
              </div>
            </section>
          </article>
        </article>
      </main>
    </>
  );
};

export default Practica;
