import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import { CssBaseline, AppBar, IconButton, Toolbar } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort'
const useStyles=makeStyles((theme)=>({
        appbar:{
                background:'none'
        },
        appbarTitle:{
                flexGrow:'1'
        },
        appbarWrapper:{
                 width: '80%',
                 margin: '0 auto'
        },

        icon:{
                color: '#fff',
                fontSize: '2.4rem'
        }
}));
const Header = ()=> {
        const classes=useStyles();
        return(
                <div >
                        <AppBar className={classes.appbar} elevation={0}>
                                <Toolbar className={classes.appbarWrapper}>
                                <h1 className={classes.appbarTitle}> WatchBidz. </h1>
                                <IconButton>
                                        <SortIcon className={classes.icon}></SortIcon>
                                </IconButton>
                                </Toolbar>
                        </AppBar>
                </div>
        )
}
export default Header;