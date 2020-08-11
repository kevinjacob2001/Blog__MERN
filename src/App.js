import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import HomePage from './pages/homepage'
import AboutPage from './pages/AboutPage';
import ArticlesList from './pages/ArticlesList';
import ArticlesPage from './pages/Articlespage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/articles-list" component={ArticlesList} />
          <Route path="/articels" component={ArticlesPage} />
        </div>
      </Router>
    )
  }
}

export default App;