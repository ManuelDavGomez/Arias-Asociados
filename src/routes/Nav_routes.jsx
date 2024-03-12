import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Practica from "../pages/practicas/Practica";
import Notice from "../pages/noticias/Notice";
import Lawyer from "../pages/abogados/Lawyer";
import Contact from "../pages/contact/Contact";
import Error from "../pages/error/Error.jsx";

const Nav_routes = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="/areas-de-practicas" element={<Practica />} />
        <Route path="/noticias" element={<Notice />} />
        <Route path="/abogados" element={<Lawyer />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </>
  );
};

export default Nav_routes;
