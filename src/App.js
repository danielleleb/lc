import React, { Component } from 'react';
import './scss/App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup} from 'react-transition-group';

import Landing from './components/Landing';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';


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
            appear={true}
            timeout={2000}
            classNames="fade">
              <Switch location={location}>
                <Route path="/" component={Landing} exact />
                <Route path="/projects" component={Portfolio} />
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
