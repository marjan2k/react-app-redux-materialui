import React from 'react';
import { AppBar, Grid, Tab, Tabs, Toolbar, Typography, withStyles } from '@material-ui/core';
import { ArrowDropDown } from '@material-ui/icons';


const styles = theme => ({
  toolbar: {
    borderBottom: `1px solid #f1f1f1`
  },
  tabs: {
    flexGrow: 1,
  },
  tabsRoot: {
    borderBottom: '1px solid #e8e8e8',
  },
  tabsIndicator: {
    backgroundColor: '#1890ff',
  },
  tabRoot: {
    textTransform: 'initial',
    // minWidth: 65,
    fontFamily: 'ProximaNova Regular',
    fontSize: '13px',
    color: theme.typography.h6.color,
    '&$tabSelected': {
      color: '#1890ff',
      fontWeight: theme.typography.fontWeightMedium,
    },
  },
  tabSelected: {},
  typography: {
    padding: theme.spacing.unit * 3,
  },
  filters: {
    paddingRight: '12px',
  },
});


class DashboardToolbar extends React.PureComponent {
  state = {
    value: 3,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    const { classes } = this.props;
    return (
      <AppBar color='inherit' position='static' elevation={0}>
        <Toolbar disableGutters variant='dense' className={classes.toolbar}>
          <Grid container justify='space-between' alignItems='center'>
            <div className={classes.tabs}>
              <Tabs
                value={value}
                // onChange={this.handleChange}
                classes={{ indicator: classes.tabsIndicator }}
              >
                <Tab
                  disableRipple
                  classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
                  label="UPCOMING"
                />
                <Tab
                  disableRipple
                  classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
                  label="LIVE APPRAISALS"
                />
                <Tab
                  disableRipple
                  classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
                  label="LIVE 24 HOUR AUCTIONS"
                />
                <Tab
                  disableRipple
                  classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
                  label="LIVE LANES"
                />
              </Tabs>
            </div>
            <Grid item>
              <Grid container alignItems='center' spacing={16} className={classes.filters}>
                <Grid item>
                  <Typography variant='h6' className={classes.tabRoot}>
                    FILTERS
                  </Typography>
                </Grid>
                <Grid item>
                  <ArrowDropDown />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    )
  }
}

export default withStyles(styles)(DashboardToolbar);
