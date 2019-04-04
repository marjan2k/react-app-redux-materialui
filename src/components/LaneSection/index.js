import React from 'react';
import classNames from 'classnames';
import { Divider, Grid, Typography, withStyles } from '@material-ui/core';

const styles = theme => ({
  root: {
    paddingLeft: theme.spacing.unit * 2.5,
    paddingRight: theme.spacing.unit * 2.5,
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  active: {
    backgroundColor: '#f6fffd',
  },
});

class LaneSection extends React.PureComponent {
  render() {
    const {
      classes, laneItem: {
        lane, auction, year, make, itemsRemaining, itemsWatching, isWinning, isWatching, isOutbid,
      }
    } = this.props;
    const remainingNumber = itemsRemaining && itemsRemaining > 0 && itemsRemaining;
    const watchingNumber = itemsWatching && itemsWatching > 0 && itemsWatching;
    const active = itemsWatching || isWinning || isWatching || isOutbid;
    return (
      <div>
        <div className={classNames(classes.root, {
          [classes.active]: active
        })}>
          <Grid container>
            <Grid item xs={12}>
              <Grid container spacing={32} alignItems='center'>
                <Grid item>
                  <Typography variant='body1'>
                    {lane}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant='caption'>
                    {auction}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Typography variant='body2'>
                {year} {make} is live
              </Typography>
            </Grid>
            <Grid item xs={12}>
              {remainingNumber && (
                <Typography variant='caption' inline>
                  {itemsRemaining} Items remaining{watchingNumber && ', '}
                </Typography>
              )}
              {watchingNumber && (
                <Typography variant='subtitle1' inline>
                  {watchingNumber} are on your watchlist
                </Typography>
              )}
            </Grid>
          </Grid>
        </div>
        <Divider />
      </div>
    );
  }
}

export default withStyles(styles)(LaneSection);
