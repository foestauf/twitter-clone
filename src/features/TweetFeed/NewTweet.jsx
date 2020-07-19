import React from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/pro-regular-svg-icons/faImage';
import Input from '@material-ui/core/Input';
import Box from '@material-ui/core/Box';

const NewTweet = () => {
  return (
    <div>
      <Paper style={{ display: 'flex' }}>
        <Grid container spacing={2} style={{ display: 'flex', width: 'min-content' }}>
          <Grid item xs={1}>
            <Avatar>OP</Avatar>
          </Grid>
        </Grid>
        <Grid item xs={10} style={{ display: 'flex', flexDirection: 'column' }}>
          <Input label="New Tweet" placeholder="New Tweet" style={{ width: '100%' }} />
          <Grid item style={{ display: 'flex' }}>
            <Box>
              <Button>
                <FontAwesomeIcon icon={faImage} size="2x" />
              </Button>
              <Button>
                <FontAwesomeIcon icon={faImage} size="2x" />
              </Button>
              <Button>
                <FontAwesomeIcon icon={faImage} size="2x" />
              </Button>
              <Button>
                <FontAwesomeIcon icon={faImage} size="2x" />
              </Button>
              <Button>
                <FontAwesomeIcon icon={faImage} size="2x" />
              </Button>
              <Button>TWEET</Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default NewTweet;
