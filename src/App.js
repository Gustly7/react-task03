import React, { Component } from 'react';
import FilmList from './FilmList/';
import ErrorBoundary from './ErrorBoundary';
import './App.css';
import SearchPanel from "./SearchPanel/SearchPanel";
import Footer from "./Footer";

const posters = require.context('./Posters', true, /\.jpg$/);
const keys = posters.keys()

const postersArray = keys.map(key => posters(key))

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchPanel/>
          <ErrorBoundary>
            <FilmList/>
          </ErrorBoundary>
        <Footer/>
      </div>
    );
  }
}

export default App;