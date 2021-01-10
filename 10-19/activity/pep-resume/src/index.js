// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
// import { BrowserRouter } from 'react-router-dom';
// import {Provider} from 'react-redux';
// import {createStore,applyMiddleware} from 'redux'
// import rootReducer from './reducers/rootReducer';
// import thunk from 'redux-thunk';

// const store = createStore(rootReducer,applyMiddleware(thunk))
import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
//import './static/scss/site.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; 
import { Provider } from 'react-redux';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';

var firebaseConfig = { 
 apiKey: "AIzaSyB516nH6MT85qHqzhZjtIDNXfR5D-cK2Bo",
    authDomain: "pep-resume2.firebaseapp.com",
    projectId: "pep-resume2",
    storageBucket: "pep-resume2.appspot.com",
    messagingSenderId: "388798234360",
    appId: "1:388798234360:web:bba457ab0e7c7fddb7c50d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})), 
    reduxFirestore(firebase) // redux bindings for firestore,
    
  )
);
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <ReactReduxFirebaseProvider
      firebase={firebase}
      config={firebaseConfig}
      dispatch={store.dispatch}
      createFirestoreInstance={createFirestoreInstance}>
      <App />
    </ReactReduxFirebaseProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
