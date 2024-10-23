import "./App.css";
import React from "react";
import "./JS/all";
import PromiseDropdown from "./nav-dropdown";
import AboutDropdown from "./contact-dropdown";
import puppyCards from "./puppy-cards";
import Search from "./search";
import NoResult from "./search-no-result";
import { Link } from "react-router-dom";
import "./media.css";

function NavBar({ handleMenuOpen }) {
  const [handleDisplay, setHandleDisplay] = React.useState(null);
  const [timerId, setTimerId] = React.useState(null);
  const [searchData, setSearchData] = React.useState("");
  const filterItems = (puppyCards, searchData) => {
    if (!searchData) {
      return puppyCards;
    }
    return puppyCards.filter(
      (pup) =>
        pup.name.toLowerCase().includes(searchData) ||
        pup.name.includes(searchData) || pup.gender.toLowerCase().includes(searchData) || pup.gender.includes(searchData)
    );
  };

  let filteredItems = filterItems(puppyCards, searchData);
  function handleMouseEnter(tab) {
    clearTimeout(timerId);
    const id = setTimeout(() => {
      setHandleDisplay(tab);
    }, 300);
    setTimerId(id);
  }
  function handleMouseOut() {
    const id = setTimeout(() => {
      setHandleDisplay(null);
    }, 700);
    setTimerId(id);
  }
  return (
    <>
      <nav>
        <div class="nav-wrapper">
          <div className="left-nav">
            <div onClick={handleMenuOpen}>
              <i className="fa-solid fa-bars menu-bar"></i>
            </div>
            <Link to="/" className="logo">
              {" "}
              Sarah Dachshund Puppy{" "}
            </Link>
          </div>
          <div className="middle-nav">
            <ul className="middle-nav-ul">
              <li>
                <Link to="/available-puppies" className="available-puppies">
                  {" "}
                  Available puppies{" "}
                </Link>
              </li>
              <li className="promise-ul">
                <Link
                  to="/promise"
                  className="our-promise"
                  onMouseOut={handleMouseOut}
                  onMouseEnter={() => handleMouseEnter("promise")}
                >
                  {" "}
                  Our promise{" "}
                </Link>
                {handleDisplay === "promise" && (
                  <PromiseDropdown
                    onMouseEnter={() => handleMouseEnter("promise")}
                    onMouseLeave={handleMouseOut}
                  />
                )}
              </li>
              <li>
                <Link
                  to="/about"
                  className="about-us"
                  onMouseOut={handleMouseOut}
                  onMouseEnter={() => handleMouseEnter("about")}
                >
                  {" "}
                  About us{" "}
                </Link>
                {handleDisplay === "about" && (
                  <AboutDropdown
                    onMouseEnter={() => handleMouseEnter("about")}
                    onMouseLeave={handleMouseOut}
                  />
                )}
              </li>
            </ul>
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search for puppy by name or by gender"
                onChange={(event) => setSearchData(event.target.value)}
              />
              <i className="fa fa-search search-icon" />
            </div>
          </div>
          <div className="right-nav">
            <a href="tel: (937) 770-4584">(937) 770-4584</a>
            <Link to="#" className="login-btn">
              {" "}
              Log In{" "}
            </Link>
          </div>
        </div>
      </nav>
      {searchData && filteredItems.length > 0 ? (
          <Search searchList={filteredItems} data={searchData} />
        ) : (
          searchData && <NoResult data={searchData} />
        )}
    </>
  );
}

export default NavBar