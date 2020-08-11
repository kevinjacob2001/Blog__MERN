import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import HomePage from './pages/homepage'
import AboutPage from './pages/AboutPage';
import ArticlesList from './pages/ArticlesList';
import ArticlesPage from './pages/Articlespage';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div id="page-body">
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/articles-list" component={ArticlesList} />
            <Route path="/article" component={ArticlesPage} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App;