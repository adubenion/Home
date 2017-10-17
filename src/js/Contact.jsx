import React from 'react';

export class Contact extends React.Component {
	render() {
		return(
			<div>
				<h1> Contact</h1>
				<p>
					Reach out! Contact me via email, LinkedIn or GetHub for more information!<br />
					<br />
					<br />
					Email: <a href="mailto:aaron.dubenion@gmail.com">aaron.dubenion@gmail.com</a><br />
					<br />
					LinkedIn: <a href="http://linkedin.com/in/aaron-dubenion-aa34b2bb/"><img src="" alt="LinkedIn" /></a><br />
					<br />
					GetHub: <a href="http://github.com/adubenion/"><img src="" alt="GitHub" /></a>
				</p>
			</div>
		);
	}
}
console.log('Contact component loaded');