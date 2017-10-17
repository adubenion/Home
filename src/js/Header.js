import React from 'react';
import {Link} from 'react-router-dom';

export class Header extends React.Component {
    render() {
        return(
            <div>
                <header>
                    <h1>Aaron DuBenion</h1>
                    <nav>
                        <Link to="/">Home</Link> | <Link to="/About">About</Link> | <Link to="/Portfolio">Portfolio</Link> | <Link to="/Contact">Contact</Link>
                    </nav>
                </header>
            </div>
        );
    }
}
console.log('Header component loaded');