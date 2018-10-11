import React, { Component } from 'react';
import './scss/App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup} from 'react-transition-group';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Header from './components/Header';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <Router>
      <Route render={({ location }) => (
          <div>

          <Header />
          <TransitionGroup>
            <CSSTransition
            key={location.key}
            timeout={1000}
            classNames="fade">
              <Switch location={location}>
                <Route path="/" component={Home} exact />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route component={Error} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        
          <Footer />
        </div>
      )}/>
      
      </Router> 
    );
  }
}

export default App;
