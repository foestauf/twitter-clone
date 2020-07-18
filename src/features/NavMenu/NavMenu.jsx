import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faHomeHeart } from '@fortawesome/pro-regular-svg-icons/faHomeHeart';
import { faHashtag } from '@fortawesome/pro-regular-svg-icons/faHashtag';
import { faBell } from '@fortawesome/pro-regular-svg-icons/faBell';
import { faEnvelope } from '@fortawesome/pro-regular-svg-icons/faEnvelope';
import { faBookmark } from '@fortawesome/pro-regular-svg-icons/faBookmark';
import { faFileAlt } from '@fortawesome/pro-regular-svg-icons/faFileAlt';
import { faUserCircle } from '@fortawesome/pro-regular-svg-icons/faUserCircle';
import { faEllipsisV } from '@fortawesome/pro-regular-svg-icons/faEllipsisV';
import Avatar from '@material-ui/core/Avatar';
import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

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

const NavMenu = () => {
  const classes = useStyles();
  return (
    <Paper style={{ position: 'sticky' }} className={classes.box}>
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
        <Button className={classes.button}>Tweet</Button>

        <Button className={classes.button}>
          <div className={classes.iconContainer}>
            <Avatar>OP</Avatar>
            <span>User Name</span>
          </div>
        </Button>
      </Container>
    </Paper>
  );
};

export default NavMenu;
