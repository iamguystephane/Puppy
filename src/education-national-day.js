import React from "react";
import "./App.css";
import Topfooter from "./top-footer";
import Footer from "./footer";
import NavBar from "./nav";
import PuppySearch from "./puppysearch";
import PopularRn from "./popular";
import puppyescape from "./images/education-national-day.jpg";

export default function EducationNationalDay() {
  return (
    <div>
      <Topfooter />
      <NavBar />
      <div className="road-travel-article">
        <img src={puppyescape} width="800px" height="400px" alt="" />
        <h2>
          {" "}
          National Puppy Day Is About The Betterment Of Puppies. So are we.
          Learn About The Benefits Of Responsible Breeding{" "}
        </h2>
        <p style={{ marginTop: "15px" }}> By Caleb Larson - March 10 2018 </p>
        <p className="description">
          {" "}
          Caleb has been in the puppy industry for over 13 years. He is
          currently operating as the Director of Breeder Development and
          Operations for Sarah Puppy. He has an enormous wealth of knowledge
          afforded to him both through first-hand experience and through working
          with the best breeder's in the industry for over a decade.
        </p>
      </div>
      <div style={styles.container}>
        <p style={styles.paragraph}>
          {" "}
          Responsible puppy breeding is an ethical practice that involves
          carefully selecting dogs to produce healthy, well-tempered puppies
          that are suitable for a range of purposes, from companionship to work.
          While there are many benefits to responsible breeding, here are some
          of the most important ones:
        </p>
        <ol style={styles.orderedList}>
          <li style={styles.listItem}>
            <strong style={styles.heading}>Helps stop puppy mills: </strong>
            Puppy mills are breeding operations that prioritize profit over the
            health and welfare of the dogs. They often keep dogs in crowded and
            unsanitary conditions and provide little to no veterinary care or
            socialization. Responsible dog breeding, on the other hand, is done
            by breeders who prioritize the health and well-being of their dogs.
            These breeders provide ample space and socialization, and offer
            proper veterinary care to ensure the health of their dogs and
            puppies. At PuppySpot, we lead the industry with our science-based
            standards that were created by our Scientific Advisory Board
            comprised of experts in the field of animal health and welfare. By
            supporting responsible dog breeding practices and choosing to
            purchase a puppy from a responsible breeder, consumers can help
            reduce the demand for puppies produced by puppy mills. This, in
            turn, helps decrease the profitability of puppy mills, making it
            less lucrative for operators to continue their unethical and
            inhumane practices. In addition, by setting an example of
            responsible breeding and sharing their knowledge and experience with
            others, good breeders help educate the public about the risks and
            dangers of supporting puppy mills and encourage consumers to make
            informed and responsible choices when purchasing a puppy.
          </li>
          <li style={styles.listItem}>
            <strong style={styles.heading}>Makes puppies healthier: </strong>
            Puppy One of the most significant benefits of good puppy breeding is
            the health of puppies. Good breeders take care to screen their
            parents for genetic health issues and only breed dogs that are free
            of known health problems. This helps reduce the risk of passing on
            genetic disorders to the offspring, resulting in puppies that are
            less likely to develop health problems later in life.
          </li>
          <li style={styles.listItem}>
            <strong style={styles.heading}>
              Gives puppies better temperament:{" "}
            </strong>
            Responsible breeders also focus on breeding dogs with good
            temperaments, which can make a big difference in how a puppy
            develops and behaves. By selecting dogs that are friendly, outgoing,
            and well-behaved, breeders can increase the likelihood that their
            puppies will be easy to train, well-socialized, and well-adjusted in
            a variety of situations.
          </li>
          <li style={styles.listItem}>
            <strong style={styles.heading}>
              Supports responsible pet ownership:{" "}
            </strong>
            Responsible breeders also play an important role in promoting
            responsible pet ownership. They provide guidance and support to
            puppy buyers, including information on proper care and training, as
            well as ongoing support throughout the life of the dog. By helping
            to educate new owners and encouraging responsible behavior, breeders
            can help to reduce the number of dogs that end up in shelters or
            rescues due to owner neglect or abandonment. This is a major focus
            of ours at Sarah Puppy.
          </li>
          <li style={styles.listItem}>
            <strong style={styles.heading}>Improves the dog community: </strong>
            Finally, good breeders make a valuable contribution to the dog
            community as a whole. By sharing their knowledge, experience, and
            expertise, they help advance the understanding of dog breeding and
            genetics and contribute to the overall health and well-being of dogs
            and their owners.
          </li>
        </ol>
        <p style={styles.paragraph}>
          Good puppy breeding has numerous benefits, from producing healthier
          and better-behaved puppies to supporting responsible pet ownership and
          contributing to the dog community. If you are considering getting a
          puppy, it's important to seek out a reputable breeder who is committed
          to these goals and can provide you with a healthy, well-socialized
          puppy that will be a loving and loyal companion for many years to
          come. Fortunately, at we at PuppySpot have already done all of that
          for you as we have very strict standards for our breeders and the most
          through breeding vetting in the industry.
        </p>
      </div>
      <div className="popular-and-search p-and-s">
        <PopularRn />
        <PuppySearch />
      </div>
      <Footer />
    </div>
  );
}

const styles = {
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontWeight: "600",
  },
  orderedList: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  listItem: {
    width: "60%",
    marginTop: "1em",
  },
  paragraph: {
    width: "60%",
    marginTop: "1em",
  },
};
