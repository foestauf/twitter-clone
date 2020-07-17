import React from 'react';
import { Grid } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHomeHeart } from '@fortawesome/pro-regular-svg-icons/faHomeHeart';
import { faHashtag } from '@fortawesome/pro-regular-svg-icons/faHashtag';
import { faBell } from '@fortawesome/pro-regular-svg-icons/faBell';
import { faEnvelope } from '@fortawesome/pro-regular-svg-icons/faEnvelope';
import { faBookmark } from '@fortawesome/pro-regular-svg-icons/faBookmark';
import { faFileAlt } from '@fortawesome/pro-regular-svg-icons/faFileAlt';
import { faUserCircle } from '@fortawesome/pro-regular-svg-icons/faUserCircle';
import { faEllipsisV } from '@fortawesome/pro-regular-svg-icons/faEllipsisV';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { faSearch } from '@fortawesome/pro-regular-svg-icons/faSearch';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Todos from './features/todo/todos';
import NewTodo from './features/todo/NewTodo';

const useStyles = makeStyles({
  box: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  icon: {
    padding: '10px',
  },
  iconContainer: {
    width: '3em',
    padding: '0.5em',
  },
  profile: {
    position: 'absolute',
    bottom: '0',
    padding: '10px',
  },
  button: {
    width: '100%',
    justifyContent: 'flex-start',
  },
});

export const Home = () => {
  const classes = useStyles();
  return (
    <div id="home">
      Firestore demo
      <Todos />
      <NewTodo />
      <Grid container direction="row" justify="space-between" alignItems="stretch">
        <Grid item xs="2">
          <Paper className={classes.box}>
            <Container>
              <Button className={classes.button}>
                <div className={classes.iconContainer}>
                  <FontAwesomeIcon className={classes.icon} icon={faTwitter} size="2x" />
                </div>
              </Button>
              <Button className={classes.button}>
                <div className={classes.iconContainer}>
                  <FontAwesomeIcon className={classes.icon} icon={faHomeHeart} size="2x" />
                </div>
                Home
              </Button>
              <Button className={classes.button}>
                <div className={classes.iconContainer}>
                  <FontAwesomeIcon className={classes.icon} icon={faHashtag} size="2x" />
                </div>
                Explore
              </Button>
              <Button className={classes.button}>
                <div className={classes.iconContainer}>
                  <FontAwesomeIcon className={classes.icon} icon={faBell} size="2x" />
                </div>
                Notifications
              </Button>
              <Button className={classes.button}>
                <div className={classes.iconContainer}>
                  <FontAwesomeIcon className={classes.icon} icon={faEnvelope} size="2x" />
                </div>
                Messages
              </Button>
              <Button className={classes.button}>
                <div className={classes.iconContainer}>
                  <FontAwesomeIcon className={classes.icon} icon={faBookmark} size="2x" />
                </div>
                Bookmarks
              </Button>
              <Button className={classes.button}>
                <div className={classes.iconContainer}>
                  <FontAwesomeIcon className={classes.icon} icon={faFileAlt} size="2x" />
                </div>
                Lists
              </Button>
              <Button className={classes.button}>
                <div className={classes.iconContainer}>
                  <FontAwesomeIcon className={classes.icon} icon={faUserCircle} size="2x" />
                </div>
                Profile
              </Button>
              <Button className={classes.button}>
                <div className={classes.iconContainer}>
                  <FontAwesomeIcon className={classes.icon} icon={faEllipsisV} size="2x" />
                </div>
                More
              </Button>
              <Button className={classes.button}>
                <div className={classes.iconContainer}>
                  <Avatar>OP</Avatar>
                  <span>User Name</span>
                </div>
              </Button>
            </Container>
          </Paper>
        </Grid>
        <Grid item xs="8">
          <Container>
            <Paper>Hello</Paper>
          </Container>
        </Grid>
        <Grid item xs="2">
          <Paper>
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
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
