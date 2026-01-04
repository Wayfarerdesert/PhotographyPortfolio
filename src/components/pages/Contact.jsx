import React from "react";
import { about } from "../../data/about";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

// Toastify
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    const resolveAfter3Sec = new Promise((resolve) =>
      setTimeout(resolve, 2000)
    );

    emailjs
      .sendForm(
        "service_b4eqn6c", //YOUR_SERVICE_ID
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
            toast.promise(resolveAfter3Sec, {
              pending: "Enviando Mensaje...",
              success: "Gracias. Su información ha sido enviada correctamente.",
              error: "Ha ocurrido un error al enviar la información.",
            });
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  function onChange(value) {
    console.log("Captcha value:", value);
  }

  return (
    <section id="pages" className="contactPage">
      <div className="container">
        <div>
          <p className="about">{about[0].description}</p>
          <img
            src="/img/6_contact/logo.webp"
            alt="LOGO"
            className="logo"
          />
          <img
            src="/img/6_contact/portrait.webp"
            alt="PORTRAIT"
            className="portrait"
          />
        </div>

        {/* CONTACT FORM */}
        <div id="contactForm">
          <form onSubmit={sendEmail}>
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
              placeholder=" tu@correo.com"
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
            <ReCAPTCHA
              sitekey="6Lee3GMpAAAAADYCS2KYUNfQUef8OL-yLJjBQVl0"
              onChange={onChange}
            />
            <input className="sendButton" type="submit" value="Enviar" />
          </form>
        </div>
      </div>
      <ToastContainer position="bottom-right" transition={Slide} />
    </section>
  );
}

export default Contact;
