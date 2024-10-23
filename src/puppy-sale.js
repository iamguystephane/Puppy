import React, { useEffect } from "react";
import "./App.css";
import "./media.css";
import "./JS/all";
import Topfooter from "./top-footer";
import MenuBar from "./menu";
import NavBar from "./nav";
import Footer from "./footer";
import { useParams } from "react-router-dom";
import reviewArray from "./review-array-puppy-info";
import { Link } from "react-router-dom";
import HeaderCard from "./header-card";
import noMills from "./images/no-mills.png";
import trusted from "./images/trusted.png";
import delivery from "./images/delivery.png";
import healthyPups from "./images/healthy-pups.png";
import AskAboutMe from "./ask-form";

const PuppySale = ({ puppies }) => {
  const [menuOpen, setMenuOpen] = React.useState(null);
  const [currentId, setCurrentId] = React.useState(0);
  const [showForm, setShowForm] = React.useState(false);

  useEffect(() => {
    showForm
      ? document.body.classList.add("no-scroll")
      : document.body.classList.remove("no-scroll");

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [showForm]);

  function handleMenuClose() {
    setMenuOpen(false);
  }
  function handleMenuOpen() {
    setMenuOpen(true);
  }

  const { id } = useParams();
  const pups = puppies.find((pup) => pup.id === parseInt(id, 10));
  if (!pups) {
    return (
      <>
        <div> Object was not found </div>
        <Link to="/"> Back to home page </Link>
      </>
    );
  }
  function handleNext() {
    setCurrentId((prevId) => (prevId + 1) % pups.slides.length);
  }
  function handlePrev() {
    setCurrentId((prevId) =>
      prevId === 0 ? pups.slides.length - 1 : prevId - 1
    );
  }
  return (
    <>
      {menuOpen ? (
        <MenuBar handleMenuClose={handleMenuClose} />
      ) : (
        <>
          {showForm && (
            <AskAboutMe puppies={pups} hideForm={() => setShowForm(false)} />
          )}
          <Topfooter />
          <NavBar handleMenuOpen={handleMenuOpen} />
          <>
            <div className="puppies-for-sale-info">
              <div className="left-image-slider">
                {pups.slides.map((slide, index) => (
                  <img
                    src={slide.src}
                    width="100px"
                    height="100px"
                    key={index}
                    onClick={() => setCurrentId(index)}
                    className={index === currentId ? "active" : ""}
                    alt=""
                    style={{ cursor: "pointer" }}
                  />
                ))}
              </div>
              <div className="middle-image-slider">
                <div onClick={handlePrev}>
                  <i className=" next prev fa fa-angle-left"></i>
                </div>
                <img
                  src={pups.slides[currentId].src}
                  width="600px"
                  height="500px"
                  style={{ transition: "transition: all 360ms ease-in-out;" }}
                />
                <p className="image-counter">
                  {" "}
                  {`${currentId + 1} / ${pups.slides.length}`}{" "}
                </p>
                <div onClick={handleNext}>
                  <i className=" next fa fa-angle-right" />
                </div>
              </div>
              <div className="puppy-information">
                <h2> {pups.name} </h2>
                <p className="gender-and-age">
                  {" "}
                  {pups.gender}, {pups.age}{" "}
                </p>
                <p className="price"> ${pups.price} </p>
                <p>
                  {" "}
                  <span style={{ color: "grey" }}>Birthdate</span>:{" "}
                  {pups.birthDate}{" "}
                </p>
                <p>
                  {" "}
                  <span style={{ color: "grey" }}>Mom's weight</span>:{" "}
                  {pups.momWeight}{" "}
                </p>
                <p>
                  {" "}
                  <span style={{ color: "grey" }}>Dad's weight</span>:{" "}
                  {pups.dadWeight}{" "}
                </p>
                <div className="sub-info">
                  <p>
                    {" "}
                    <span style={{ color: "grey" }}>Color</span>: {pups.color}{" "}
                  </p>
                  <i className="fa-solid fa-circle-info"></i>
                </div>
                <div className="btns">
                  <Link
                    to=""
                    className="ask-me-btn"
                    onClick={() => setShowForm(true)}
                  >
                    Ask About Me
                  </Link>
                  {/* <Link to="/" className="take-me-home-btn">
                      Take Me Home
                    </Link> */}
                </div>
                <p className="questions">
                  {" "}
                  Have specific questions about {pups.name}? Call us{" "}
                  <a href="tel: (937) 770 4584" className="tel">
                    (937) 770 4584
                  </a>
                </p>
              </div>
            </div>
            <section className="reviews-and-puppy-about">
              <div className="review-section">
                <h3> Sarah Puppy's Dachshaund puppies reviews</h3>
                <p className="heading-review">
                  <div>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star-half"></i>
                  </div>
                  <p>
                    {" "}
                    <strong>4.6</strong> (5,172 reviews)
                  </p>
                </p>
                {reviewArray.map((rev) => (
                  <div className="review-card">
                    <img src={rev.image} width="150px" height="140px" />
                    <div className="right-review-card">
                      <div className="top-section">
                        <div className="rating">
                          <p> By {rev.name} </p>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                        </div>
                        <p> {rev.date}</p>
                      </div>
                      <p> {rev.review}</p>
                    </div>
                  </div>
                ))}
                <Link to="/" className="ask-me-btn">
                  {" "}
                  Read more reviews{" "}
                </Link>
              </div>
              <div className="about-section">
                <div className="line" />
                <h1> About {pups.name}</h1>
                <p className="description">{pups.about}</p>
                <p className="vaccines">
                  {pups.name} will be current on{" "}
                  <strong>vaccinations & vet exams </strong> before going home.
                </p>
                <div className="line" />
                <div className="breeder-info">
                  <h1>{pups.name}'s Breeder</h1>
                  <div className="raised">
                    <i className="fa-solid fa-user"></i>
                    <div className="raised-info">
                      <p className="breeder-names">
                        {" "}
                        {`Raised by ${pups.breeders}`}{" "}
                      </p>
                      <p> {`${pups.experience} of experience`}</p>
                    </div>
                  </div>
                  <div className="license">
                    <i className="fa-solid fa-trophy"></i>
                    <p style={{ fontWeight: "bold" }}> USDA Licensed </p>
                  </div>
                  <div className="verification">
                    <i className="fa-solid fa-star"></i>
                    <div>
                      <strong> Star Breeder </strong>
                      <p>{`${pups.breeders} have been breeders at SarahPuppy for 9 years`}</p>
                    </div>
                  </div>
                  <p style={{ marginTop: "1em" }}>{pups.breederAbout}</p>
                  <ul>
                    <div>
                      <i className="fa-solid fa-check" />
                      <p style={{ fontWeight: "bold" }}>
                        {pups.breeders} meet all our standards:
                      </p>
                    </div>
                    <li>USDA-accredited vet available for any medical need</li>
                    <li>Comfortable and clean living spaces</li>
                    <li>
                      Expertise ensures top-notch care for puppies and their
                      parents
                    </li>
                    <li>
                      Health is monitored, adhering to AAHA vaccination and
                      worming schedules
                    </li>
                  </ul>
                  <div className="line" />
                </div>
                <div className="transportation">
                  <h2> Bringing {pups.name} home</h2>
                  <p>We have 3 travel packages for {pups.name}:</p>
                  <div className="car">
                    <div className="sub-car">
                      <i className="fa-solid fa-car transport-icon"></i>
                      <div>
                        <strong> Breeders Meet Up </strong>
                        <p>
                          Meet the breeder near their home and pickup your puppy
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="car">
                    <div className="sub-car">
                      <i className="fa-solid fa-house transport-icon"></i>
                      <div>
                        <strong> Deliver Near You </strong>
                        <p>
                          Pickup your puppy from our USDA-licensed travel
                          partner at a location near to your home
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="car">
                    <div className="sub-car">
                      <i className=" transport-icon fa-solid fa-plane"></i>
                      <div>
                        <strong> Puppy Chaperone </strong>
                        <p>
                          Puppy flies in cabin with a trained, USDA-licensed
                          puppy chaperone
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="priority">
                    <i className="smile-emoji fas fa-smile"></i>
                    <div>
                      <strong> We Prioritize Comfort </strong>
                      <p>
                        {" "}
                        Our dedicated team and travel partners always put the
                        health and wellbeing of your puppy first, making sure
                        they arrive safely, and as quickly as possible.
                      </p>
                    </div>
                  </div>
                  <div className="quick-facts">
                    <h2> Quick Facts About Dachshaund Puppies </h2>
                    <p>
                      {" "}
                      All three sizes of Poodles - Standard, Miniature, and toy
                      -- are amazingly smart and loyal, allergy-friendly, and
                      wonderful family dogs.{" "}
                    </p>
                    <div className="facts">
                      <div className="temperament">
                        <div>
                          <i className="fa-solid fa-paw"></i>
                          <strong> temperament</strong>
                        </div>
                        <p> Active, Independent, Smart </p>
                      </div>
                      <div className="temperament-line" />
                      <div className="temperament">
                        <div>
                          <i className="fa-solid fa-bolt"></i>
                          <strong> Energy </strong>
                        </div>
                        <p> Moderate </p>
                      </div>
                      <div className="bars">
                        <div className="bar" />
                        <div className="bar" />
                        <div className="bar2" />
                      </div>
                      <div className="temperament-line" />
                      <div className="temperament">
                        <div>
                          <i className="fa-solid fa-paw"></i>
                          <strong> Breed Group </strong>
                        </div>
                        <p> Not Sporting </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="why-us">
                  <h3 style={{ color: "var(--green)" }}>
                    {" "}
                    Why Sarah's Puppies?{" "}
                  </h3>
                  <p>
                    {" "}
                    We are the easiest, safest, most-trusted way to get a new
                    puppy.{" "}
                  </p>
                  <div className="why-us-info">
                    <HeaderCard
                      Img={noMills}
                      name="No Puppy Mills"
                      characteristic="Only Vetted Breeders"
                    />
                    <HeaderCard
                      Img={healthyPups}
                      name="Healthy Pups"
                      characteristic="10-Year Health Commitment"
                    />
                    <HeaderCard
                      Img={delivery}
                      name="Easy, Safe Delivery"
                      characteristic="Our Private Travel Network"
                    />
                    <HeaderCard
                      Img={trusted}
                      name="Trusted"
                      characteristic="220,000+ Happy Puppies Placed"
                    />
                  </div>
                </div>
              </div>
            </section>
          </>
          <Footer />
        </>
      )}
    </>
  );
};

export default PuppySale;
