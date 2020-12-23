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
                alignItems: 'center',
                [theme.breakpoints.down('md')]: {
                        flexDirection:"column"
                }
        }
}));
const UserCard= ()=>{
        const classes=useStyles();
        const checked=useWindowPosition("header");
        return(
         <div id='user-roles'>
                {/* // <div id='user-roles'>

                // </div>
                // <br /> */}
        <div  className={classes.root} >
                <ImageCard role={roles[0]} checked={checked}/>
                <ImageCard role={roles[1]} checked={checked}/>
        </div>
        </div>
        );
}
export default UserCard;