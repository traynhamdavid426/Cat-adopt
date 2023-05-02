import React from "react";
import { useNavigate } from "react-router-dom";

const Male=() => {
    let navigate= useNavigate();
    return(<div>
    Temperament: males
    Special care:
    Pros:
    cons:

<div>
<button onClick={()=>{navigate('/learncats')}}>All catergories</button>
<button onClick={()=>{navigate('/female')}}>Females</button>
</div>

</div>)}

export default Male;