import { Link } from "react-router-dom";

const ReviewPart = (props) => {
  return (
    <>
        <div class="img-wrapper">
          <img src={props.image} width="95px" height="90px" />
          <h2>{props.heading}</h2>
        </div>
        <div className="check-and-line">
          <i className="check fa fa-check" />
          <p>{props.paragraph1}</p>
        </div>
        <div className="check-and-line">
          <i className="check fa fa-check" />
          <p>{props.paragraph2}</p>
        </div>
        <div className="check-and-line">
          <i className="check fa fa-check" />
          <p>{props.paragraph3}</p>
        </div>
        <Link to={`/${props.link}`}>
          <button> {props.button} </button>
        </Link>
    </>
  );
};

export default ReviewPart;
