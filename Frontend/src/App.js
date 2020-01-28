import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home";
import Events from "./components/Events/Events";
import Activities from "./components/Activities/Activities";
import Places from "./components/Places/Places";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function App() {
  return (
    <Router>
      <ScrollToTop>
        <div>
          <NavBar />
          <Route
            render={({ location }) => (
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  timeout={450}
                  classNames="fade"
                >
                  <Switch location={location}>
                    <Route path="/" component={Home} exact />
                    <Route path="/places" component={Places} />
                    <Route path="/events" component={Events} />
                    <Route path="/activities" component={Activities} />

                    <Route component={Error} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )}
          />
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
