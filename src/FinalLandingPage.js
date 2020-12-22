import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core';
import Header from './NewLandingPage/Header'
import UserCard from './NewLandingPage/UserCard'
const useStyles=makeStyles((theme)=>({
        root:{
                minHeight: '200vh',
                backgroundImage: `url(${process.env.PUBLIC_URL+'/bg.jpg'})`,
                backgroundRepeat: 'no-repeat',
                backgronudSize: 'color',
        }
}));
const FinalLandingPage = ()=> {
        const classes=useStyles();
        return(
                <div className={classes.root}>
                         <CssBaseline />
                         <Header />
                         <UserCard />
                </div>
        )
}
export default FinalLandingPage;