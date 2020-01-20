import { h } from "preact";
import Helmet from "preact-helmet";
import { Route, Router, RouterOnChangeArgs } from "preact-router";

import Home from "../routes/home";
import Profile from "../routes/profile";
import Header from "./header";

if ((module as any).hot) {
  // tslint:disable-next-line:no-var-requires
  require("preact/debug");
}

const App: preact.FunctionalComponent = () => {
  let currentUrl: string;
  const handleRoute = (e: RouterOnChangeArgs) => {
    currentUrl = e.url;
  };

  return (
    <div id="app">
      <Helmet
        meta={[{
          name: "viewport",
          content: "minimum-scale=1, initial-scale=1, width=device-width"
        }, {
          name: "theme",
          content: "#665344"
        }]}
        titleTemplate="TAT - %s"
        defaultTitle="TAT - Accueil"
      />
      <Header/>
      <Router onChange={handleRoute}>
        <Route path="/" component={Home}/>
        <Route path="/profile/" component={Profile} user="me"/>
        <Route path="/profile/:user" component={Profile}/>
      </Router>
    </div>
  );
};

export default App;
