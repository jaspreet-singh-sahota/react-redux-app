import React from 'react';
import './App.css';
import CakeContainer from './components/cakeContainer';
import { Provider } from 'react-redux';
import store from "./redux/store";
import HooksCakeContainer from './components/hooksCakeContainer';
import HooksIceCreamContainer from "./components/hooksIceCreamContainer";
import IceCreamContainer from './components/iceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeContainer/>
        <CakeContainer/>
        <IceCreamContainer/>
        <HooksIceCreamContainer/>
        <NewCakeContainer/>
      </div>
    </Provider>
  );
}

export default App;
