import React from "react";
import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="footer">
        <small>
          © <Link to="/" className="customLink">Facundo Santana</Link> | Todos los derechos reservados | {currentYear}
        </small>
      </div>
    </>
  );
}

export default Footer;
