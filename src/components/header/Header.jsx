import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Img/logo.avif";
import "./header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarStyle = {
    transition: "background-color 0.5s ease",
    backgroundColor: scrolling
      ? "rgba(123, 123, 123, 0.8)"
      : "rgba(85, 85, 85, 0.1)",
    WebkitBackdropFilter: scrolling ? "blur(1px)" : "blur(1px)",
    backdropFilter: scrolling ? "blur(1px)" : "blur(1px)",
  };

  const navbarMenuStyle = {
    transition: "background-color 0.5s ease",
    backgroundColor: scrolling
      ? "rgba(123, 123,123, 0.8)"
      : "rgba(85,85,85,0.1)",
    WebkitBackdropFilter: scrolling ? "blur(1px)" : "blur(1px)",
    backdropFilter: scrolling ? "blur(1px)" : "blur(1px)",
    ...(window.innerWidth > 561 && { backgroundColor: "transparent" }),
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 561) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header>
      <nav className="navbar" style={navbarStyle}>
        <section className="navbar-logo">
          <Link to="/">
            <img width="100%" height="100%" src={Logo} className="nav_logo" alt="Logo" />
          </Link>
        </section>

        <ul
          className={`navbar-menu ${isOpen ? "open" : ""}`}
          style={navbarMenuStyle}
        >
          <li>
            <Link to="/" className="nav_links">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/areas-de-practicas" className="nav_links">
              Áreas de prácticas
            </Link>
          </li>
          <li>
            <Link to="/abogados" className="nav_links">
              Abogados
            </Link>
          </li>
          <li>
            <Link to="/noticias" className="nav_links">
              Noticias
            </Link>
          </li>
          <li>
            <Link to="/contacto" className="nav_links last">
              Contacto
            </Link>
          </li>
        </ul>

        <button className="navbar-toggle" onClick={toggleMenu}>
          💼
        </button>
      </nav>
    </header>
  );
};

export default Header;
