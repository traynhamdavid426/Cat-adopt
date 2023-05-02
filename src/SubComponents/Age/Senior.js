import React from "react";
import { useNavigate } from "react-router-dom";

const Senior =() => {
    let navigate = useNavigate()
    return(<div>
    Temperament: senior
    Diet:
    Special care:
    Pros:
    cons:

    <div>
<button onClick={()=>{navigate('/learncats')}}>All catergories</button>
<button onClick={()=>{navigate('/senior')}}>back</button>
<button onClick={()=>{navigate('/geriatric')}}>Next</button>
</div>
</div>)}

export default Senior;