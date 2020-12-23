import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { CssBaseline, Button, AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll'
import useWindowPosition from './UseWindowPosition'
import ButtonAppBar from './AppBar';
const useStyles = makeStyles((theme) => ({
        appbar: {
                background: 'none',
                fontFamily: 'Nunito'
        },
        appbarTitle: {
                flexGrow: '1'
        },
        appbarWrapper: {
                width: '80%',
                margin: '0 auto',
                // marginLeft: '240px'
        },

        icon: {
                color: '#fff',
                fontSize: '2.4rem'
        },
        root: {
                justifyContent: 'center',
                display: 'flex',
                alignItems: 'center',
                minHeight: '90vh',
        },
        title: {
                fontSize: "4.5rem",
                color: '#fff'
        },
        desc: {
                fontSize: "3.5rem",
                color: '#fff'
        },
        container: {
                textAlign: "center",
        },
        goDown: {
                color: 'white',
                fontSize: '4rem'
        }
}));
const Header = () => {
        const classes = useStyles();
        const [checked, setChecked] = useState(false);
        const philosophyCheck = useWindowPosition("header");
        useEffect(() => {
                setChecked(true);
        }, []);
        return (
                <div className={classes.root} id="header">
                        {/* <AppBar className={classes.appbar} elevation={0}>
                                <Toolbar className={classes.appbarWrapper}>
                                        <h1 className={classes.appbarTitle}> WatchBidz. </h1>
                                       <IconButton>
                                                <SortIcon className={classes.icon}></SortIcon>
                                        </IconButton> 
                                        <Button className={classes.button} variant='contained' size="large" color="black">
                                                Seller
                                        </Button>
                                        <Button className={classes.button} variant='contained' size="large" color="black">
                                                Buyer
                                        </Button>
                                </Toolbar>
                        </AppBar> */}
                        <ButtonAppBar />
                        <Collapse in={checked}
                                {... (checked ? { timeout: 1000 } : {})}
                                collapsedHeight={2}>
                                <div className={classes.container}>
                                        <h1 className={classes.title}>
                                                Welcome to <br></br> WatchBidz
                                </h1>
                                <h1 className={classes.desc}>
                                Seamless exchange of luxury watches. No transaction fees.

                                </h1>
                                        <Scroll to='philosophy' smooth={true}>
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