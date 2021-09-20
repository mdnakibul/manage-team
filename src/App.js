import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Dashboard/>
        </Route>
        <Route exact path="/dash-board/admin/manage-user">
          <Dashboard/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
