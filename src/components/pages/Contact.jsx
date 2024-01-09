import React from "react";
import { about } from "../../data/about";
import emailjs from "@emailjs/browser";

function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8tmdarj", //YOUR_SERVICE_ID
        "photoPortfolio_template", //YOUR_TEMPLATE_ID
        e.target,
        "jwIUtBZGozXmnvbn-" //YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result.status === 200) {
            // Reset the form after successful submission
            e.target.reset();
            // Show a success message
            alert("Gracias. Su información ha sido enviada correctamente.");
          }
        },
        (error) => {
          console.log(error.text);
          alert("Ha ocurrido un error al enviar la información.");
        }
      );
  }

  return (
    <section id="pages">
      <div className="container">
        <div>
          <p className="about">{about}</p>
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

        {/* CONTACT FORM */}
        <div id="contactForm">
          <form
            onSubmit={sendEmail}
          >
            <label htmlFor="name">
              <span>*</span>Nombre:
            </label>
            <br />
            <input
              type="text"
              name="user_name"
              id="name"
              minLength="2"
              maxLength="30"
              title="Ingresa un nombre valido"
              required
            />
            <br />

            <label htmlFor="email">
              <span>*</span>Email:
            </label>
            <br />
            <input
              type="email"
              name="user_email"
              id="email"
              placeholder="tu@correo.com"
              required
            />
            <br />

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
            <input className="sendButton" type="submit" value="Enviar" />
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
