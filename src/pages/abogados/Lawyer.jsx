import styles from "../abogados/lawyer.module.css";
import Seo from "../../layout/Seo";
import Lawyers from "../../assets/abogados/abogado.jpg";
import Lawyers2 from "../../assets/Img/contact.avif";
import Lawyers3 from "../../assets/Img/about.avif";
import { useEffect, useState } from "react";

const Lawyer = () => {
  const [backgroundColor, setBackgroundColor] = useState("");
  const [borderColor, setBorderColor] = useState("");

  useEffect(() => {
    generateRandomColors();
  }, []);

  const generateRandomColors = () => {
    const randomBlue = Math.floor(Math.random() * 256);
    const randomGreen = Math.floor(Math.random() * 128);
    const randomRed = Math.floor(Math.random() * 128);

    const newBackgroundColor = `rgba(0, ${randomGreen}, ${randomBlue}, 0.8)`;
    const newBorderColor = `rgba(${randomRed}, ${randomGreen}, ${randomBlue}, 0.3)`;

    setBackgroundColor(newBackgroundColor);
    setBorderColor(newBorderColor);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Seo
        title="Arias y asociados | Abogados"
        description="Somos el despacho de abogados líder en consultoría jurídica y representación legal. Ofrecemos servicios de derecho corporativo, contratos y asesoría legal."
      />

      <main>
        <article className={styles.lawyer_container_general}>
          <article className={styles.lawyer_hero}>
            <section className={styles.lawyer_parallax}>
              <section className={styles.lawyer_parallax_content}>
                <h1>
                  Nuestro equipo de abogados especializados está comprometido
                  con brindarle la mejor representación legal.
                </h1>
              </section>
            </section>
          </article>

          <article className={styles.lawyers_containers}>
            <section
              className={styles.lawyer_container}
              style={{
                backgroundColor: backgroundColor,
                WebkitBackdropFilter: blur("5px"),
                backdropFilter: blur("5px"),
                border: `1px solid ${borderColor}`,
              }}
            >
              <section className={styles.lawyer_div}>
                <img src={Lawyers} alt="Foto del abogado 1" loading="lazy" />
              </section>
              <h2>Manuel David Gomez</h2>
              <p>Abogado Penal</p>

              <a
                href="https://api.whatsapp.com/send?phone=3142179656"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className={styles.lawyer_btn}>Contactame</button>
              </a>
            </section>

            <section
              className={styles.lawyer_container}
              style={{
                backgroundColor: backgroundColor,
                WebkitBackdropFilter: blur("5px"),
                backdropFilter: blur("5px"),
                border: `1px solid ${borderColor}`,
              }}
            >
              <section className={styles.lawyer_div}>
                <img src={Lawyers2} alt="Foto del abogado 2" loading="lazy" />
              </section>
              <h2>Manuel David Gomez</h2>
              <p>Abogado Penal</p>

              <a
                href="https://api.whatsapp.com/send?phone=3142179656"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className={styles.lawyer_btn}>Contactame</button>
              </a>
            </section>

            <section
              className={styles.lawyer_container}
              style={{
                backgroundColor: backgroundColor,
                WebkitBackdropFilter: blur("5px"),
                backdropFilter: blur("5px"),
                border: `1px solid ${borderColor}`,
              }}
            >
              <section className={styles.lawyer_div}>
                <img src={Lawyers} alt="Foto del abogado 3" loading="lazy" />
              </section>
              <h2>Manuel David Gomez</h2>
              <p>Abogado Penal</p>

              <a
                href="https://api.whatsapp.com/send?phone=3142179656"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className={styles.lawyer_btn}>Contactame</button>
              </a>
            </section>

            <section
              className={styles.lawyer_container}
              style={{
                backgroundColor: backgroundColor,
                WebkitBackdropFilter: blur("5px"),
                backdropFilter: blur("5px"),
                border: `1px solid ${borderColor}`,
              }}
            >
              <section className={styles.lawyer_div}>
                <img src={Lawyers3} alt="Foto del abogado 4" loading="lazy" />
              </section>
              <h2>Manuel David Gomez</h2>
              <p>Abogado Penal</p>

              <a
                href="https://api.whatsapp.com/send?phone=3142179656"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className={styles.lawyer_btn}>Contactame</button>
              </a>
            </section>

            <section
              className={styles.lawyer_container}
              style={{
                backgroundColor: backgroundColor,
                WebkitBackdropFilter: blur("5px"),
                backdropFilter: blur("5px"),
                border: `1px solid ${borderColor}`,
              }}
            >
              <section className={styles.lawyer_div}>
                <img src={Lawyers2} alt="Foto del abogado 5" loading="lazy" />
              </section>
              <h2>Manuel David Gomez</h2>
              <p>Abogado Penal</p>

              <a
                href="https://api.whatsapp.com/send?phone=3142179656"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className={styles.lawyer_btn}>Contactame</button>
              </a>
            </section>

            <section
              className={styles.lawyer_container}
              style={{
                backgroundColor: backgroundColor,
                WebkitBackdropFilter: blur("5px"),
                backdropFilter: blur("5px"),
                border: `1px solid ${borderColor}`,
              }}
            >
              <section className={styles.lawyer_div}>
                <img src={Lawyers} alt="Foto del abogado 6" loading="lazy" />
              </section>
              <h2>Manuel David Gomez</h2>
              <p>Abogado Penal</p>

              <a
                href="https://api.whatsapp.com/send?phone=3142179656"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className={styles.lawyer_btn}>Contactame</button>
              </a>
            </section>

            <section
              className={styles.lawyer_container}
              style={{
                backgroundColor: backgroundColor,
                WebkitBackdropFilter: blur("5px"),
                backdropFilter: blur("5px"),
                border: `1px solid ${borderColor}`,
              }}
            >
              <section className={styles.lawyer_div}>
                <img src={Lawyers2} alt="Foto del abogado 7" loading="lazy" />
              </section>
              <h2>Manuel David Gomez</h2>
              <p>Abogado Penal</p>

              <a
                href="https://api.whatsapp.com/send?phone=3142179656"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className={styles.lawyer_btn}>Contactame</button>
              </a>
            </section>

            <section
              className={styles.lawyer_container}
              style={{
                backgroundColor: backgroundColor,
                WebkitBackdropFilter: blur("5px"),
                backdropFilter: blur("5px"),
                border: `1px solid ${borderColor}`,
              }}
            >
              <section className={styles.lawyer_div}>
                <img src={Lawyers3} alt="Foto del abogado 8" loading="lazy" />
              </section>
              <h2>Manuel David Gomez</h2>
              <p>Abogado Penal</p>

              <a
                href="https://api.whatsapp.com/send?phone=3142179656"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className={styles.lawyer_btn}>Contactame</button>
              </a>
            </section>
          </article>
        </article>
      </main>
    </>
  );
};

export default Lawyer;
