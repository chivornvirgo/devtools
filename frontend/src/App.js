import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Menu from './components/Menu';
import Json2Table from './components/app/json2table/Json2Table';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" component={Menu} exact>
            </Route>
            <Route path="/json2table" component={Json2Table}>
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;


