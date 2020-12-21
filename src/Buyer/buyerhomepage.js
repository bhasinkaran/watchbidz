import { List } from "@material-ui/core";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box'
import Divider from '@material-ui/core/Divider'
import {Container} from 'semantic-ui-react'
import PreviousBids from "./homepage_components/PreviousBids";
import CurrentBids from "./homepage_components/CurrentBids";
import ClosingSoon from "./homepage_components/ClosingSoon";
import RecentlySold from "./homepage_components/RecentlySold";


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

const BuyerHomepage = () => {
        const classes = useStyles();
        return (<div>
              
                
                <Box style={{marginLeft:"10px"}}>
                <Grid container
                        direction="row"
                        justify="center"
                        alignItems="baseline"
                        margin 
                        style={{marginLeft:"10px"}}
                        >
                        <Grid item xs={5}>
                                <Typography variant="h4" gutterBottom >
                                        Watches You Have A Bid On
                                </Typography>
                        </Grid>
                </Grid>

                <Grid container
                        direction="row"
                        justify="center"
                        alignItems="baseline"
                        margin
                        style={{marginLeft:"10px"}}

                        >
                        <Grid item xs={5}>
                                <CurrentBids />
                        </Grid>
                </Grid>

                <Grid container
                        direction="row"
                        justify="center"
                        alignItems="baseline"
                        margin 
                        style={{marginTop:"20px",
                                marginLeft:"10px"}}
                        >
                        <Grid item xs={5}>
                                <Typography variant="h4" gutterBottom >
                                        Bid Windows Closing Soon...
                                </Typography>
                        </Grid>
                </Grid>

                <Grid container
                        direction="row"
                        justify="center"
                        alignItems="baseline"
                        margin
                        style={{marginLeft:"10px"}}

                        >
                        <Grid item xs={5}>
                                <ClosingSoon />
                                {/* <PreviousBids /> */}
                        </Grid>
                </Grid>
                <Grid container
                        direction="row"
                        justify="center"
                        alignItems="baseline"
                        margin 
                        style={{marginTop:"20px",
                                marginLeft:"10px"}}
                        >
                        <Grid item xs={5}>
                                <Typography variant="h4" gutterBottom >
                                        Recently Closed Deals - Hot Watches
                                </Typography>
                        </Grid>
                </Grid>

                <Grid container
                        direction="row"
                        justify="center"
                        alignItems="baseline"
                        margin
                        style={{marginLeft:"10px"}}

                        >
                        <Grid item xs={5}>
                                <RecentlySold />
                                {/* <PreviousBids /> */}
                        </Grid>
                </Grid>
                </Box>
                

        </div>);
}
export default BuyerHomepage;