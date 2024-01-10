import React from "react";
import { Link } from 'react-router-dom';
import { about } from "../../data/about";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="footer">
        <small>
          © <Link to="/" className="customLink"><b>{about[0].name}</b></Link> | Todos los derechos reservados | {currentYear}
        </small>
      </div>
    </>
  );
}

export default Footer;
