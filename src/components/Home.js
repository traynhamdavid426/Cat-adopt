
import React, { useState, useEffect } from 'react';

const Home =() =>{
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const date = new Date();
    const hours = date.getHours();
    let newGreeting = '';

    if (hours >= 0 && hours < 12) {
      newGreeting = 'Good morning';
    } else if (hours >= 12 && hours < 18) {
      newGreeting = 'Good afternoon';
    } else {
      newGreeting = 'Good evening';
    }

    setGreeting(newGreeting);
  }, []);

  return( <div><h1>{greeting}, lets explore cats!</h1>

  <h4>Lets start by learning more about our furry friends.</h4>
  
  <button>Cat facts</button></div>)
  
}

export default Home;
