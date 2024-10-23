import React from "react";
import "./App.css";
import NavBar from "./nav";
import Footer from "./footer";
import Topfooter from "./top-footer";
import review6 from "./images/review6.jpg";
import AboutLeadership from "./about-leadership";
import Leadership from "./aboutLeadership";
import MenuBar from "./menu";

export default function About() {
  const leadership = Leadership.map((lead) => {
    return <AboutLeadership key={lead.id} lead={lead} />;
  });
  const [menuOpen, setMenuOpen] = React.useState(null);
  function handleMenuOpen() {
    setMenuOpen(true);
  }
  function handleMenuClose() {
    setMenuOpen(false);
  }
  return (
    <div className="container">
      {menuOpen ? (
        <MenuBar handleMenuClose={handleMenuClose} />
      ) : (
        <>
          <Topfooter />
          <NavBar handleMenuOpen={handleMenuOpen} />
          <section className="about-header">
            <p>
              <b> Our mission </b> is to help people find their perfect puppy
              and the love that comes with it.
            </p>
          </section>
          <div className="about-body-section1">
            <h1> About Sarah Dachshund Puppy </h1>
            <p>
              {" "}
              We are a community of dog lovers, committed to connecting the
              nation’s top breeders to caring, responsible individuals and
              families. We hold ourselves and our customers to the highest
              standards and aim to improve the life of each puppy, breeder and
              owner who joins our family.{" "}
            </p>
          </div>
          <div className="about-body-section2">
            <p> We have placed over 220,000 puppies into over 220,000 homes.</p>
            <img src={review6} width="600px" height="300px" alt="" />
          </div>
          <div className="about-body-final-section">
            <h1> Leadership </h1>
            {leadership}
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}
