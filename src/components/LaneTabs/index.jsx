import React from 'react';
import { Divider, Tab, Tabs, withStyles } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import LaneSection from '../LaneSection';
import LaneTabsCount from './LaneTabsCount';


const styles = theme => ({
  tabRoot: {
    minWidth: 'auto',
  },
  labelContainer: {
    paddingLeft: theme.spacing.unit * 1.5,
    paddingRight: theme.spacing.unit * 1.5,
    fontFamily: 'ProximaNova Semibold'
  },
});

class LaneTabs extends React.PureComponent {
  state = {
    tabValue: 0
  };

  handleChange = (event, tabValue) => {
    this.setState({ tabValue });
  };

  handleChangeIndex = (tabValue) => {
    this.setState({ tabValue });
  };


  render() {
    const { tabValue } = this.state;
    const { classes, lanes: { laneList, outbidLanes, isWatchingLanes, isWinningLanes } } = this.props;

    return (
      <div>
        <Tabs
          value={tabValue}
          onChange={this.handleChange}
          indicatorColor="secondary"
          textColor="secondary"
        >
          <Tab
            label="ALL"
            classes={{ root: classes.tabRoot, labelContainer: classes.labelContainer }}
          />
          <Tab
            label={<LaneTabsCount text='OUTBID' count={outbidLanes.length} variant='red' />}
            classes={{ root: classes.tabRoot, labelContainer: classes.labelContainer }}
          />
          <Tab
            label={<LaneTabsCount text='WATCHING' count={isWatchingLanes.length} variant='yellow' />}
            classes={{ root: classes.tabRoot, labelContainer: classes.labelContainer }}
          />
          <Tab
            label={<LaneTabsCount text='WINNING' count={isWinningLanes.length} variant='green' />}
            classes={{ root: classes.tabRoot, labelContainer: classes.labelContainer }}
          />
        </Tabs>
        <Divider />
        <SwipeableViews
          index={tabValue}
          onChangeIndex={this.handleChangeIndex}
        >
          <div>
            {laneList.map(laneItem =>
              <LaneSection laneItem={laneItem} key={laneItem.lane} />)}
          </div>
          <div>
            {outbidLanes.map(laneItem =>
              <LaneSection laneItem={laneItem} key={laneItem.lane} />)}
          </div>
          <div>
            {isWatchingLanes.map(laneItem =>
              <LaneSection laneItem={laneItem} key={laneItem.lane} />)}
          </div>
          <div>
            {isWinningLanes.map(laneItem =>
              <LaneSection laneItem={laneItem} key={laneItem.lane} />)}
          </div>
        </SwipeableViews>
      </div>
    );
  }
}

export default withStyles(styles)(LaneTabs);
