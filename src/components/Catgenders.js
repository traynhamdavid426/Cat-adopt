import React from 'react';
import { useNavigate } from 'react-router-dom';
 

 

 
 const Catgenders=() => {
    let navigate= useNavigate();
    return (
    
    
        
      

<div>
    
    
    <button onClick={()=>{navigate('/learncats')}}>All categories</button>
    <button onClick={()=>{navigate('/male')}}>Males</button>
    <button onClick={()=>{navigate('/female')}}>Females</button>
    <button onClick={()=>{navigate('/catfacts')}}>Cat facts</button>
    <button onClick={()=>{navigate('/catagedisplay')}}>Cat age</button>

</div>


 );
}
export default Catgenders;