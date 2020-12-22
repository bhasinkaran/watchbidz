import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core';
import ImageCard from './ImageCard'
const useStyles= makeStyles((theme)=>({
        root:{
                height: '100vh'
        }
}));
const UserCard= ()=>{
        const classes=useStyles();
        return(
        
        <div className={classes.root}>
                <ImageCard />
        </div>
        );
}
export default UserCard;