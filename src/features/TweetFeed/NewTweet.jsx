import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/pro-regular-svg-icons/faImage';
import Input from '@material-ui/core/Input';
import { useSelector } from 'react-redux';
import { db } from '../../App';

const NewTweet = () => {
  const { uid } = useSelector((state) => state.firebase.auth);
  const [prevState, setPrevState] = useState();
  const changeHandler = (event) => {
    event.persist();
    const { value } = event.target;
    setPrevState((prevState1) => ({
      ...prevState1,
      [event.target.name]: value,
    }));
  };

  const postTweet = () => {
    db.collection('tweets')
      .add({
        tweetOwner: uid,
        tweetText: prevState.tweetBody,
      })
      .then((docRef) => {
        console.log(`Document written with ID: ${docRef.id}`);
      })
      .catch((error) => console.log(`Error adding document: ${error}`));
  };
  return (
    <div>
      <Paper style={{ display: 'flex' }}>
        <Grid
          container
          spacing={2}
          style={{ display: 'flex', width: 'min-content', padding: '0.5em' }}
        >
          <Grid item xs={1}>
            <Avatar>OP</Avatar>
          </Grid>
        </Grid>
        <Grid item container direction="column" xs={10}>
          <Input
            label="New Tweet"
            placeholder="New Tweet"
            name="tweetBody"
            onChange={(e) => changeHandler(e)}
            style={{ width: '100%', marginTop: '1em' }}
          />
          <Grid item container>
            <Grid item xs={2}>
              <Button>
                <FontAwesomeIcon icon={faImage} size="2x" />
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Button>
                <FontAwesomeIcon icon={faImage} size="2x" />
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Button>
                <FontAwesomeIcon icon={faImage} size="2x" />
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Button>
                <FontAwesomeIcon icon={faImage} size="2x" />
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Button>
                <FontAwesomeIcon icon={faImage} size="2x" />
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Button variant="contained" color="primary" onClick={postTweet}>
                TWEET
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default NewTweet;
