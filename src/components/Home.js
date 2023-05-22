
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home =() =>{
  let navigate=useNavigate()
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

  return( <div className='tc  purple'><h1 className='f2'>{greeting}, lets adopt a cat!</h1>

  <h4 className='f3'>Click below and figure out what traits you want in a cat.</h4>
  
  <button className='f4' onClick={()=>{navigate('/learncats')}}>Begin exploring</button></div>)
  
}

export default Home;
