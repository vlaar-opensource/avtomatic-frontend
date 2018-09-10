import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton'
import { Icon } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'

const styles = {
  root: {
    flexGrow: 1,
  },
};

function TheAppBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton}>
              <MenuIcon/>
          </IconButton>
          <Typography variant="title" color="inherit">
            Entry Barang Lelang
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

TheAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TheAppBar);