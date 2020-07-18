import React from 'react';
import { Grid } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import InputAdornment from '@material-ui/core/InputAdornment';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { faSearch } from '@fortawesome/pro-regular-svg-icons/faSearch';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import makeStyles from '@material-ui/core/styles/makeStyles';
import NavMenu from './features/NavMenu/NavMenu';
import TweetFeed from './features/TweetFeed/TweetFeed';

const useStyles = makeStyles({
  container: {
    padding: '1em',
  },
});

export const Home = () => {
  const classes = useStyles();
  return (
    <div id="home">
      <Grid
        className={classes.container}
        container
        direction="row"
        justify="center"
        alignItems="stretch"
      >
        <Grid item xs="2">
          <NavMenu />
        </Grid>
        <Grid item xs="4">
          <Paper>
            <Container>
              <div style={{ position: 'sticky' }}>Home Area</div>
              <TweetFeed />
            </Container>
          </Paper>
        </Grid>
        <Grid item xs="2">
          <Paper>
            <Container>
              <FormControl style={{ width: '100%' }} variant="outlined">
                <InputLabel>Search</InputLabel>
                <OutlinedInput
                  endAdornment={
                    <InputAdornment position="start">
                      <IconButton edge="start">
                        <FontAwesomeIcon icon={faSearch} />
                      </IconButton>
                    </InputAdornment>
                  }
                  labelWidth={70}
                />
              </FormControl>
            </Container>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
