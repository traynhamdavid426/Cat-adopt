import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Catgenders.css'

const Catgenders = () => {
  const navigate = useNavigate();

  return (
    <div className='containerer'>
      <div className='content'>
        <button onClick={() => { navigate('/male') }}>Males</button>
        <button className='ml3' onClick={() => { navigate('/female') }}>Females</button>
        <button className='ml3' onClick={() => { navigate('/learncats') }}>All categories</button>
      </div>
    </div>
  );
}

export default Catgenders;
