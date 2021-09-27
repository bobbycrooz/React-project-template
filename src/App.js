import React from "react";
import { Route, Switch } from "react-router";

import Index from "./pages/page_templates";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
      <div className='App'>
          <Header/>
          <Switch>
              <Route path='/' exact component={Index} />
          </Switch>
          <Footer/>
      </div>
  );
}

export default App;
