import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Carousel } from "react-bootstrap";
import "./search.css";

const Search = () => {
  const [word, setword] = useState(null);
  const [data, setData] = useState("Enter Keyword");
  function getData(val) {
    setword(val.target.value);
    // console.log(word);
  }
  function callAi() {
    console.log("news " + word);
    setData("fuck you");
    console.log();
  }
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <div className="containerSearch">
            <div>
              <input className="inputQuery" type="text" onChange={getData} />
              <button className="inputButton" type="submit" onClick={callAi}>
                <FiSearch />
              </button>
            </div>
            <div className="divh4">
              <h5>{data}</h5>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="containerSearch">
            <div>
              <input className="inputQuery" type="text" onChange={getData} />
              <button className="inputButton" type="submit" onClick={callAi}>
                <FiSearch />
              </button>
            </div>
            <div className="divh4">
              <h5>{data}</h5>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="containerSearch">
            <div>
              <input className="inputQuery" type="text" onChange={getData} />
              <button className="inputButton" type="submit" onClick={callAi}>
                <FiSearch />
              </button>
            </div>
            <div className="divh4">
              <h5>{data}</h5>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Search;
