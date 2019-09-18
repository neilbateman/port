import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from '@material-ui/core'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>I am Neil Bateman, a web developer based in Portland, Oregon.</h3>
        <h4>Check out my projects below</h4>
        <h3>▼</h3>
        <Button href="https://agile-harbor-83371.herokuapp.com/">tap_react </Button>
        <Button href="https://online-store-2a26f.firebaseapp.com/">RedditClone</Button>
        <Button href="https://settlers-ofcatan.firebaseapp.com/">Settlers</Button>
        <Button href="https://github.com/neilbateman">Github</Button>
        <Button href="https://www.linkedin.com/in/neilbateman/">Linkedin</Button>
      </header>
    </div>
  );
}

export default App;
