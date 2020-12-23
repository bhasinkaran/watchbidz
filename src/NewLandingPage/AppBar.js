import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  appbar: {
    flexGrow: 1,
    background: 'none',
    fontFamily: 'Nunito'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontSize: '2.5rem',
    fontFamily: 'Pinyon Script', 
    fontWeight: 'cursive'

  },
  appbarWrapper: {
        width: '80%',
        margin: '0 auto',
        // marginLeft: '240px'
},
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
  
      <AppBar className={classes.appbar}  elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
                

          <Typography variant="h6" className={classes.title}>
            WB
          </Typography>
          <Button color="inherit">Contact</Button>
          <Button color="inherit">Buyer</Button>
          <Button color="inherit">Seller</Button>
        </Toolbar>
      </AppBar>

  );
}