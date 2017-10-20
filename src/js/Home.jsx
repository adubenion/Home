import React from 'react';

export class Home extends React.Component {
	render() {
		return(
			<div>
				<h1>Home</h1>
                <p>My name is Aaron, and I'm a web developer in Boston, MA</p>
				<img src="./img/aaron-dubenion1.png" alt="Aaron DuBenion Close-up" />
			</div>
		);
	}
}
console.log('Home component loaded')