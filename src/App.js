import './App.css';
import NavBar from './components/NavBar/NavBar';
import GridCanchita from './components/GridCanchita';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Canchita from './components/Canchita';
import Login from './components/Login';

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
        <Route path='/' exact component={(props) => <GridCanchita />} />
        <Route
          path='/canchita/:id'
          component={(props) => <Canchita {...props} />}
        />
        <Route path='/login' component={(props) => <Login />} />

        <Route>404 Page </Route>
      </Switch>
    </Router>
  );
}

export default App;
