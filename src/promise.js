import React from "react";
import "./App.css";
import Topfooter from "./top-footer";
import NavBar from "./nav";
import Footer from "./footer";
import family1 from "./images/family-1.webp";
import family3 from "./images/family-3.jpeg";
import family2 from "./images/family-2.jpg";
import family4 from "./images/family-4.jpg";
import family5 from "./images/family-5.jpg";
import family6 from "./images/family-6.jpg";
import family7 from "./images/family-7.jpg";
import gives from "./images/gives-removebg.png";
import horse from "./images/horse-removebg.png";
import love from "./images/love-removebg.png";
import communityLove from "./images/community-removebg.png";
import puppyParts from "./images/dog-parts.jpg";
import { Link } from "react-router-dom";
import ReviewPart from "./review-part";
import MenuBar from "./menu";

export default function Promise() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <>
      {menuOpen ? (
        <MenuBar handleMenuClose={() => setMenuOpen(false)} />
      ) : (
        <div>
          <Topfooter />
          <NavBar />
          <div className="promise-section">
            <div className="promise-header">
              <h1> Our Perfect Puppy Promise </h1>
              <p>
                We promise to do everything we can to provide you with your
                perfect puppy and to have your experience with us leave you with
                a big smile and a warm heart.
              </p>
            </div>
            <div className="links">
              <Link
                to="/promise"
                className="Pactive"
                style={{ color: "var(--orange)" }}
              >
                Sarah puppy promise{" "}
              </Link>
              <Link to="/reviews">Customer Reviews </Link>
              <Link to="/breeder-standards">Breeder Standards</Link>
              <Link to="/health-check">Health Check</Link>
              <Link to="/puppy-travel">Dog Travel</Link>
              <Link to="/puppy-gives">Sarah Puppy Gives Back </Link>
            </div>
            <div className="promise-section-body">
              <div className="left-section">
                <img src={family1} />
              </div>
              <div class="right-section">
                <ReviewPart
                  image={communityLove}
                  heading="Proof Positive of our Promise"
                  paragraph1="Founded in 2005; 20 years of customer satisfaction."
                  paragraph2="12,000 and growing real 5-star reviews."
                  paragraph3="An overall rating of 4.7 out of 5. (Okay we still have some work to do!)."
                  button="Read Review"
                  link="reviews"
                />
              </div>
            </div>
            <div className="images">
              <div className="left-section">
                <img src={family2} />
                <img src={family3} />
              </div>
              <div className="right-section">
                <img src={family4} width="100%" height="100vh" />
              </div>
            </div>
            <div className="national-artwork">
              <div className="heading">
                <img src={horse} width="120px" height="100px" />
                <h2>A National Network of Certified Breeder Partners</h2>
              </div>
              <div class="artwork-wrapper">
                <div className="check-line">
                  <i className="check fa fa-check" />
                  <p>
                    {" "}
                    Care standards designed by an independent Scientific
                    Advisory Board.
                  </p>
                </div>
                <div className="check-line">
                  <i className="check fa fa-check" />
                  <p> he most rigorous screening process in the industry.</p>
                </div>
                <div className="check-line">
                  <i className="check fa fa-check" />
                  <p>Annual audits to ensure ongoing conformance.</p>
                </div>
                <div className="check-line">
                  <i className="check fa fa-check" />
                  <p>No puppy mills or quantity focused breeders.</p>
                </div>
                <Link to="/reviews">
                  <button> Read More </button>
                </Link>
              </div>
            </div>
            <div className="health-care-section">
              <div className="left-section">
                <img src={puppyParts} width="200px" height="200px" />
              </div>
              <div class="right-section">
                <ReviewPart
                  image={horse}
                  heading="Our Comprehensive Health Evaluation"
                  paragraph1="Every Breeder Partner is required to keep their puppies up-to-date on all vaccinations and deworming regimens."
                  paragraph2="48 hours prior to delivery each newly adopted puppy must pass a “nose to tail” health evaluation conducted by a licensed veterinarian."
                  paragraph3="All puppies are covered by our 10-year Health Commitment (if insurance is in place)."
                  button="Learn More"
                  link="health-check"
                />
              </div>
            </div>
            <div className="deliver-love-section">
              <div className="left-section">
                <img src={family5} />
                <img src={family6} />
              </div>
              <div className="right-section">
                <ReviewPart
                  image={love}
                  heading="Love Delivered by Love"
                  paragraph1="Our puppy transport partners love puppies as much as we do."
                  paragraph2="They’re USDA certified and provide a range of handle with care options"
                  paragraph3="All guarantee that the delivery experience is as stress free as possible, for the puppy and you."
                  button="Learn More"
                  link="dog-travel"
                />
              </div>
            </div>
            <div className="national-artwork">
              <div className="heading">
                <img src={gives} width="120px" height="100px" />
                <h2>Sarah Puppy Gives Back</h2>
              </div>
              <div class="artwork-wrapper">
                <div className="check-line">
                  <i className="check fa fa-check" />
                  <p>
                    {" "}
                    We are proud to share that PuppySpot is an official
                    Make-A-Wish national partner, a recognition of the fact that
                    animals improve the quality of our lives, and our mental
                    health!
                  </p>
                </div>
                <div className="check-line">
                  <i className="check fa fa-check" />
                  <p>
                    {" "}
                    very team member is encouraged to volunteer quarterly at a
                    local humane shelter or shelter.
                  </p>
                </div>
                <div className="check-line">
                  <i className="check fa fa-check" />
                  <p>
                    We also run a national program for retired breeding dogs and
                    rehoming dogs whose families can no longer take care of
                    them.
                  </p>
                </div>
                <Link to="/gives-back" className="read-more-btn">
                  <button> Read More </button>
                </Link>
              </div>
            </div>
            <div className="images">
              <div className="left-section">
                <img src={family7} />
                <img src={family3} />
              </div>
              <div className="right-section">
                <img src={family4} width="100%" height="100vh" />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}
