import styles from "./notice.module.css";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import moment from "moment/moment";
import { MoonLoader } from "react-spinners";
import Seo from "../../layout/Seo.jsx";
const Notice = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [expandedPosts, setExpandedPosts] = useState({});
  const [loading, setLoading] = useState(true);
  const blogId = "1341050371301085072";
  const apiKey = "AIzaSyDlW35g3r00dNq-v1gK0Kwv_PJKcKYqcYg";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts?key=${apiKey}`
        );
        const data = await response.json();
        if (data.items) {
          const initialExpandedPosts = {};
          data.items.forEach((post) => {
            initialExpandedPosts[post.id] = false;
          });
          setTimeout(() => {
            setPosts(data.items);
            setExpandedPosts(initialExpandedPosts);
            setLoading(false);
          }, 2000);
        }
      } catch (error) {
        console.error("Error:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    const filtered = posts.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(filtered);
  }, [searchTerm, posts]);
  const formatDateTime = (dateTime) => {
    return moment(dateTime).format("D/MMMM/YYYY h:mm a");
  };
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <>
      <Seo
        title="Arias y asociados | Noticias"
        description="Obtén asesoría legal de calidad con Arias y Asociados, expertos en derecho corporativo, litigio y contratos. Nuestros abogados brinda representación legal"
      />
      <main>
        <article className={styles.noticias_container_general}>
          <article className={styles.noticias_hero}>
            <section className={styles.noticias_parallax}>
              <section className={styles.noticias_parallax_content}>
                <h1>
                  En nuestra página web, te invitamos a explorar nuestra sección
                  de artículos legales, donde encontrarás información clave
                  sobre diversos temas jurídicos.
                </h1>
              </section>
            </section>
          </article>
          <section className={styles.input_container}>
            <input
              className={styles.input_texts}
              type="text"
              placeholder="Buscar"
              value={searchTerm}
              onChange={handleSearch}
            />
          </section>
          <article className={styles.menu_container_general}>
            <AnimatePresence>
              {loading ? (
                <div
                  className={styles.spinner_container}
                  style={{
                    height: "50vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MoonLoader color="#00d9ff" loading={loading} size={100} />
                </div>
              ) : filteredPosts.length === 0 ? (
                <motion.p
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className={styles.error_texts}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  No se encontraron resultados.
                </motion.p>
              ) : (
                filteredPosts.map((post) => (
                  <motion.article
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className={styles.articles_container_general}
                    style={{ wordBreak: "break-word" }}
                    key={post.id}
                  >
                    <h2 className={styles.articles_title}>{post.title}</h2>
                    <h3 className={styles.articles_date}>
                      {formatDateTime(post.published)}
                    </h3>
                    {expandedPosts[post.id] ? (
                      <section
                        className={styles.articles_container}
                        dangerouslySetInnerHTML={{ __html: post.content }}
                      ></section>
                    ) : (
                      <section
                        className={styles.articles_container}
                        dangerouslySetInnerHTML={{
                          __html: post.content.slice(0, 200) + "...",
                        }}
                      ></section>
                    )}
                    <button
                      className={styles.articles_btn}
                      onClick={() => {
                        setExpandedPosts((prevExpandedPosts) => ({
                          ...prevExpandedPosts,
                          [post.id]: !prevExpandedPosts[post.id],
                        }));
                      }}
                    >
                      {expandedPosts[post.id] ? "Leer menos" : "Leer más"}
                    </button>
                  </motion.article>
                ))
              )}
            </AnimatePresence>
          </article>
        </article>
      </main>
    </>
  );
};

export default Notice;
