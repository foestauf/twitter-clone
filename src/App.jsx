import React from 'react';
import './App.css';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import { Provider } from 'react-redux';
import { firebaseReducer, ReactReduxFirebaseProvider } from 'react-redux-firebase';
import * as firebase from 'firebase/app';
import { createFirestoreInstance, firestoreReducer } from 'redux-firestore';
import { configureStore } from '@reduxjs/toolkit';
import todosSlice from './features/todo/todoSlice';
import { Home } from './Home';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};
firebase.initializeApp(firebaseConfig);
export const { auth } = firebase;
export const db = firebase.database;

const store = configureStore({
  reducer: {
    todo: todosSlice,
    firebase: firebaseReducer,
    firestore: firestoreReducer,
  },
});
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true, // Store in Firestore instead of Real Time DB
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
        <Home />
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

export default App;
