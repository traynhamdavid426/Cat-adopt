import React from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import '../Styles/Facts.css'

const Catfacts = () => {
  let navigate = useNavigate();
  const [fact, setFact] = useState("");

  const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setFact(res.data.fact);
    });
  };

  useEffect(() => {
    fetchCatFact();
  }, []);

  return (
    <div className="container">
      <div className="header">
        <button className="generate-button" onClick={fetchCatFact}>
          Generate Cat Fact
        </button>
        <h1 className="fact-text">{fact}</h1>
      </div>
      <div className="button-container">
        <button className="category-button" onClick={() => navigate("/learncats")}>
          All Categories
        </button>
        <button className="category-button" onClick={() => navigate("/catagedisplay")}>
          Cat Ages
        </button>
        <button className="category-button" onClick={() => navigate("/catgenders")}>
          Cat Genders
        </button>
      </div>
    </div>
  );
};

export default Catfacts;
