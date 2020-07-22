import React from 'react';
import './App.css';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import {
  actionTypes,
  firebaseReducer,
  isLoaded,
  ReactReduxFirebaseProvider,
} from 'react-redux-firebase';
import * as firebase from 'firebase/app';
import { createFirestoreInstance, firestoreReducer } from 'redux-firestore';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import todosSlice from './features/todo/todoSlice';
import { Home } from './Home';
import SignOn from './features/SignOn/SignOn';
import { UserIsAuthenticated } from './features/PrivateRoute/isAuthenticated';

const firebaseui = require('firebaseui');

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};
firebase.initializeApp(firebaseConfig);
export const { auth } = firebase;
export const db = firebase.firestore();
export const ui = new firebaseui.auth.AuthUI(firebase.auth());

export const uiConfig = {
  signInFlow: 'redirect',
  signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
  credentialHelper: 'none',
  signInSuccessUrl: '/',
  callbacks: {
    signInSuccessWithAuthResult: () => {
      auth()
        .setPersistence(auth.Auth.Persistence.SESSION)
        .then(() => {
          console.log('Storing session token');
        });

      return true;
    },
  },
};

const store = configureStore({
  reducer: {
    todo: todosSlice,
    firebase: firebaseReducer,
    firestore: firestoreReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [actionTypes.LOGIN],
    },
  }),
});
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true, // Store in Firestore instead of Real Time DB,
  // presence: 'presence',
  // sessions: 'sessions',
  enableLogging: false,
};

function App() {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider
        firebase={firebase}
        config={rrfConfig}
        dispatch={store.dispatch}
        createFirestoreInstance={createFirestoreInstance}
      >
        <AuthIsLoaded>
          <Router>
            <Switch>
              <Route component={SignOn} exact path="/login" />
              <Route exact path="/" component={UserIsAuthenticated(Home)} />
              <Route render={() => <Redirect to={{ pathname: '/login' }} />} />
            </Switch>
          </Router>
        </AuthIsLoaded>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

function AuthIsLoaded({ children }) {
  const authData = useSelector((state) => state.firebase.auth);
  if (!isLoaded(authData)) return <div>Spinning up the hamster wheels...</div>;
  return children;
}

export default App;
