import "./error.css";

const Error = () => {
  return (
    <section className="error_container">
      <section className="animation-container">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </section>
      <h1 className="error-text">404</h1>
      <p className="error-message">
        Lo siento, la página que buscas no existe.
      </p>
    </section>
  );
};

export default Error;
