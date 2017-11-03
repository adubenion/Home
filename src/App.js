import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import {Header} from './js/Header';
import {Home} from './js/Home.jsx';
import {Projects} from './js/Projects.jsx';
import {Contact} from './js/Contact.jsx';
import {Footer} from './js/Footer';


class App extends React.Component {
    render() {  
        return(
            <div>
                <Router>
                    <div>
                        <Header />
                            <div id="wrapper">
                                <Route exact path="/" component={Home} />
                                <Route path="/Projects" component={Projects} />
                                <Route path="/Contact" component={Contact} />
                            </div>
                        <Footer />
                    </div>
                </Router>
            </div>
        );
    }
}
console.log('App component loaded');

export default App;