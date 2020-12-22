import React, {useState, useEffect} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import { CssBaseline, AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll'

const useStyles=makeStyles((theme)=>({
        appbar:{
                background:'none',
                fontFamily: 'Nunito'
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
        },
        root:{
                justifyContent: 'center',
                display: 'flex',
                alignItems:'center',
                height:'100vh',
        },
        title:{
                fontSize:"4.5rem",
                color: '#fff'
        },
        container:{
                textAlign:"center",
        },
        goDown:{
                color: 'green',
                fontSize: '4rem'
        }
}));
const Header = ()=> {
        const classes=useStyles();
        const [checked,setChecked]=useState(false);
        useEffect (()=>{
                setChecked(true);
        },[]);
        return(
                <div className={classes.root} id="header">
                        <AppBar className={classes.appbar} elevation={0}>
                                <Toolbar className={classes.appbarWrapper}>
                                <h1 className={classes.appbarTitle}> WatchBidz. </h1>
                                <IconButton>
                                        <SortIcon className={classes.icon}></SortIcon>
                                </IconButton>
                                </Toolbar>
                        </AppBar>
                        <Collapse in={checked}
                        {... (checked ? {timeout : 1000} : {})}
                        collapsedHeight={20}>
                        <div className={classes.container}>
                                <h1 className={classes.title}>
                                        Welcome to <br></br> WatchBidz
                                </h1>
                                <Scroll to='user-roles' smooth={true}>
                                        {/*  */}
                                        <IconButton>
                                                <ExpandMoreIcon className={classes.goDown}></ExpandMoreIcon>
                                        </IconButton>
                                </Scroll>
                        </div>
                        </Collapse>
                </div>
                
        )
}
export default Header;