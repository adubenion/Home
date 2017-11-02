import React from 'react';
import {PropTypes} from 'prop-types';



export class Portfolio extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			visible: false
		}
		this.clickToggle = this.clickToggle.bind(this);
	}

	clickToggle() {
		var visibility = this.state.visible;
		if (visibility) {

		}
	}

	render() {
		return(
			<div>
				<div className="row">
					<div className="col">
						<h1>Portfolio</h1>
						<p>
							Here's a look into what I'm working on!
						</p>

						<h2>Example Websites</h2>

						<h3 className="clicked">Pet Shop Site</h3>
						<div id="pet">
							<a target="_blank" rel="noopener noreferrer" href={this.props.hrefArray[0].petShop}>
								<img src="" alt="Pet Shop Site" />
							</a>
						</div>
						<br />
						<h3 id="puppyclick" className="clicked">Puppy-Lovers Site</h3>
						<div id="puppy">
							<a target="_blank" rel="noopener noreferrer" href={this.props.hrefArray[1].puppySite}>
								<img src="" alt="Puppy Lovers Site" />
							</a>
						</div>
						<br />
						<h3 id="puppyclick" className="clicked">Restaurant Site</h3>
						<div id="puppy">
							<a target="_blank" rel="noopener noreferrer" href={this.props.hrefArray[2].restaurantSite}>
								<img src="" alt="Puppy Lovers Site" />
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Portfolio.PropTypes = {
	hrefArray: PropTypes.array
}

Portfolio.defaultProps = {
	hrefArray: [
		{
			petShop: "https://adubenion.github.io/pet-shop-example-site/"
		},
		{
			puppySite: "https://adubenion.github.io/puppy-site/"
		},
		{
			restaurantSite: "https://adubenion.github.io/restaurant-site-example/"
		}
	]
}

console.log('Portfolio component loaded');