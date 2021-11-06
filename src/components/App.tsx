import React from "react";
// import './App.css';
import { Redirect, Route} from "react-router-dom";
import Rules from "./Rules/Rules";
import Home from "./Home/Home";
import { Button } from 'react-bulma-components';

function App() {
  return (
    <div>
      
    <switch>
      <Route path="/home"><Home/></Route>
      <Route path="/rules">
        <Rules />
      </Route>
      <Redirect from="*" to="/home"></Redirect>
    </switch>
    </div>
  );
}

export default App;
