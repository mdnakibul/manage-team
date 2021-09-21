import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ManageGroup from "./components/ManageGroup/ManageGroup";
import ManageUser from "./components/ManageGroup/ManageGroup";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <ManageUser/>
        </Route>
        <Route path="/dash-board/admin/manage-user">
          <ManageUser/>
        </Route>
        <Route path="/dash-board/admin/manage-group">
          <ManageGroup/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
