import React from 'react';
import { Box, Grid } from '@material-ui/core';
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
import { faUserTie } from '@fortawesome/pro-light-svg-icons/faUserTie';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { faSearch } from '@fortawesome/pro-regular-svg-icons/faSearch';
import IconButton from '@material-ui/core/IconButton';
import Todos from './features/todo/todos';
import NewTodo from './features/todo/NewTodo';

const useStyles = makeStyles({
  box: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '68px',
  },
  icon: {
    padding: '10px',
  },
  profile: {
    position: 'absolute',
    bottom: '0',
    padding: '10px',
  },
});

export const Home = () => {
  const classes = useStyles();
  return (
    <div id="home">
      Firestore demo
      <Todos />
      <NewTodo />
      <Grid container direction="row" justify="space-between" alignItems="stretch" xs={3}>
        <Grid item>
          <Container>
            <Box className={classes.box}>
              <Box>
                <Button>
                  <FontAwesomeIcon className={classes.icon} icon={faTwitter} size="2x" />
                </Button>
                <Button>
                  <FontAwesomeIcon className={classes.icon} icon={faHomeHeart} size="2x" />
                  Home
                </Button>
                <Button>
                  <FontAwesomeIcon className={classes.icon} icon={faHashtag} size="2x" />
                  Explore
                </Button>
                <Button>
                  <FontAwesomeIcon className={classes.icon} icon={faBell} size="2x" />
                  Notifications
                </Button>
                <Button>
                  <FontAwesomeIcon className={classes.icon} icon={faEnvelope} size="2x" />
                  Messages
                </Button>
                <Button>
                  <FontAwesomeIcon className={classes.icon} icon={faBookmark} size="2x" />
                  Bookmarks
                </Button>
                <Button>
                  <FontAwesomeIcon className={classes.icon} icon={faFileAlt} size="2x" />
                  Lists
                </Button>
                <Button>
                  <FontAwesomeIcon className={classes.icon} icon={faUserCircle} size="2x" />
                  Profile
                </Button>
                <Button>
                  <FontAwesomeIcon className={classes.icon} icon={faEllipsisV} size="2x" />
                  More
                </Button>
              </Box>
              <Box className={classes.profile}>
                <Button>
                  <FontAwesomeIcon icon={faUserTie} size="2x" />
                </Button>
              </Box>
            </Box>
          </Container>
        </Grid>
        <Grid item>
          <Container>
            <Box>Box2</Box>
          </Container>
        </Grid>
        <Grid item>
          <Container>
            <Box>
              <FormControl variant="outlined">
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
            </Box>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
};
