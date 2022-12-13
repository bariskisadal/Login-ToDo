import "./App.css";
import Login from "./pages/Login";
import { BrowserRouter, Route } from "react-router-dom";
import ToDo from "./pages/ToDo";
import React, { Component }  from 'react';

function App() {
  return (
    <div>
  
  <BrowserRouter>
        <Route exact path="/login" component={Login} />
		<Route exact path="/" component={ToDo} />
      </BrowserRouter>
    </div>
  );
}

export default App;