import React, { Component } from 'react'
import './App.css';
import Header from './components/Header';

export class App extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <Header/>

  <main role="main" class="inner cover">
    <p class="lead">
      <a href="#" class="btn btn-lg btn-secondary">Click to Continue</a>
    </p>
  </main>

  <footer class="mastfoot mt-auto">
    <div class="inner">
      <p>Data and Cloud Computing Society, 2020 ©</p>
    </div>
  </footer>
</div>
    )
  }
}

export default App
