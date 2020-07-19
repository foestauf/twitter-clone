import React from 'react';
import { StyledFirebaseAuth } from 'react-firebaseui';
import { useSelector } from 'react-redux';
import { auth, uiConfig } from '../../App';

const SignOn = () => {
  const user = useSelector((state) => state.firebase.auth.uid);
  if (user) {
    return <div />;
  }
  return (
    <div>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth()} />
    </div>
  );
};

export default SignOn;
