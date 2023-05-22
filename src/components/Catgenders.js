import React from 'react';
import { useNavigate } from 'react-router-dom';
 

 

 
 const Catgenders=() => {
    let navigate= useNavigate();
    return (
    
    
        
      

<div className='tc f4'>
    
    <button onClick={()=>{navigate('/male')}}>Males</button>
    <button className='ml2' onClick={()=>{navigate('/female')}}>Females</button>
    <button className='ml2' onClick={()=>{navigate('/learncats')}}>All categories</button>
    

</div>


 );
}
export default Catgenders;