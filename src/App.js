import React from 'react';
import logo from './logo.svg';
import './App.css';

import { useFirestoreDocData, useFirestore, SuspenseWithPerf} from 'reactfire';


function Burrito() {
  // lazy load the Firestore SDK and create a document reference
  const burritoRef = useFirestore()
      .collection('tryreactfire')
      .doc('burrito');

  // subscribe to the doc. just one line!
  const burrito = useFirestoreDocData(burritoRef);

  // get the value from the doc
  const isYummy = burrito.yummy;

  return <p>The burrito is {isYummy ? 'good' : 'bad'}</p>;
}

function App() {
  return (
      <div className="App">
        {/*
        SuspenseWithPerf behaves the same as Suspense,
        but also automatically measures load times with the User Timing API
        and reports it to Firebase Performance Monitoring
      */}
        <SuspenseWithPerf
            fallback={'loading burrito status...'}
            traceId={'load-burrito-status'}
        >
          <Burrito />
        </SuspenseWithPerf>
      </div>  );
}

export default App;
