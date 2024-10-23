import React from "react";
import "./App.css";
import "./JS/all";
import USstates from "./states";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AskAboutMe = ({ puppies, hideForm }) => {
  let redirect = useNavigate();
  const [formData, setFormData] = React.useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    state: "",
    description: "",
  });
  const [errors, setErrors] = React.useState({});
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    if (name === "phone") {
      const numericValue = value.replace(/\D/g, "").slice(0, 10);
      const formatted = formattedNumber(numericValue);
      setFormData({
        ...formData,
        [name]: formatted,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  const formattedNumber = (number) => {
    const match = number.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
    if (!match) {
      return number;
    }
    const [, areaCode, middle, last] = match;
    let formattedNumber = "";
    if (areaCode) formattedNumber += `(${areaCode})`;
    if (middle) formattedNumber += ` ${middle}`;
    if (last) formattedNumber += `-${last}`;

    return formattedNumber.trim();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    const validationErrors = {};
    if (!formData.firstname.trim()) {
      validationErrors.firstname = "First Name is required";
    }
    if (!formData.lastname.trim()) {
      validationErrors.lastname = "Last Name is required";
    }
    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Email is of invalid format";
    }
    if (!formData.phone.trim()) {
      validationErrors.phone = "Phone number is required!";
    } else if (formData.phone.length < 14) {
      validationErrors.phone = "Phone number is not valid";
    }
    if (!formData.description.trim()) {
      validationErrors.description = "Please ask your questions";
    }
    if (!formData.state.trim()) {
      validationErrors.state = "Choose your state";
    }
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      alert(
        "We've received your questions and we'll notify you via email, thanks."
      );
      axios
        .post(
          "http://localhost/puppy/insert.php",
          new URLSearchParams(formData),
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        )
        .then((result) => {
          if(result.data.Status == "Invalid") {
            alert("Error " + result.data.message);
          }
        })
        .catch((error) => {
          console.error("The was an error " + error);
        });
    }
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };
  return (
    <>
      <div className="ask-about-me-form">
        <form onSubmit={handleSubmit}>
          <div onClick={hideForm}>
            <i className="close fa fa-close" />
          </div>
          <div className="left-section">
            <img src={puppies.slides[0].src} width="250px" height="250px" />
            <h4 style={{ fontSize: "20px" }}>
              {" "}
              {puppies.name} is waiting for you{" "}
            </h4>
            <div>
              <p>
                {puppies.gender} | {puppies.age}
              </p>
            </div>
            <div className="rating">
              <strong> 4.6 </strong> &nbsp;
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star-half" />
            </div>
            <p> (5,172 reviews)</p>
          </div>
          <div className="right-section">
            <h1>
              {" "}
              Ask about{" "}
              <span style={{ color: "var(--orange)" }}>{puppies.name}</span>
            </h1>
            <div className="form-group names">
              <div className="style first-name">
                <label>First Name</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  onChange={handleOnChange}
                  name="firstname"
                  onKeyPress={handleKeyPress}
                />
                {errors.firstname && <span> {errors.firstname} </span>}
              </div>
              <div className="style first-name">
                <label>Last Name</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  onChange={handleOnChange}
                  name="lastname"
                  onKeyPress={handleKeyPress}
                />
                {errors.lastname && <span> {errors.lastname} </span>}
              </div>
            </div>
            <div className="style form-group email">
              <label> Email Address </label>
              <input
                type="email"
                className="form-control form-control-lg"
                onChange={handleOnChange}
                name="email"
                onKeyPress={handleKeyPress}
              />
              {errors.email && <span> {errors.email} </span>}
            </div>
            <div className="tel-and-state form-group">
              <div className="style tel">
                <label> Phone </label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  onChange={handleOnChange}
                  name="phone"
                  inputMode="numeric"
                  value={formData.phone}
                  onKeyPress={handleKeyPress}
                />
                {errors.phone && <span> {errors.phone} </span>}
              </div>
              <div className="style province">
                <label> State/Province</label>
                <select
                  className="form-control form-control-lg"
                  name="state"
                  value={formData.state}
                  onChange={handleOnChange}
                >
                  {USstates.map((state) => (
                    <option>{state}</option>
                  ))}
                </select>
                {errors.state && <span> {errors.state}</span>}
              </div>
            </div>
            <div className="description form-group">
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder={`What questions do you have about ${puppies.name}? `}
                onChange={handleOnChange}
                onClick={handleKeyPress}
                name="description"
              />
              {errors.description && <span> {errors.description} </span>}
            </div>
            <div className="form-group confirm">
              <div className="check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck1"
                  onChange={handleOnChange}
                />{" "}
                &nbsp;
                <label class="form-check-label" for="defaultCheck1">
                  It is OK to text me{" "}
                </label>
              </div>
              <p> All fields are required</p>
            </div>
            <div className="policy-and-btn">
              <p className="terms-and-policy">
                {" "}
                We value your privacy. View our <Link to="">
                  Terms of Use{" "}
                </Link>{" "}
                and <Link to="">privacy policy</Link>.
              </p>
              <button type="submit" class="btn btn-success">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AskAboutMe;
