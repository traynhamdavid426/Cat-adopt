import React from 'react';
import Catages from './Catages';
import { useNavigate } from 'react-router-dom';


const Catsagedisplay =  () => {
    let navigate= useNavigate();
   
   const Ages=[{image: 'kitten photo',
                stage:'Kitten',
                 age:'0-6 months',
                 lnk:  <button onClick={()=>{navigate('/kitten')}}>Learn more</button>
                },
                {image: 'junior photo',
                stage:'Junior',
                 age:'7 months-2 years',
                 lnk:  <button onClick={()=>{navigate('/junior')}}>Learn more</button>
                },
                {image: 'prime photo',
                stage:'Prime',
                 age:'3-6 years',
                 lnk:  <button onClick={()=>{navigate('/prime')}}>Learn more</button>
                },
                {image: 'mature photo',
                stage:'Mature',
                 age:'7-10 years',
                 lnk:  <button onClick={()=>{navigate('/mature')}}>Learn more</button>
                },
                {image: 'senior photo',
                stage:'Senior',
                 age:'11-14 years',
                 lnk:  <button onClick={()=>{navigate('/senior')}}>Learn more</button>
                },
                {image: 'Geriatric photo',
                stage:'Geriatric',
                 age:'15 years +',
                 lnk:  <button onClick={()=>{navigate('/geriatric')}}>Learn more</button>
                },
            ]
   
   return ( <div> 
{ Ages.map((cat,i) => {
        return (<Catages key={i} i = {
            Ages[i]} 
            stage = {cat.stage}
             age= {cat.age}
             image = {cat.image}
            lnk = {cat.lnk}
             /> 
              );})}
              
              <div>
    
    
    <button onClick={()=>{navigate('/learncats')}}>All categories</button>
    <button onClick={()=>{navigate('/catfacts')}}>Cat facts</button>
    <button onClick={()=>{navigate('/catgenders')}}>Cat genders</button>
    

</div>
              
               </div>);}

export default Catsagedisplay; 