import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const pageTitle = "Hacker News"
    return (
      <div className="App">
        <h2>{pageTitle}</h2>
      </div>
    );
  }
}

export default App;
