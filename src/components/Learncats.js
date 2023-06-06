import React from "react";
import { useNavigate } from "react-router-dom";
import '../Styles/Learn.css';

const Learncats = () => {
  let navigate = useNavigate();
  return (
    <div className="containers">
      <h2 className="tc f2 navy pt4">
        Adopting a cat can be challenging. The content below will make the process a little easier.
      </h2>
      <h3 className="navy f3 ml4 mt5">Click a category to start.</h3>

      <div className="ml2 f3 mt4 button-containers">
        <button onClick={() => { navigate('/catfacts') }}>Cat Facts</button>
        <button className="ml2" onClick={() => { navigate('/catgenders') }}>Cat Gender</button>
        <button className="ml2" onClick={() => { navigate('/catagedisplay') }}>Cat Age</button>
      </div>

      <h3 className="ml4 navy f3 mt5">When ready, find a cat.</h3>

      <button className="buttoncen f3" onClick={() => { navigate('/maps') }}>Find Cats</button>
    </div>
  );
}

export default Learncats;
