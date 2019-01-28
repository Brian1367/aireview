import React from 'react'
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import AirlineShowContainer from '../containers/AirlineShowContainer'

export const App = (props) => {
  return (
    <div>
      <Router history={browserHistory}>
        <Route path='/airlines/:id' component={AirlineShowContainer} />
      </Router>
    </div>
  );
}

export default App;
