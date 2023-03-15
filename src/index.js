import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
// import { applyMiddleware, createStore } from 'redux';
// import counter from './Redux/Reducers/counterReducer';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';

// import logger from 'redux-logger';

// const store = createStore(counter,applyMiddleware(logger));
import store from './ReduxToolkit/store'
import { PersistGate } from 'redux-persist/integration/react';
const persistor = persistStore(store)
store.subscribe(()=>console.log(store.getState()))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
   <Provider store={store} >
   <PersistGate persistor={persistor} >
   <App />
   </PersistGate>
   </Provider>
  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
