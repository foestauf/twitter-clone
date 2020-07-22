import React from 'react';
import { StyledFirebaseAuth } from 'react-firebaseui';
import { auth, uiConfig } from '../../App';

const SignOn = () => {
  return (
    <div>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth()} />
    </div>
  );
};

export default SignOn;
