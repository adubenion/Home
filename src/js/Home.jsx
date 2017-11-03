import React from 'react';

export class Home extends React.Component {
	render() {
		return(
			<div>
				<h1>Home</h1>
                <p>
                	My name is Aaron, and I'm a web developer in Boston, MA
                </p>
                <div className="col-space"></div>
				<img id="home" src="./img/prod/aaron-dubenion1.png" alt="Aaron DuBenion Close-up" />
				<div className="col-space"></div>
				<p>
					As a web developer with a passion for music and nerdy persuits (i.e. Anime),
					I am recently discovering the uninhibited joy that comes along with programming. I've always loved
					the process of creating, whether it be with music, visual art, or with poetry. The only thing that
					seems to change with time is my medium of choice. 
				</p>
			</div>
		);
	}
}
console.log('Home component loaded')