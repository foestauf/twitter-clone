import React from 'react';
import { StyledFirebaseAuth } from 'react-firebaseui';
import { useFirebase } from 'react-redux-firebase';
import { uiConfig } from '../../App';

const SignOn = () => {
  const firebase = useFirebase();
  return (
    <div>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
};

export default SignOn;
