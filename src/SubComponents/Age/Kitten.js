import React from "react";
import { useNavigate } from "react-router-dom";

const Kitten =() => {
   let navigate= useNavigate()
    return(<div>
    Temperament: kitten
    Diet:
    Special care:
    Pros:
    cons:

    <div>
<button onClick={()=>{navigate('/learncats')}}>All catergories</button>
<button onClick={()=>{navigate('/junior')}}>Next</button>
</div>
</div>)}

export default Kitten;
