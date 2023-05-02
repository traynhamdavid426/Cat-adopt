import React from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";



const Catfacts = () => {
  let navigate= useNavigate()
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
    <div>
      <div>
        <button onClick={fetchCatFact}>Generate Cat Fact</button>
        <p>{fact}</p>
      </div>
      <div>
        <button onClick={() => { navigate('/learncats') }}> All categories </button>
        <button onClick={()=>{navigate('/catagedisplay')}}> Cat ages</button>
        <button onClick={()=>{navigate('/catgenders')}}>Cat genders</button>
      </div>
    </div>
  );
}

export default Catfacts;