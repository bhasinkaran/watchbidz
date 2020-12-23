import React, {useState, useEffect} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import { CssBaseline, AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll'
import useWindowPosition from './UseWindowPosition'
const useStyles=makeStyles((theme)=>({
        root:{
                justifyContent: 'center',
                display: 'flex',
                alignItems:'center',
                height:'100vh',
        },
        title:{
                fontSize:"3rem",
                color: '#fff'
        },
        desc:{
                fontSize:"2rem",
                color: '#fff'
        },
        container:{
                textAlign:"center",
                padding: '100px'
        },
        goDown:{
                color: 'white',
                fontSize: '4rem'
        }
}));
const Philosophy = ()=> {
        const classes=useStyles();
        const [checked,setChecked]=useState(false);
        const philosophyCheck=useWindowPosition("header");
        useEffect (()=>{
                setChecked(true);
        },[]);
        return(
                <div className={classes.root} id="philosophy">
                       
                        <Collapse in={philosophyCheck}
                        {... (philosophyCheck ? {timeout : 1000} : {})}
                        collapsedHeight={20}>
                        <div className={classes.container}>
                                <h1 className={classes.title}>
                                Our Mission
                                </h1>
                                <h1 className={classes.desc}>
                                The first online community that allows the sale of luxury watches without any
selling fees. It's simple: match those who want to sell their luxury watch with authorized dealers
looking to buy them.
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
export default Philosophy;