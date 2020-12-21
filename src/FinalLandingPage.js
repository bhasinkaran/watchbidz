import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core';
import Header from './NewLandingPage/Header'
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
                         <Header></Header>
                </div>
        )
}
export default FinalLandingPage;