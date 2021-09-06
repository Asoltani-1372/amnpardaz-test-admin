import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cloudsec from "./pages/cloudsec/Cloudsec";
import Pagecharts from "./pages/pageCharts/Pagecharts";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/cloud-sec">
            <Cloudsec />
          </Route>
          <Route path="/iran-cloud-server">
            <Pagecharts />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
