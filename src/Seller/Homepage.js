import HeaderBar from "./HeaderBar";
import { List } from "@material-ui/core";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ListedList from './homepage_components/ListedList'
import Divider from '@material-ui/core/Divider'

const useStyles = makeStyles((theme) => ({
        container: {
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gridGap: theme.spacing(3),
        },
        paper: {
          padding: theme.spacing(1),
          textAlign: 'center',
          color: theme.palette.text.secondary,
          whiteSpace: 'nowrap',
          marginBottom: theme.spacing(1),
        },
        divider: {
          margin: theme.spacing(2, 0),
        },
      }));

const Homepage = () => {
        const classes = useStyles();
        return (<div>
              
                <HeaderBar />
                <Grid container
                        direction="row"
                        justify="flex-start"
                        alignItems="baseline"
                        margin >
                        <Grid item xs={5}>
                                <Typography variant="subtitle1" gutterBottom >
                                        Your Listed Watches
                                </Typography>
                        </Grid>
                </Grid>

                <Grid container
                        direction="row"
                        justify="flex-start"
                        alignItems="baseline"
                        margin>
                        <Grid item xs={5}>
                                <ListedList />
                        </Grid>
                </Grid>


        </div>);
}
export default Homepage;