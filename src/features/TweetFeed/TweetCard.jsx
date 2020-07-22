import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { db } from '../../App';

const TweetCard = (props) => {
  const { body, tweetOwner } = props;
  const [tweetInfo, setTweetInfo] = useState();

  useEffect(() => {
    tweetOwnerResolve(tweetOwner);
  });

  const tweetOwnerResolve = (uid) => {
    const docRef = db.collection('users').doc(uid);
    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          const fullName = doc.data().full_name.toString();
          console.log(`Document Data ${doc.data().full_name}`);
          setTweetInfo(fullName);
        } else {
          console.log('No document found');
        }
      })
      .catch((error) => console.log(`Error getting document: ${error}`));
  };
  return (
    <Paper style={{ display: 'flex' }}>
      <Grid
        container
        spacing={2}
        direction="column"
        style={{ width: 'min-content', padding: '0.5em' }}
      >
        <Grid item xs={1}>
          <Avatar>OP</Avatar>
        </Grid>
      </Grid>
      <Grid item container direction="column" xs={10} spacing={1}>
        <Grid item>{tweetInfo}</Grid>
        <Grid item>{body}</Grid>
        <Grid item container justify="center">
          <Button>Comment</Button>
          <Button>Retweet</Button>
          <Button>Like</Button>
          <Button>More</Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TweetCard;
