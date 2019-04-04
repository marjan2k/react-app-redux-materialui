import React, { memo } from 'react';
import { Grid, Typography, withStyles } from '@material-ui/core';

const styles = theme => ({
  root: {
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
  },
});

const ActionItem = memo(({ text, icon, classes }) => (
  <Grid item>
    <Grid container spacing={16} alignItems='center' className={classes.root}>
      <Grid item>
        <img src={icon} alt='buy' />
      </Grid>
      <Grid item>
        <Typography variant='h6'>
          {text}
        </Typography>
      </Grid>
    </Grid>
  </Grid>
));

export default withStyles(styles)(ActionItem);
