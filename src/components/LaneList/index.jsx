import React from 'react';
import { Grid, withStyles } from '@material-ui/core';
import SearchInput from '../SearchInput';
import LaneTabs from '../LaneTabs';


const styles = theme => ({
  root: {
    height: '100%',
  },
  searchField: {
    padding: theme.spacing.unit * 3,

  },
  searchInput: {
    paddingTop: theme.spacing.unit * 1.5,
    paddingBottom: theme.spacing.unit * 1.5,
  }
});

class LaneList extends React.PureComponent {
  render() {
    const { lanes, classes } = this.props;
    return (
      <Grid container justify='center' className={classes.root} direction='column'>
        <Grid item>
          <SearchInput placeholder='Search Live Lanes' />
        </Grid>
        <Grid item xs>
          <LaneTabs lanes={lanes} />
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(LaneList);
