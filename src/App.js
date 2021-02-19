import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./components/firebase";
import { useContextValue } from "./components/StateProvider";
import Payment from "./components/Payment";

function App() {
  const [{}, setContext] = useContextValue();
  console.log("Render!!!!");
  useEffect(() => {
    console.log("app reloaded");
    auth.onAuthStateChanged((authUser) => {
      // set the event which triggered when cookie changes
      console.log("User is: ", authUser);
      if (authUser) {
        //user logged in
        setContext({ type: "SET_USER", user: authUser });
      } else {
        // the user is logged out
        setContext({ type: "SET_USER", user: null });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Payment />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
