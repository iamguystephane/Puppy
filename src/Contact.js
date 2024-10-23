import React from "react";
import "./App.css";
import Topfooter from "./top-footer";
import Footer from "./footer";
import NavBar from "./nav";
import "./JS/all";
export default function Contact() {
  return (
    <>
      <Topfooter />
      <NavBar />
      <div className="contact-section">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="48px"
          viewBox="0 -960 960 960"
          width="48px"
          fill="#78A75A"
        >
          <path d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm340-302L140-685v465h680v-465L480-462Zm0-60 336-218H145l335 218ZM140-685v-55 520-465Z" />
        </svg>
        <p> Contact Us </p>
        <p> Need help? </p>
        <span>
          You can also reach our team by email or phone for additional support &nbsp;
          <a href="mailto: sarahdachshaund@gmail.com">sarahdachshaund@gmail.com</a> |{" "}
          <a href="tel:+19377704584">(937) 770-4584</a>
        </span>
      </div>
      <Footer />
    </>
  );
}
