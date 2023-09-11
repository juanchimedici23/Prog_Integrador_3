import React from "react";
import Header from './components/Header/Header'
import Footer from "./components/Footer/Footer";
import Home from "./screens/Home/Home";
import { Link, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
    <Header/>
    <Switch>

      <Route path="" exact={true} component={}/>
      <Route path="" exact={true} component={}/>
      <Route path="" exact={true} component={}/>
      <Route path="" exact={true} component={}/>
      <Route path="" exact={true} component={}/>
      <Route path="" exact={true} component={}/>

    </Switch>
    <Footer/>
    </React.Fragment>
    );
}

export default App;
