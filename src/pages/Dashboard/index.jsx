import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLanes } from '../../store/Actions/Lanes';
import { Grid, Paper, withStyles } from "@material-ui/core";
import DashboardToolbar from "../../components/DashboardToolbar";
import LaneList from '../../components/LaneList';
import LaneContent from '../../components/LaneContent';

const styles = theme => ({
  root: {
    height: '100%',
    width: '100%,'
  },
  content: {
    height: '100%',
  },
  paper: {
    height: '100%'
  }
});

// App.js
class App extends Component {
  state = { username: 'tylerbuchea' };

  componentDidMount() {
    this.updateLanes(this.state.username);
  }

  updateLanes = () => this.props.getLanes();

  render() {
    const { lanes, classes } = this.props;
    return (
      <div className={classes.root}>
        <DashboardToolbar />
        <Grid container className={classes.content}>
          <Grid item xs={3} className={classes.content}>
            <Paper elevation={0} className={classes.paper}>
              <LaneList lanes={lanes} />
            </Paper>
          </Grid>
          <Grid item xs>
            <LaneContent />
          </Grid>
        </Grid>
      </div>
    );
  }
}

// AppContainer.js
const mapStateToProps = (state, ownProps) => ({ lanes: state.lanes });
const mapDispatchToProps = { getLanes };
const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default withStyles(styles)(AppContainer);
