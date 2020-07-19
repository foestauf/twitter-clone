import React from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/pro-regular-svg-icons/faImage';
import Input from '@material-ui/core/Input';

const NewTweet = () => {
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
              <Button>TWEET</Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default NewTweet;
