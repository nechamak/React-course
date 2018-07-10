import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DropDownCountries from './DropDownCountries/DropDownCountries';

class App extends Component {

  state = {
    arr: []
  };

  loadList = () => {

    fetch('https://restcountries.eu/rest/v2/all?fields=name;flag')
      .then(response => {
        return response.json();
      })
      .then(result => {
        this.setState(
          {
            arr: result
          }
        );
      });
  }

  constructor() {
    super();
    this.loadList();
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <DropDownCountries list={this.state.arr} />
      </div>
    );
  }
}

export default App;
