import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <main>
          <Switch>
            <Route path="/about">About</Route>
            <Route path="/users">Users</Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </Router>      
    </div>
  );
}

export default App;
