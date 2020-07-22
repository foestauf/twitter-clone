import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { useSelector } from 'react-redux';
import { auth } from 'firebase';
import Button from '@material-ui/core/Button';
import createHistory from 'history/createBrowserHistory';
import UpdateProfilePage from './UpdateProfile';

const browserHistory = createHistory();

const Profile = () => {
  const { displayName } = useSelector((state) => state.firebase.auth);
  const [newState, setNewState] = useState();
  const changeHandler = (event) => {
    event.persist();
    const { value } = event.target;
    setNewState((newState1) => ({
      ...newState1,
      [event.target.name]: value,
    }));
  };

  const updateUser = () => {
    const user = auth().currentUser;
    user
      .updateProfile({
        ...newState,
      })
      .then(() => {
        console.log('Successfully updated profile');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signOUtUser = () => {
    auth()
      .signOut()
      .then(() => {
        browserHistory.replace('/login');
        console.log('Goodbye');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Grid container spacing={3} alignContent="center">
        <Grid container item direction="row" justify="center" spacing={2} xs={12}>
          <Grid item xs={2}>
            Display Name
          </Grid>
          <Grid item>
            <TextField
              size="small"
              name="displayName"
              onChange={(e) => changeHandler(e)}
              defaultValue={displayName}
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Grid
          container
          item
          alignContent="center"
          justify="center"
          direction="row"
          spacing={2}
          xs={12}
        >
          <Button variant="outlined" color="primary" onClick={updateUser}>
            Save
          </Button>
          <Button color="secondary" variant="outlined" onClick={signOUtUser}>
            Sign Out
          </Button>
        </Grid>
      </Grid>
      <UpdateProfilePage />
    </div>
  );
};

export default Profile;
