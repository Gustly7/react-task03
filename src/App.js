import React, { Component } from 'react';
import logo from './logo.svg';
import Film from './Film/Film.js';
import ErrorBoundary from './ErrorBoundary';
import './App.css';
import SearchPanel from "./SearchPanel/SearchPanel";

const posters = require.context('./Posters', true, /\.jpg$/);
const keys = posters.keys()

const postersArray = keys.map(key => posters(key))

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<header className="App-header">*/}
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          {/*<h1 className="App-title">Welcome to React</h1>*/}
        {/*</header>*/}
        {/*<p className="App-intro">*/}
          {/*To get started, edit <code>src/App.js</code> and save to reload.*/}
        {/*</p>*/}
        <SearchPanel/>
          <ErrorBoundary><Film filmName="Kill Bill vol. 1" filmYear="2003" filmGenre="Action & Adventure"/></ErrorBoundary>
          <ErrorBoundary><Film filmName="ErrorFilm" filmYear="2003" filmGenre="Action & Adventure"/></ErrorBoundary>
      </div>
    );
  }
}

export default App;