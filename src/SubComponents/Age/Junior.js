import React from "react";
import { useNavigate } from "react-router-dom";

const Junior =() => {
    let navigate = useNavigate()
    return(<div>
    Temperament: junior
    Diet:
    Special care:
    Pros:
    cons:

    <div>
<button onClick={()=>{navigate('/learncats')}}>All catergories</button>
<button onClick={()=>{navigate('/kitten')}}>back</button>
<button onClick={()=>{navigate('/prime')}}>Next</button>
</div>
</div>)}

export default Junior;