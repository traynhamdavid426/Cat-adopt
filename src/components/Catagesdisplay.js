import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../SubComponents/Gender/Gender.css';
import geriatric from '../Styles/geriatric.jpg'
import junior2 from '../Styles/junior2.jpg'
import kitten2 from '../Styles/kitten2.jpg'
import mature from '../Styles/mature.jpg'
import prime2 from '../Styles/prime2.jpg'
import senior from '../Styles/senior.jpg'


const Catsagedisplay = () => {
  let navigate = useNavigate();

  const Ages = [
    {
      image:  <img className='tc ' src={kitten2} alt="kitten" style={{ width: '200px', height: '200px' }} />,
      stage: 'Kitten',
      age: '0-6 months',
      lnk: <button onClick={() => navigate('/kitten')}>Learn more</button>
    },
    {
      image:  <img className='tc ' src={junior2} alt="junior" style={{ width: '200px', height: '200px' }} />,
      stage: 'Junior',
      age: '7 months-2 years',
      lnk: <button onClick={() => navigate('/junior')}>Learn more</button>
    },
    {
      image:  <img className='tc ' src={prime2} alt="prime" style={{ width: '200px', height: '200px' }} />,
      stage: 'Prime',
      age: '3-6 years',
      lnk: <button onClick={() => navigate('/prime')}>Learn more</button>
    },
    {
      image:  <img className='tc ' src={mature} alt="mature" style={{ width: '200px', height: '200px' }} />,
      stage: 'Mature',
      age: '7-10 years',
      lnk: <button onClick={() => navigate('/mature')}>Learn more</button>
    },
    {
      image:  <img className='tc ' src={senior} alt="senior" style={{ width: '200px', height: '200px' }} />,
      stage: 'Senior',
      age: '11-14 years',
      lnk: <button onClick={() => navigate('/senior')}>Learn more</button>
    },
    {
      image:  <img className='tc ' src={geriatric} alt="geriatric" style={{ width: '200px', height: '200px' }} />,
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
        <div className=' white f2 stage'> {cat.stage}</div>
        <div className='age fw8  f3 white'> {cat.age}</div>
        <div className=' navy f3'> {cat.image}</div>
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
