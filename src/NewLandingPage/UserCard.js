import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core';
import ImageCard from './ImageCard'
import roles from '../static/roles'
import useWindowPosition from './UseWindowPosition';
const useStyles= makeStyles((theme)=>({
        root:{
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                // alignItems: 'center'
        }
}));
const UserCard= ()=>{
        const classes=useStyles();
        const checked=useWindowPosition("header");
        return(

        <div className={classes.root}>
                <ImageCard role={roles[0]} checked={checked}/>
                <ImageCard role={roles[1]} checked={checked}/>
        </div>
        );
}
export default UserCard;