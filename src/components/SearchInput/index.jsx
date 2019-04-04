import React from 'react';
import { InputAdornment, TextField, withStyles } from '@material-ui/core';
import { Search } from '@material-ui/icons'


const styles = theme => ({
  searchField: {
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit,

  },
  searchInput: {
    paddingTop: theme.spacing.unit * 1.5,
    paddingBottom: theme.spacing.unit * 1.5,
  }
});

class SearchInput extends React.PureComponent {
  render() {
    const { placeholder, classes } = this.props;
    return (
          <TextField
            variant="outlined"
            fullWidth
            className={classes.searchField}
            placeholder={placeholder}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Search />
                </InputAdornment>
              ),
              classes: {
                input: classes.searchInput
              }
            }}
          />
    )
  }
}

export default withStyles(styles)(SearchInput);
