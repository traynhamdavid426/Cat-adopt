import React from "react";
import { useNavigate } from "react-router-dom";

const Female =() => {
    let navigate=useNavigate();
    return(<div>
    Temperament: Females
    Special care:
    Pros:
    cons:

    <div>
<button onClick={()=>{navigate('/learncats')}}>All catergories</button>
<button onClick={()=>{navigate('/male')}}>Males</button>
</div>
</div>)}

export default Female;