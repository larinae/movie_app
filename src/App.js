import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./components/Detail";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (

    <HashRouter>
      <Header />
      <Route path="/" exact={true} component={Home} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
}

export default App;
