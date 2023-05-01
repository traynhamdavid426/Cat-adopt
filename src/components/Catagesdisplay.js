import React from 'react';
import Catages from './Catages';
import { useNavigate } from 'react-router-dom';


const Catsagedisplay =  () => {
    
   
   const Ages=[{image: 'kitten photo',
                stage:'Kitten',
                 age:'0-6 months',
                },
                {image: 'junior photo',
                stage:'Junior',
                 age:'7 months-2 years',
                },
                {image: 'prime photo',
                stage:'Prime',
                 age:'3-6 years',
                },
                {image: 'mature photo',
                stage:'Mature',
                 age:'7-10 years',
                },
                {image: 'senior photo',
                stage:'Senior',
                 age:'11-14 years',
                },
                {image: 'Geriatric photo',
                stage:'Geriatric',
                 age:'15 years +',
                },
            ]
   
   return ( <div> 
{ Ages.map((cat,i) => {
        return (<Catages key={i} i = {
            Ages[i]} 
            stage = {cat.stage}
             age= {cat.age}
             image = {cat.image}/> 
              );})}
              
              <button></button>
              <button></button>
              
               </div>);}

export default Catsagedisplay; 