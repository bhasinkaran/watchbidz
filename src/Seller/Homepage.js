import HeaderBar from "./HeaderBar";
import { List } from "@material-ui/core";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ListedList from './homepage_components/ListedList'
const Homepage = () => {
        return(<div>
                <HeaderBar />
                <Grid container >
                        <Grid item xs={12}>
                                <Typography variant="h4" gutterBottom>
                                        Your Listed Watches
        </Typography>
                        </Grid>
                        <Grid item xs={12}>
                                <ListedList />
                        </Grid>
                </Grid>


        </div>);
}
export default Homepage;