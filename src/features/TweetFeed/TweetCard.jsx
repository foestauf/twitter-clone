import React from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

const TweetCard = () => {
  return (
    <Paper style={{ display: 'flex' }}>
      <Grid
        container
        spacing={2}
        style={{ display: 'flex', flexDirection: 'column', width: 'min-content' }}
      >
        <Grid item xs={1}>
          <Avatar>OP</Avatar>
        </Grid>
      </Grid>
      <Grid item xs={10} style={{ display: 'flex', flexDirection: 'column' }}>
        <Grid item>TWEETER INFO</Grid>
        <Grid item>Main Content Window</Grid>
        <Grid item>
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
