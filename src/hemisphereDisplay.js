import React from 'react';
import './hemisphere.css'
import northern from './images/N.png';
import southern from './images/S.png';


const HemisphereDisplay = (props) => {

  const hemisphereConfig = {
    Northern : {
      text : "Northern Hemispehere",
      picture : northern,
    },
    Southern : {
      text : "Southern Hemispehere",
      picture : southern,
    }
  }


  const hemisphere = props.latitude > 0 ? 'Northern' : 'Southern';
  const {text, picture} = hemisphereConfig[hemisphere];

  return(
    <div className={hemisphere}>
      <div className ='ui raised text container segment'>
        <div className = 'image'>
          <img src={picture}/>
        </div>
        <div className='ui teal bottom attached label'>
          <h1> You are in <b>{text}</b> </h1>
        </div>
      </div>
    </div>
  )
}

export default HemisphereDisplay;
