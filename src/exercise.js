import "./App.css";
import "./JS/all";
// import { Link } from 'react-router-dom'
import React from "react";
import Topfooter from "./top-footer";
import Footer from "./footer";
import NavBar from "./nav";
import MenuBar from "./menu";
import ExerciseArticles from "./exercise-articles";
import exerciseCard from "./exerciseCard";
import PuppySearch from "./puppysearch";
import PopularRn from "./popular";

export default function Exercise() {
  const travel = exerciseCard.map((item) => {
    return <ExerciseArticles key={item.id} item={item} />;
  });
  const [menuOpen, setMenuOpen] = React.useState(null);

  function handleMenuOpen() {
    setMenuOpen(true);
  }
  function handleMenuClose() {
    setMenuOpen(false);
  }
  return (
    <div>
      {menuOpen ? (
        <MenuBar handleMenuClose={handleMenuClose} />
      ) : (
        <>
          <Topfooter />
          <NavBar handleMenuOpen={handleMenuOpen} />
          <div className="main-travel-section">
            <div class="header-body-searchbar">
              <input
                type="text"
                placeholder="What are you interested in today?"
              />
              <i className="fa fa-search header-body-searchIcon" />
            </div>
            <h1 style={{ marginTop: "1em" }}> Exercise </h1>
            <p>
              {" "}
              All puppies and dogs need their exercise. Here are some guidelines
              and tips to puppy exercise.{" "}
            </p>
            <h3 style={{ marginTop: "1em" }}>
              {" "}
              {exerciseCard.length} articles{" "}
            </h3>
            <div className="articles">{travel}</div>
            <PopularRn />
            <PuppySearch />
          </div>

          <Footer />
        </>
      )}
    </div>
  );
}
