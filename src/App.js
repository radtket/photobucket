import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import PhotoContextProvider from "./context/PhotoContext";
import Header from "./components/Header";
import Item from "./components/Item";
import Search from "./components/Search";
import NotFound from "./components/NotFound";

const App = () => {
  console.log(process.env);
  return (
    <PhotoContextProvider>
      <HashRouter basename="/SnapScout">
        <div className="container">
          <Header />
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/mountain" />} />
            <Route
              path="/mountain"
              render={() => <Item searchTerm="mountain" />}
            />
            <Route path="/beach" render={() => <Item searchTerm="beach" />} />
            <Route path="/bird" render={() => <Item searchTerm="bird" />} />
            <Route path="/food" render={() => <Item searchTerm="food" />} />
            <Route
              path="/search/:searchInput"
              render={({ match }) => (
                <Search searchTerm={match.params.searchInput} />
              )}
            />
            <Route component={NotFound} />
          </Switch>
        </div>
      </HashRouter>
    </PhotoContextProvider>
  );
};

export default App;
