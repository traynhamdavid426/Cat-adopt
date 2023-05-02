import React from "react";
import { useNavigate } from "react-router-dom";

const Prime =() => {
    let navigate= useNavigate()
    return(<div>
    Temperament: prime
    Diet:
    Special care:
    Pros:
    cons:

    <div>
<button onClick={()=>{navigate('/learncats')}}>All catergories</button>
<button onClick={()=>{navigate('/junior')}}>back</button>
<button onClick={()=>{navigate('/mature')}}>Next</button>
</div>
</div>)}

export default Prime;