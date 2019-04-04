import React, { memo } from 'react';
import { AppBar, Grid, Icon, Toolbar, withStyles } from '@material-ui/core';
import { ArrowDropDown } from '@material-ui/icons';
import ActionItem from './ActionItem';
import buyIcon from '../../assets/svg/buyIcon.svg';
import sellIcon from '../../assets/svg/sellIcon.svg';
import pendingIcon from '../../assets/svg/pendingIcon.svg';
import finishedIcon from '../../assets/svg/finishedIcon.svg';
import notificationIcon from '../../assets/svg/notificationIcon.svg';
import eblockLogo from '../../assets/png/eblockLogo.png';
import mockDisplayPic from '../../assets/png/mockDisplayPic.png';

const styles = theme => ({
  appBarRoot: {
    backgroundColor: '#24292f',
  },
  actionSelectors: {
    paddingLeft: theme.spacing.unit * 9,
  }
});


const Header = memo(({ classes }) => (
  <AppBar position="static" classes={{ root: classes.appBarRoot, colorPrimary: classes.appBarColor }}>
    <Toolbar>
      <Grid container justify='space-between' alignItems='center'>
        <Grid item>
          <Grid container>
            <Grid item>
              <img src={eblockLogo} alt='eBlock' />
            </Grid>
            <Grid item>
              <Grid container className={classes.actionSelectors} spacing={40}>
                <ActionItem text='BUY' icon={buyIcon} />
                <ActionItem text='SELL' icon={sellIcon} />
                <ActionItem text='PENDING' icon={pendingIcon} />
                <ActionItem text='FINISHED' icon={finishedIcon} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container spacing={40} alignItems='center'>
            <Grid item>
              <img src={notificationIcon} alt='notification' />
            </Grid>
            <Grid item>
              <Grid container alignItems='center' spacing={24}>
                <Grid item>
                  <img src={mockDisplayPic} alt='display picture' />
                </Grid>
                <Icon><ArrowDropDown /></Icon>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Toolbar>
  </AppBar>
));

export default withStyles(styles)(Header);
