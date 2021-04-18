import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PublicLayout from './navigation/PublicLayout';

function App() {
  // defaults.global.datasets.line.pointHitRadius = 10;
  return (
    <div>
      <Switch>
        <Route path="/" component={PublicLayout}/>
      </Switch>
    
    </div>
  );
}

export default App;
