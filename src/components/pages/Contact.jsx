import React from "react";

function Contact() {
  return (
    <section id="pages">
      <div className="container">
        <div>
          <div>
            <img
              src="../src/assets/img/6_contact/logo.png"
              alt="LOGO"
              className="logo"
            />
            <img
              src="../src/assets/img/6_contact/portrait.png"
              alt="PORTRAIT"
              className="portrait"
            />
          </div>
          <p className="about">
            Facundo Santana nace en 1993 en Córdoba, Argentina. Su interés por
            la fotografía surge a temprana edad; En el año 2014 comenzó a
            estudiar la carrera fotografía en la Universidad Provincial de
            Córdoba, Escuela de Artes Aplicadas Lino Enea Spilimbergo. En el año
            2016, realizo un taller de fotografía documental en el Instituto de
            Formación Fotográfica. En la actualidad se sigue formando, y
            simultaneamente trabaja en diferentes proyectos personales. Se
            desempeña como fotógrafo freelance y colabora para diferentes
            medios.
          </p>
        </div>

        {/* CONTACT FORM */}
        <div id="contactForm">
          <form
            id="validationForm"
            method="post"
            action="./assets/php/contact.php"
          >
            <p id="nameForm">
              <label htmlFor="name">
                <span>*</span>Nombre:
              </label>
              <br />
              <input
                type="text"
                name="name"
                id="name"
                minLength="2"
                maxLength="30"
                title="Ingresa un nombre valido"
                required
              />
              <br />
            </p>
            <p id="emailform">
              <label htmlFor="email">
                <span>*</span>Email:
              </label>
              <br />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="tu@correo.com"
                required
              />
              <br />
            </p>
            <p id="affairForm">
              <label htmlFor="affair">
                <span>*</span>Asunto:
              </label>
              <br />
              <input
                type="text"
                name="affair"
                id="affair"
                minLength="2"
                maxLength="30"
                required
              />
              <br />
            </p>
            <p id="messageForm" className="block">
              <label htmlFor="">
                <span>*</span>Mensaje
              </label>
              <br />
              <textarea
                name="message"
                cols="30"
                rows="3"
                minLength="10"
                maxLength="500"
                required
              ></textarea>
              <br />
            </p>
            <p id="btnForm" className="block">
              <button
                id="sendButton"
                type="submit"
                name="submit"
                value="submit"
                onClick={() => validateEmail()}
              >
                Enviar
              </button>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
