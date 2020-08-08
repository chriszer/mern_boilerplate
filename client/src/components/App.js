import React from 'react';
import {Route, Switch} from 'react-router-dom'
import About from './about'

// import logo from './logo.svg';
// import '../App.css';

function App() {
  return (
    <div>
     <Switch>
       {/* <Route path="/" component={Home} /> */}
       <Route path="/about" component={About} />
     </Switch>
    </div>
  );
}

export default App;
