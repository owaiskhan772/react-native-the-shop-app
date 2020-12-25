import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import rootReducer from "./src/store/reducers";
import ShopNavigator from "./src/navigation/shop-navigator";

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
};

export default App;
