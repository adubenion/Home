import React from 'react';

export class Portfolio extends React.Component {
	render() {
		return(
			<div>
				<h1>Portfolio</h1>
				<p>
					Here's a look into past work that I've done!
				</p>

				<h2>Example Websites</h2>

				<h3>Pet Shop Site</h3>
				<a href=""><img src="" alt="Pet Shop Site" /></a>

				<h3>Puppy-Lovers Site</h3>
				<a href=""><img src="" alt="Puppy Lovers Site" /></a>
			</div>
		);
	}
}
console.log('Portfolio component loaded');