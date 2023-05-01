import React from 'react';


const Catgenderdisplay =  ({Names}) => {return ( <div> 


    { Names.map((user,i) => {return (<Card key={i} id = {Names[i].id} name = {Names[i].name} event= {Names[i].event} image = {Names[i].image}/>  );})} </div>);}

export default Cardlist; 