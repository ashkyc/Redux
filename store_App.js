import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./containers/Home";
import MyProfile from "./containers/MyProfile";
import { createStore } from "redux";
import allReducers from "./reducers";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import Yelp from "./containers/Yelp";
import { withRouter } from "react-router-dom";

function App(props) {
  const store = createStore(allReducers);

  return (
    <div className="App">
      
      <Provider store={store}>
        <div style={{ zIndex: "1" }}>
          <Route
            exact={true}
            path="/"
            render={() => <Home history={props.history} />}
          />
          <Route
            path="/myProfile"
            render={() => <MyProfile history={props.history} />}
          />
          <Route
            path="/findPlayground"
            render={() => <Yelp history={props.history} />}
          />
        </div>
      </Provider>
    </div>
  );
}

export default withRouter(App);
