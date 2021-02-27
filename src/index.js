import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from "./SeasonDisplay";

const App = () => (
  <React.Fragment>
    <div>Hi there!</div>
    <SeasonDisplay season='winter' />
  </React.Fragment>
);

ReactDOM.render(
  <App/>, document.getElementById('root')
);
