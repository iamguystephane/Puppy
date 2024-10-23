import "./App.css";
import React from "react";
import { Link } from "react-router-dom";
import popular from "./popularArray";
import responsive from "./popular-rn-responsive";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function PopularRn() {
  return (
    <div className="popular-right-now">
      <h2 style={{ marginBottom: "1em", textAlign: "center" }}>
        {" "}
        Popular right now{" "}
      </h2>
      <Carousel
        responsive={responsive}
        showDots={false}
        arrows={true}
        swipeable={true}
        className="carousel"
      >
        {popular.map((item) => (
          <div key={item.index}>
            <Link to="#">
              <img src={item.image} width="300px" height="200px" alt="" />
              <h3 style={{ textAlign: "center", fontSize: "15px" }}>
                {" "}
                {item.heading}{" "}
              </h3>
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
