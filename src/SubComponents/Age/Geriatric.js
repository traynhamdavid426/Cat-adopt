import React from "react";
import { useNavigate } from "react-router-dom";

const Geriatric =() => {
    let navigate = useNavigate()
    return(<div>
    Temperament: geriatric
    Diet:
    Special care:
    Pros:
    cons:

    <div>
<button onClick={()=>{navigate('/learncats')}}>All catergories</button>
<button onClick={()=>{navigate('/senior')}}>back</button>
<button onClick={()=>{navigate('/kitten')}}>Next</button>
</div>
</div>)}

export default Geriatric;