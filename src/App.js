import Store from './components/Store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Product from './components/Product';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={(props) => <Store />} />
        <Route
          path="/product/:id"
          component={(props) => <Product {...props} />}
        />
        <Route>404 Page </Route>
      </Switch>
    </Router>
  );
  // <div className="App"></div>;
}

export default App;
