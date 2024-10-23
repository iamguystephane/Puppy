import React from "react";
import "./App.css";
import Topfooter from "./top-footer";
import Footer from "./footer";
import NavBar from "./nav";
import MenuBar from "./menu";
import { Link } from "react-router-dom";
import family1 from "./images/exercise-exercise.jpg";
import family3 from "./images/family-3.jpeg";
import family2 from "./images/family-2.jpg";
import family4 from "./images/family-4.jpg";
import housing from "./images/home-delivery.png";
import training from "./images/chaperone.png";
import vetcare from "./images/puppymailbox.png";
import regular from "./images/regular-removebg.png";

export default function PuppyTravel() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <>
      {menuOpen ? (
        <MenuBar handleMenuClose={() => setMenuOpen(false)} />
      ) : (
        <div>
          <Topfooter />
          <NavBar handleMenuOpen={() => setMenuOpen(true)} />
          <div className="promise-section">
            <div className="promise-header">
              <h1> We Deliver Joy </h1>
              <p>
                <strong>
                  Our puppies are delivered by people who love your puppy as
                  much as you do
                </strong>
                . At PuppySpot, we understand traveling can be scary for
                first-timers, whether they walk on two legs or four. Our
                dedicated team and travel partners always put the health and
                wellbeing of your puppy first, making sure he or she arrives
                safely, and as quickly as possible. When making travel
                arrangements, we always choose what is safest and most
                comfortable for your puppy.
              </p>
              <Link to="/available-puppies">
                <button> See available puppies </button>
              </Link>
            </div>
            <div className="links">
              <Link to="/promise">Sarah puppy promise </Link>
              <Link to="/reviews">Customer Reviews </Link>
              <Link to="/breeder-standards">Breeder Standards</Link>
              <Link to="/health-check">Health Check</Link>
              <Link
                to="/puppy-travel"
                style={{ color: "var(--orange)" }}
                className="Pactive"
              >
                Dog Travel
              </Link>
              <Link to="/puppy-gives">Sarah Puppy Gives Back </Link>
            </div>
            <div className="with-love">
              <div className="left-section">
                <h2>
                  {" "}
                  Sarah Puppy oversees various trusted, USDA-certified
                  transportation options.
                </h2>
              </div>
              <div className="right-section">
                <img src={family1} width="100%" height="300px" />
                <p style={{ marginTop: "5px" }}>
                  {" "}
                  Whether your puppy travels on a commercial airline, in cabin
                  with one of our trained Chaperones, or along one of our select
                  ground routes, all of our puppies travel under USDA-guidelines
                  for proper animal care, and according to Sarah Puppy time
                  limits.{" "}
                </p>
                <br />
                <p>
                  Simply put, each travel option is designed to put the health
                  and welfare of your puppy first. If you wish to pick up your
                  new puppy yourself, we can provide advice on how best to do
                  that.
                </p>
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
            <div className="transportation">
              <h3 className="main-heading">
                {" "}
                Our transportation options ensure the health, comfort, quality,
                and communication from the breeder’s doorstep to that first
                wet-nose moment.{" "}
              </h3>
              <div className="about-section">
                <div className="info">
                  <img src={vetcare} width="150px" height="100px" />
                  <h3 style={{color: 'var(--orange)'}}> Breeder Meetup </h3>
                  <p>
                  Meet the breeder and your puppy at a location near the kennel. (Not available on all Puppies) 
                  </p>
                  <p>This option is $287, which includes:  </p>
                  <ul>
                    <li>In person meet up with the breeder</li>
                    <li>Your puppy's health certificate</li>
                    <p> Please remember to bring: </p>
                    <li>A travel carrier, leash and collar</li>
                    <li>Food, water, and Nutri-Cal</li>
                    <li>Cleaning supplies and a toy from your PupPack</li>
                  </ul>
                  <p>If you are flying to meet your puppy, please coordinate with your airline to determine their specific requirements for transporting your new puppy back home. If you are driving, you can click here for more info on traveling with your puppy.</p>
                  <p>If you are interested in a pickup, please check with a PuppySpot pack member to see if this is an option. </p>
                </div>
                <div className="info">
                  <img src={housing} width="100px" height="100px" />
                  <h3 style={{color: 'var(--orange)'}}> Deliver Near Your Home </h3>
                  <p>
                  PuppySpot works with trusted licensed professionals in the commercial air and ground transportation puppy travel business to get your puppy to an airport or one of our pickup locations as close to your home as possible.  Once you’ve completed payment for your puppy, our  team will get to work determining the best possible way to travel your puppy from where they live to where you live.  Keep in mind that both air and ground travel can be limited  by many factors beyond weather, so we all need to be flexible with dates and times of your puppy’s arrival.
                  </p>
                  <p>This package is $749, which includes: </p>
                  <ul>
                    <li> Delivery </li>
                    <li> Your puppy's health certificate </li>
                  </ul>
                </div>
                <div className="info">
                  <img src={training} width="100px" height="100px" />
                  <h3 style={{color: 'var(--orange)'}}> Puppy Chaperone </h3>
                  <p>
                  A Puppy Chaperone brings your puppy to an airport near you. A Puppy Chaperone is a human companion who accompanies your puppy in the cabin of the plane. The Puppy Chaperone will personally greet you at the airport to deliver your healthy puppy directly to you. Keep in mind that air travel can be limited due to weather anywhere along your puppy’s route, so we all need to be flexible with dates and times of arrival. 
                  </p>
                  <p>This package is $1,983, which includes:</p>
                  <ul>
                    <li>Puppy Chaperone travel cost</li>
                    <li>Your puppy's health certificate</li>
                    <li>Travel carrier </li>
                  </ul>
                </div>
                <div className="info">
                  <i className="sun-icon fa-solid fa-sun"></i>
                  <h3 style={{color: 'var(--orange)'}}> Weather, Heat, and Travel Information </h3>
                  <p>
                  We try to get all our puppies home within 2-3 weeks. To do so, the puppy will need to meet age, weight and health requirements before being authorized to travel. The Travel team will then choose the best travel method for each puppy and customer based on many factors, including breeder and customer location, puppy age, and size. As soon as we know the best way to get your puppy home, you will be the first to know.
                  </p>
                  <p></p>
                </div>
                <p style={{ fontWeight: "600" }}>
                  {" "}
                  Caring for puppies and their parents on a daily basis is about
                  more than just government standards and health evaluations. We
                  closely manage breeders' standards for everything from food
                  and water to socialization, exercise, and enrichment. We
                  expect breeders to consider the behavioral needs of their dogs
                  and puppies by providing socialization, human interaction, and
                  early neurological stimulation.
                </p>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}
