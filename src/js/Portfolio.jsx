import React from 'react';

var $

$ = require('jquery')



export class Portfolio extends React.Component {
	render() {
		$(document).ready(function() {
	console.log('jquery is working');
	$('#pet').hide();
	$('#puppy').hide();
	$('.clicked').mouseover(function() {
		$('.clicked').css('cursor', 'pointer')
	})
	$('#petclick').click(function() {
		$('#pet').toggle();
	});
	$('#puppyclick').click(function() {
		$('#puppy').toggle();
	});
});
		return(
			<div>
				<h1>Portfolio</h1>
				<p>
					Here's a look into past work that I've done!
				</p>

				<h2>Example Websites</h2>

				<h3 id="petclick" className="clicked">Pet Shop Site</h3>
				<div id="pet">
				<a href=""><img src="" alt="Pet Shop Site" /></a>
				</div>
				<br />
				<h3 id="puppyclick" className="clicked">Puppy-Lovers Site</h3>
				<div id="puppy">
				<a href=""><img src="" alt="Puppy Lovers Site" /></a>
				</div>
			</div>
		);
	}
}
console.log('Portfolio component loaded');