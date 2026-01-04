import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={styles.container}>
      <img src="/notFound/notFound.svg" alt="404 Not Found" style={styles.image} />
      <h2 style={styles.message}>Página no encontrada</h2>
      <p style={styles.message}>Lo sentimos, la página que estás buscando no existe.</p>
      <Link to="/" style={styles.link}>
        Vuelve al inicio
      </Link>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  image: {
    width: '250px',
    marginBottom: '20px',
  },
  message: {
    fontSize: "22px",
    color: "#555",
  },
  link: {
    fontSize: "16px",
    color: "blue",
    textDecoration: "none",
  },
};

export default NotFound;
