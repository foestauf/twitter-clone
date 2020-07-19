import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';
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
import Grid from '@material-ui/core/Grid';

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
    paddingRight: '0.5em',
    justifyContent: 'center',
    display: 'flex',
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
  avatar: {
    padding: '0.5em',
  },
});

const NavMenu = () => {
  const classes = useStyles();
  return (
    <Paper style={{ position: 'sticky' }} className={classes.box}>
      <Grid container direction="column" spacing={2}>
        <Container>
          <NavButton to="/" title="" icon={faTwitter} size="1" />
          <NavButton to="/" title="Home" icon={faHomeHeart} />
          <NavButton to="/" title="Explore" icon={faHashtag} />
          <NavButton to="/" title="Notifications" icon={faBell} />
          <NavButton to="/" title="Messages" icon={faEnvelope} />
          <NavButton to="/" title="Bookmarks" icon={faBookmark} />
          <NavButton to="/" title="Lists" icon={faFileAlt} />
          <NavButton to="/profile" title="Profile" icon={faUserCircle} />
          <NavButton to="/" title="More" icon={faEllipsisV} />
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              style={{ justifyContent: 'center' }}
            >
              Tweet
            </Button>
          </Grid>
          <Button className={classes.button}>
            <Grid item container alignContent="center" justify="center" xs={12}>
              <Grid className={classes.avatar} item xs="auto">
                <Avatar>OP</Avatar>
              </Grid>
              <Grid item container justify="center" alignContent="center" xs={8}>
                <span>User Name</span>
              </Grid>
            </Grid>
          </Button>
        </Container>
      </Grid>
    </Paper>
  );
};

const NavButton = (props) => {
  const { to, title, size, icon } = props;
  const classes = useStyles();
  return (
    <Grid item size={size}>
      <Button className={classes.button} component={RouterLink} to={to}>
        <div className={classes.iconContainer}>
          <FontAwesomeIcon icon={icon} className={classes.icon} size="2x" />
        </div>
        {title}
      </Button>
    </Grid>
  );
};

export default NavMenu;
