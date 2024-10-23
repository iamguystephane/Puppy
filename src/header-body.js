import React from "react";
import "./App.css";
import "./media.css";
import "./JS/all";
import HeaderCard from "./header-card";
import noMills from "./images/no-mills.png";
import trusted from "./images/trusted.png";
import delivery from "./images/delivery.png";
import healthyPups from "./images/healthy-pups.png";
import NoResult from "./search-no-result";
import Search from "./search";
import puppyCards from "./puppy-cards";
export default function Headerbody() {
  const getFilteredItems = (puppyCards, searchData) => {
    if (!searchData) {
      return puppyCards;
    }
    return puppyCards.filter((pup) => pup.name.toLowerCase().includes(searchData) || pup.name.includes(searchData));
  };
  const [searchData, setSearchData] = React.useState("");

  const filteredItems = getFilteredItems(puppyCards, searchData);
  return (
    <div className="header-body">
      <h2> Happy, Healthy Puppies, Direct To You</h2>
      <p className="header-body-firstParagraph">
        {" "}
        From our nationwide network of responsible breeders{" "}
      </p>
      <button type="button"> Browse all puppies </button>
      <div class="header-body-searchbar">
        <input
          type="text"
          placeholder="Search for puppy by name"
          onChange={(event) => setSearchData(event.target.value)}
        />
        <i className="fa fa-search header-body-searchIcon" />
      </div>
      { searchData && filteredItems.length > 0 ? <Search searchList={filteredItems} data = {searchData}/> : searchData && <NoResult data = {searchData}/>}
      <div className="header-puppy-info">
        <div className="left-info">
          <div className="top-info">
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
          </div>
          <div className="bottom-info">
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
        <div className="right-info">
          <i className="fa fa-question-circle question-mark" />
          <p> Let us help you find your new best friend</p>
          <div
            style={{
              display: "flex",
              marginTop: "10px",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <i class="fa-solid fa-envelope"></i>
            <span> (937) 770-4584 </span>
          </div>
        </div>
      </div>
    </div>
  );
}
