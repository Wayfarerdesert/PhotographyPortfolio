import React from "react";
import { Link } from 'react-router-dom';

import "../../index.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <small>
          © <Link to="/" className="customLink">Facundo Santana</Link> | Todos los derechos reservados | 2024{" "}
        </small>
      </div>
    </>
  );
}

export default Footer;
