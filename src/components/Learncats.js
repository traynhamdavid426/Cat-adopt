import React from "react";
import { useNavigate } from "react-router-dom";

const Learncats =() => {
    let navigate = useNavigate()
    return(<div>
    <h2>Adopting a cat can be challenging. The content below will make the process a little easier .</h2>
    <h3>Click  a category to start.</h3>

   <div>

   <button onClick={()=>{navigate('/catfacts')}}> Cat Facts</button>
   <button onClick={()=>{navigate('/catgenders')}}> Cat gender</button>
   <button onClick={()=>{navigate('/catagedisplay')}}> Cat age</button>
</div>

<h4> When ready, find a cat.</h4>

<button onClick={()=>{navigate('/maps')}}> Find cats</button>

</div>)}

export default Learncats;