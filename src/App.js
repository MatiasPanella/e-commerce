import React, {Suspense, lazy} from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavBar />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            
          </Switch>
        </Suspense>
      </Router>
    </React.Fragment>
  );
}

export default App;
