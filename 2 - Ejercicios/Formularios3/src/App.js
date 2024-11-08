process.env.NODE_OPTIONS = '--openssl-legacy-provider';

import React, { Component } from 'react'
import './App.css';
import FormApp from './forms/FormApp'

class App extends Component {

  render() {

    return (
      <FormApp/>
    )
  }
}

export default App;
