import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage'
import AboutPage from './pages/AboutPage';
import ArticlesListPage from './pages/ArticlesListPage';
import Articlespage from './pages/Articlespage';
import NavBar from './Components/NavBar';
import NotFoundPage from './pages/NotFound';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div id="bod">
          <div id="page-body">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/articles-list" component={ArticlesListPage} />
              <Route path="/article/:name" component={Articlespage} />
              <Route component={NotFoundPage} />
            </Switch>
        
          </div>
        
          <h6 style={{textAlign:"center"}}>designed and developed by  
          <a href="https://kevinjacob2001.github.io/"> Kevin Jacob</a>
          
          
          </h6>
          
          </div>
       
        </div>
      </Router>
    )
  }
}

export default App;