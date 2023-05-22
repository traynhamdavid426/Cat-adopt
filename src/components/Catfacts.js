import React from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import '../Styles/Facts.css'



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
    <div className="tc purple">
      <div>
        <button className="f4" onClick={fetchCatFact}>Generate Cat Fact</button>
        <h1 className="f3 measure bg-red facts  ">{fact}</h1>
      </div>
      <div className="">
        <button className="f4 " onClick={() => { navigate('/learncats') }}> All categories </button>
        <button className="f4 ml2" onClick={()=>{navigate('/catagedisplay')}}> Cat ages</button>
        <button className="f4 ml2" onClick={()=>{navigate('/catgenders')}}>Cat genders</button>
      </div>
    </div>
  );
}

export default Catfacts;