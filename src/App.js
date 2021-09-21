import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ManageGroup from "./components/ManageGroup/ManageGroup";
import ManageRole from "./components/ManageRole/ManageRole";
import ManageUser from "./components/ManageUser/ManageUser";

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
        <Route path="/dash-board/admin/manage-role">
          <ManageRole/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
