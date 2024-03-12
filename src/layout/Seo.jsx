import { Helmet, HelmetProvider } from "react-helmet-async";
import PropTypes from "prop-types";

const Seo = ({ title, description }) => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
        </Helmet>
      </HelmetProvider>
    </>
  );
};

Seo.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Seo;
