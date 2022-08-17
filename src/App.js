import React from "react";
import SwitchRoute from "./Components/MapRoutee/SwitchRoute";
import { persistStore } from "redux-persist";





import './App.css';
import { Provider } from "react-redux";
import store from "./Components/Store/Store"


const App = () => {



  let persistor = persistStore(store);

  document.getElementById('cart')
  return (
    <div className="App">
      <Provider store={store}>
        <persistGate loading={null} persistor={persistor}>


          <SwitchRoute />




        </persistGate>
      </Provider>
    </div>



  )

}


export default App;