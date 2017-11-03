import React from 'react';
import {Link} from 'react-router-dom';

export class Header extends React.Component {
    render() {
        return(
            <div>
                <header>
                    <h1>Aaron DuBenion</h1>
                    <nav>
                        <Link to="/">
                            <button>Home</button>
                        </Link>
                        <Link to="/Projects">
                            <button>Projects</button>
                        </Link>
                        <Link to="/Contact">
                            <button>Contact</button>
                        </Link>
                    </nav>
                </header>
            </div>
        );
    }
}
console.log('Header component loaded');