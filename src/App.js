import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/gallery">
          <Gallery />
        </Route>
        <Route path="/">
          <Gallery />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
