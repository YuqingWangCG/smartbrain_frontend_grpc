import React from 'react';
import Tilt from 'react-parallax-tilt';
import Brain from './brain.png';
import './Logo.css';

const Logo = () => {
	return(
		<div className='ma4 mt0'>
			<Tilt className='Tilt br3 shadow-2' style={{ height: '150px', width:'150px'}} >
               <div className='pa3'>
                 <img style={{paddingTop:'7px'}} alt='logo' src={Brain}/>
               </div>
            </Tilt>
		</div>
	);
}


export default Logo;