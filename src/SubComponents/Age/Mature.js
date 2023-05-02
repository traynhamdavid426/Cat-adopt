import React from "react";
import { useNavigate } from "react-router-dom";

const Mature =() => {
    let navigate= useNavigate()
    return(<div>
    Temperament: mature
    Diet:
    Special care:
    Pros:
    cons:

    <div>
<button onClick={()=>{navigate('/learncats')}}>All catergories</button>
<button onClick={()=>{navigate('/prime')}}>back</button>
<button onClick={()=>{navigate('/senior')}}>Next</button>
</div>
</div>)}

export default Mature;