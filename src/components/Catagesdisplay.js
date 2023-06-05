import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../SubComponents/Gender/Gender.css';

const Catsagedisplay = () => {
  let navigate = useNavigate();

  const Ages = [
    {
      image: 'kitten photo',
      stage: 'Kitten',
      age: '0-6 months',
      lnk: <button onClick={() => navigate('/kitten')}>Learn more</button>
    },
    {
      image: 'junior photo',
      stage: 'Junior',
      age: '7 months-2 years',
      lnk: <button onClick={() => navigate('/junior')}>Learn more</button>
    },
    {
      image: 'prime photo',
      stage: 'Prime',
      age: '3-6 years',
      lnk: <button onClick={() => navigate('/prime')}>Learn more</button>
    },
    {
      image: 'mature photo',
      stage: 'Mature',
      age: '7-10 years',
      lnk: <button onClick={() => navigate('/mature')}>Learn more</button>
    },
    {
      image: 'senior photo',
      stage: 'Senior',
      age: '11-14 years',
      lnk: <button onClick={() => navigate('/senior')}>Learn more</button>
    },
    {
      image: 'Geriatric photo',
      stage: 'Geriatric',
      age: '15 years +',
      lnk: <button onClick={() => navigate('/geriatric')}>Learn more</button>
    }
  ];

 

  return (
    <div className="display-container  tc" >
      {Ages.map((cat, i) => {
        return (
            
          <div className="">
          <div key ={i} className='cat-container '>
          <div className='cat-details'>
        <div className=' purple f2 stage'> {cat.stage}</div>
        <div className='age fw8  f3 purple'> {cat.age}</div>
        <div className=' purple f3'> {cat.image}</div>
        <div className='link f3'> {cat.lnk}</div>
        </div></div></div>
        );
      })}

      <div className="buttons-box">
        <button className='f4 mb5 mt3' onClick={() => navigate('/learncats')}>All categories</button>
        <button className='f4 ml3 ' onClick={() => navigate('/catfacts')}>Cat facts</button>
        <button className='f4  ml3' onClick={() => navigate('/catgenders')}>Cat genders</button>
      </div>
    </div>
  );
};

export default Catsagedisplay;
