import react from "react";
import { Link } from "react-router-dom";
import "./JS/all";
const Search = ({ searchList, data }) => {
  return (
    <div className="search-items">
      {searchList.length === 1 ? (<h4 > {searchList.length} result found for {`"${data}"`}</h4>) : (<h4> {searchList.length} results found for {`"${data}"`}</h4>)}
      <ul>
        {searchList.map((item, index) => (
          <Link to={`/puppies-for-sale/${item.id}`}>
            <li key={index}>
              <img src={item.image} width="200px" height="200px" />
              <p>{item.name}</p>
              <p>
                {" "}
                {item.age}, {item.gender}{" "}
              </p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Search;
