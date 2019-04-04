import React, { memo } from 'react';
import { Grid, withStyles } from '@material-ui/core';
import SkeletonAuction from '../../assets/png/skeletonAuction.png';


const styles = theme => ({
  root: {
    backgroundColor: '#edeeef',
    height: '100%',
    padding: theme.spacing.unit * 5,
  },
  container: {
    height: '100%',
  },
  skeleton: {
    backgroundColor: '#f8f8f8',
    animation: `pulsate 1250ms ${theme.transitions.easing.easeInOut} 100ms infinite`,
  },
  '@keyframes pulsate': {
    '0%': {
      opacity: 1,
    },
    '50%': {
      opacity: 0.5,
    },
    '100%': {
      opacity: 1,
    },
  },
});


const LaneContent = memo(({ classes }) => {
  return (
    <div className={classes.root}>
      <Grid container className={classes.container} spacing={32}>
        <Grid item className={classes.skeleton}>
          <img src={SkeletonAuction} alt='loading' />
        </Grid>
        <Grid item className={classes.skeleton}>
          <img src={SkeletonAuction} alt='loading' />
        </Grid>
        <Grid item className={classes.skeleton}>
          <img src={SkeletonAuction} alt='loading' />
        </Grid>
        <Grid item className={classes.skeleton}>
          <img src={SkeletonAuction} alt='loading' />
        </Grid>
      </Grid>
    </div>
  );
});

export default withStyles(styles)(LaneContent);
