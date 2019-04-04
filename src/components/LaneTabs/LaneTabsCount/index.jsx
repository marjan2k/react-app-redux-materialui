import React, { memo } from 'react';
import { Grid, withStyles } from '@material-ui/core';
import classNames from "classnames";

const styles = theme => ({
  count: {
    width: '21px',
    height: '21px',
    borderRadius: '8px',
    color: theme.palette.common.white,
  },
  redCount: {
    backgroundColor: '#e66d64',
  },
  greenCount: {
    backgroundColor: '#1bbb9a',
  },
  yellowCount: {
    backgroundColor: '#f6c988',
  },
});


const LaneTabsCount = memo(({ text, count = 0, variant = 'red', classes }) => {
  return (
    <Grid container>
      <Grid item>
        {text}
      </Grid>
      {count > 0 && (
        <>
          &nbsp;&nbsp;
          <Grid item>
            <div className={classNames(classes.count, {
              [classes.redCount]: variant === 'red',
              [classes.greenCount]: variant === 'green',
              [classes.yellowCount]: variant === 'yellow',
            })}>
              {count}
            </div>
          </Grid>
        </>
      )}
    </Grid>
  );
});

export default withStyles(styles)(LaneTabsCount);
