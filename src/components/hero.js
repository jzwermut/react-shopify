import React, { useState, useEffect } from 'react';

const Hero = () => {

	const heroImg = process.env.PUBLIC_URL + "/images/hero.jpg"

	const [player, setPlayer] = useState('Kane')
	const players = ['Son', 'Kane', 'Ndombele', 'Winks', "Lloris", 'Reguillon', 'Lucas', 'Bergwijn']

	const playerSelector = () => {
		let p = players[Math.floor(Math.random()*players.length)];
		setPlayer(p)
	}

	useEffect(() => {
    setInterval(playerSelector, 2000)
  	},[]);

	

	return (
		<div 
		className="flex w-full h-96 pl-10 pt-10 bg-home-lg" 
		style={{ backgroundImage: `url('${heroImg}')`, minHeight: '50vh', backgroundSize: 'cover' }}>

			<div className="text-white text-4xl">
				Get your shirt signed by...
				<span className="text-7xl">{player}</span>
			</div>
		</div>
	)
}

export default Hero;