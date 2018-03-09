import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import nebu from './Logo.png';

const Logo = () => {
	return (
		<div className= "ma4 mt0">
			<Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150, borderRadius: "75px" }} >
	 			<div className="Tilt-inner pa3" >
	 				<img alt='Logo' src={nebu} style={{paddingTop: "25%"}}/>
	 			</div>
			</Tilt>
		</div>
		);
}

export default Logo;