import React from "react";
import "./App.css";
import MenuBar from "./menu";
import Topfooter from "./top-footer";
import NavBar from "./nav";
import Footer from "./footer";
import { Link } from "react-router-dom";
import family1 from "./images/family-1.webp";
import housing from "./images/MediumPuppy.png";
import training from "./images/training-removebg.png";
import vetcare from "./images/SmallPuppy.png";

const HealthCheck = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <>
      {menuOpen ? (
        <MenuBar handleMenuClose={() => setMenuOpen(false)} />
      ) : (
        <>
          <Topfooter />
          <NavBar handleMenuOpen={() => setMenuOpen(true)} />
          <div className="promise-section">
            <div className="promise-header">
              <h1> Your Puppy’s Health is Everything </h1>
              <p>
                While we can’t guarantee that your puppy will never have a
                health issue, we are 100% committed to taking every necessary
                step to ensure that your new loved one arrives home in great
                shape and ready to cuddle. One such step is the formation of our
                independent Scientific Advisory Board to guide our puppy health
                practices and protocols. It is composed of five national puppy
                and animal care experts dedicated to the safety and welfare of
                our puppies. They set the health and welfare standard that our
                entire company and breeder partners follow. And we go a step
                further with our 10-Year Health Commitment, a comprehensive
                policy that allows for compensation should your puppy have any
                health issues.
              </p>
            </div>
            <div className="links">
              <Link to="/promise">Sarah puppy promise </Link>
              <Link to="/reviews">Customer Reviews </Link>
              <Link to="/breeder-standards">Breeder Standards</Link>
              <Link
                to="/health-check"
                style={{ color: "var(--orange)" }}
                className="Bactive"
              >
                Health Check
              </Link>
              <Link to="/puppy-travel">Dog Travel</Link>
              <Link to="/puppy-gives">Sarah Puppy Gives Back </Link>
            </div>
            <h1 style={{ textAlign: "center" }}>
              {" "}
              Every puppy receives a nose-to-tail health check before coming
              home.
            </h1>
            <div className="promise-section-body">
              <div className="left-section">
                <img src={family1} />
              </div>
              <div class="breeder-home">
                <h1>Puppy Health Begins at our Breeders’ Homes</h1>
                <p>
                  The environment that a newborn puppy experiences is critical.
                  That’s why PuppySpot has developed the most exacting standards
                  of breeder care in the industry. Our breeders go above and
                  beyond to create environments that are clean, comfortable, and
                  spacious, allowing each puppy to wean, sleep and explore their
                  new world in peace. After a breeder has been accepted into our
                  program all of their puppies must pass our comprehensive
                  health evaluations by a licensed veterinarian just prior to
                  delivery.
                </p>
              </div>
            </div>
            <div className="health-care">
              <div class="breeder-home">
                <h1>Our Comprehensive Health Evaluation</h1>
                <p>
                  Every PuppySpot certified Breeder Partner is required to keep
                  their puppies up-to-date on all vaccinations and deworming
                  regimens. 48 hours prior to delivery each newly adopted puppy
                  must pass a “nose to tail” health evaluation conducted by the
                  Breeder Partner’s licensed veterinarian. The evaluation
                  consists of a thorough examination of a puppy’s ears, eyes,
                  mouth, teeth, gums, respiratory system, cardiovascular system,
                  musculoskeletal system, skin and coat, gastrointestinal
                  system, and external genitalia. The veterinarian is looking
                  for common conditions like conjunctivitis and parasites and
                  far less common indicators of possible congenital issues. The
                  results of the evaluation are then reported through our
                  mandatory Veterinary Health Report (VHR)
                </p>
              </div>
              <div className="left-section">
                <img src={family1} />
              </div>
            </div>
            <h1 style={{ marginTop: "3em", textAlign: "center" }}>
              We are committed to the health of your puppy
            </h1>
            <div className="health-care" style={{ marginTop: "3em" }}>
              <div className="left-section">
                <img src={family1} />
              </div>
              <div class="breeder-home">
                <h1>Your Commitment to Your Puppy’s Health</h1>
                <p>
                  When you adopt a puppy through us, you effectively become our
                  partner in caring for these little puppies for life. It’s part
                  of the reason that we require you to take out pet health
                  insurance and strongly encourage all new owners to take their
                  pup to the vet as soon as possible. Regardless of how well we
                  manage the transition, getting him or checked out right away
                  is the healthy and right thing to do.
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
                  <h3> Days 1-14 after delivery of your puppy </h3>
                  <p>
                    If your puppy is found to have a contagious disease,
                    illness, or parasite, PuppySpot will provide you with
                    reimbursement of reasonable and customary veterinary bills
                    to treat such condition up to the purchase price of your
                    puppy.
                  </p>
                </div>
                <div className="info">
                  <img src={vetcare} width="100px" height="100px" />

                  <h3>
                    {" "}
                    Days 1-365 (first year) after delivery of your puppy{" "}
                  </h3>
                  <p>
                    If your dog is found and certified to have a congenital or
                    hereditary condition which adversely affects the health of
                    the dog by a major insurance provider, PuppySpot will
                    provide reimbursement of reasonable, documented, insurance
                    deductible and copays.
                  </p>
                </div>
                <div className="down-info info">
                  <img src={training} />
                  <h3> Years 2-10 after delivery of your puppy </h3>
                  <p>
                    For all breeds EXCEPT English Bulldogs, if your dog is found
                    and certified by two licensed veterinarians to have a
                    congenital or hereditary condition which adversely affects
                    the health of your dog, PuppySpot shall either issue a
                    credit toward the purchase of another PuppySpot puppy in the
                    amount of reasonable, documented, actually incurred
                    veterinary expenses associated with such diagnosed condition
                    amounting up to fifty percent of the purchase price of your
                    puppy or, if you choose, a direct reimbursement of such
                    amounts up to twenty-five percent of the purchase price of
                    your puppy.
                  </p>
                </div>
                <Link
                  to=""
                  style={{ color: "var(--orange)", fontWeight: "600" }}
                >
                  {" "}
                  Click here to read the full terms and conditions of Sarah
                  Puppy's health Commitment
                </Link>
              </div>
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default HealthCheck;
