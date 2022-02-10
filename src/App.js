import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import GridCanchita from "./Components/GridCanchita";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Canchita from "./Components/Canchita";

function App() {
  // return (
  //   <div className='App'>
  //     <NavBar />
  //   </div>
  // );

  return (
    <Router>
      <NavBar />
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
