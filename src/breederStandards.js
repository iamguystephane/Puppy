import React from "react";
import "./App.css";
import Topfooter from "./top-footer";
import NavBar from "./nav";
import family1 from "./images/family-1.webp";
import usdalogo from "./images/usda-logo.png";
import Footer from "./footer";
import housing from "./images/housing-removebg.png";
import training from "./images/training-removebg.png";
import vetcare from "./images/vet-care-removebg.png";
import regular from "./images/regular-removebg.png";
import puppyImg from "./images/education-national-day.jpg";
import { Link } from "react-router-dom";
import MenuBar from "./menu";
export default function BreederStandards() {
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
              <h1> Our Breeder Standards </h1>
              <p>
                No puppy mills. No scammers. No headaches. Sarah Puppy serves
                you best by putting the health and well-being of your puppy
                first. Don't take our word for it, here's what real customers
                have to say about Sarah Puppy.
              </p>
            </div>
            <div className="links">
              <Link to="/promise">Sarah puppy promise </Link>
              <Link to="/reviews">Customer Reviews </Link>
              <Link
                to="/breeder-standards"
                style={{ color: "var(--orange)" }}
                className="Bactive"
              >
                Breeder Standards
              </Link>
              <Link to="/health-check">Health Check</Link>
              <Link to="/puppy-travel">Dog Travel</Link>
              <Link to="/puppy-gives">Sarah Puppy Gives Back </Link>
            </div>
            <div className="puppy-mills">
              <h1> What is a Puppy Mill ? </h1>
              <img src={puppyImg} />
              <p>
                {" "}
                A Puppy Mill is a substandard source for puppies that places
                profit above the welfare of its animals. A Puppy Mill is not
                only inhumane and cruel, but also typically operates in
                violation of the law or government regulations.{" "}
              </p>
            </div>
            <div className="promise-section-body">
              <div className="left-section">
                <img src={family1} />
              </div>
              <div class="zero-tolerance">
                <h1>Zero Tolerance Policy</h1>
                <p>
                  Sarah Puppy has a zero tolerance policy for puppy mills or
                  substandard breeding practices of any kind.
                </p>
              </div>
            </div>
            <div className="license-section">
              <div className="usda-licensed">
                <h2> Licensed by the USDA </h2>
                <img src={usdalogo} width="600px" height="300px" />
                <p>
                  PuppySpot is USDA licensed (cert. # 22-B-0087) and requires
                  that every breeder in our network be licensed as well (unless
                  they are exempt from licensing by the USDA).
                </p>
              </div>
              <div class="img">
                <img src={family1} />
              </div>
            </div>
            <div className="promise-section-body">
              <div className="left-section">
                <img src={family1} />
              </div>
              <div class="breeder-screening">
                <h2> Breeder Screening, Vetting and Review </h2>
                <p>
                  PuppySpot uses a data-driven system to evaluate and screen
                  thousands of breeders across the nation in order to create our
                  exclusive network of breeder partners committed to canine
                  welfare.{" "}
                </p>
                <p>
                  Our formal breeder application includes interviews, review of
                  ownership and operational history, field visits, criminal
                  background checks, facility review, compliance evaluation,
                  government and humanitarian database review and veterinarian
                  history.
                </p>
              </div>
            </div>
            <div className="license-section">
              <div class="img">
                <img src={family1} />
              </div>
              <div className="usda-licensed">
                <h2> Proprietary Breeder Screening </h2>
                <p>
                  <hr style={{ marginBottom: "15px" }} />
                  In addition to all USDA requirements, PuppySpot mandates a
                  comprehensive, proprietary screening process that all breeders
                  must pass at time of onboarding, and again annually. Our
                  screening process was developed by our independent Scientific
                  Advisory Board to exceed all national standards.
                  <hr style={{ marginTop: "15px" }} />
                </p>
              </div>
            </div>
            <div className="standards">
              <div class="info-section">
                <h1> Sarah Puppy's Breeder Standards </h1>
                <div className="paragraphs">
                  <p>
                    PuppySpot spends millions of dollars each year on our
                    rigorous, proprietary screening and compliance program. This
                    enhanced screening process has more than 100 points of
                    emphasis for every puppy and its parents, and is managed by
                    our dedicated Breeder Development team.
                  </p>
                  <p>
                    Additionally, we promptly terminate breeders who violate or
                    do not comply with our standards.
                  </p>
                </div>
              </div>
              <div className="about-section">
                <div className="info">
                  <img src={vetcare} width="100px" height="100px" />
                  <h3> Veterinary Care </h3>
                  <p>
                    We require every breeder to maintain a formal relationship
                    with an attending USDA-accredited veterinarian to maintain a
                    Program of Veterinary Care (a PVC). PuppySpot breeders are
                    also required to follow a minimum vaccination and worming
                    schedule, established by the American Animal Hospital
                    Association (AAHA) for all puppies and parents.
                  </p>
                </div>
                <div className="info">
                  <img src={housing} width="100px" height="100px" />
                  <h3> Housing </h3>
                  <p>
                    The living spaces for every dog must meet our standards.
                    Some of the many factors we monitor include size,
                    pet-friendly materials, aesthetics, ventilation,
                    temperature, noise, flooring, bedding, lighting, cleaning,
                    pest control, outdoor facilities, and more.
                  </p>
                </div>
                <div className="info">
                  <img src={training} width="100px" height="100px" />
                  <h3> Training or Staff </h3>
                  <p>
                    We require every breeder to maintain adequate staffing to
                    provide regular, quality care for every puppy and parent,
                    and to conduct appropriate, comprehensive, and regular
                    training for all staff.
                  </p>
                </div>
                <div className="info">
                  <img src={regular} width="150px" height="100px" />
                  <h3> Regular Check-Ins </h3>
                  <p>
                    Sarah Puppy stays in regular contact with our breeders,
                    monitoring the quality of their operation and compliance
                    with our breeder standards.
                  </p>
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
            <div className="promise-section-body">
              <div className="left-section">
                <img src={family1} />
              </div>
              <div class="fight-scammers">
                <h2> Our Fight Against Puppy Mills and Puppy Scammers </h2>
                <p>
                  The PuppySpot Team is dedicated to working with key decision
                  makers on Capitol Hill to fight against puppy mills and online
                  pet scams. In an ongoing effort to ensure puppies come from
                  responsible breeders, shelters or rescues, we are collecting
                  any information from our community regarding possible pet
                  scams. Please contact us with any info at (937) 770-4584.
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
