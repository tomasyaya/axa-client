import React from "react";
import { Provider } from "react-redux";

import Home from "./views/Home/Home";
import store from "./redux/store";

const App = () => (
  <Provider store={store}>
    <Home />
  </Provider>
);

export default App;
