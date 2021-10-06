/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
// import {PersistGate} from 'redux-persist/lib/integration/react';
// import {Provider} from 'react-redux';
// import reduxConfig from './src/redux/store';
import App from './App';
import {name as appName} from './app.json';

// const redux = reduxConfig();

const Main = () => {
  return (
    // <Provider store={redux.store}>
    //   <PersistGate persistor={redux.persistor}>
    //     <App />
    //   </PersistGate>
    // </Provider>
    <App />
  );
};

AppRegistry.registerComponent(appName, () => Main);
