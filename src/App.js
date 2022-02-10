import GridCanchita from "./components/GridCanchita";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Canchita from "./components/Canchita";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={(props) => <GridCanchita />} />
        <Route
          path="/canchita/:id"
          component={(props) => <Canchita {...props} />}
        />

        <Route>404 Page </Route>
      </Switch>
    </Router>
  );
}

export default App;
