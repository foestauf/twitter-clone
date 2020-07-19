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
        direction="column"
        style={{ width: 'min-content', padding: '0.5em' }}
      >
        <Grid item xs={1}>
          <Avatar>OP</Avatar>
        </Grid>
      </Grid>
      <Grid item container direction="column" xs={10} spacing={1}>
        <Grid item>TWEETER INFO</Grid>
        <Grid item>Main Content Window</Grid>
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
