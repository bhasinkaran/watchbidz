import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import {Button, Header} from 'semantic-ui-react';
import Divider from '@material-ui/core/Divider'

import { List } from '@material-ui/core';
import { Link, Redirect } from 'react-router-dom'
import { AppState } from '../../context'

const useStyles = makeStyles((theme) => ({
        root: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
                overflow: 'hidden',
                backgroundColor: theme.palette.background.paper,
        },
        gridList: {
                flexWrap: 'nowrap',
                // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
                transform: 'translateZ(0)',
        },
        title: {
                color: theme.palette.primary.light,
        },
        titleBar: {
                background:
                        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
        },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
const PreviousBids = () => {
        const someContext = useContext(AppState);
        const { buyers, user , previous} = someContext;

        const classes = useStyles();
        if (buyers[user] && buyers[user]['previous'] && previous) {
                return (
                        <div>
                        <div className={classes.root}>
                                <GridList className={classes.gridList} cols={Math.min(Object.values(buyers[user]['previous']).length,5)}>
                                        {/* Object.values(sellers[user]['listed']).length */}
                                        {Object.values(buyers[user]['previous']).map((item) => (
                                                <GridListTile key={previous[item].modelNo}>
                                                        <img src={previous[item].photoTime} alt={previous[item].modelNo} />
                                                        <GridListTileBar
                                                                title={previous[item].modelNo}
                                                                classes={{
                                                                        root: classes.titleBar,
                                                                        title: classes.title,
                                                                }}
                                                                actionIcon={
                                                                        <IconButton aria-label={`star `}>
                                                                                {/* ${item.item}  */}
                                                                                <StarBorderIcon className={classes.title} />
                                                                        </IconButton>
                                                                }
                                                        />
                                                </GridListTile>
                                        ))}
                                </GridList>
                        </div>
                        <div>
                                 <Divider />
                                {/* <Button as={Link} to={`/seller/listwatch`} variant="contained" color="primary" disableElevation>
                                        List a Watch
                                </Button> */}
                        </div>
                        </div>
                );
        }
        else {
              if(user) {
                return (
                        <div>
                                <Header>You currently have no previous bids.</Header>
                                
                                <Divider />
                                <Button style={{marginTop:"10px"}} as={Link} to={`/buyer/inventory`} variant="contained" color="primary" disableElevation>
                                        See Inventory, Bid Now
                                </Button>
                        </div>
                )
              } 
              else{
                      return <Redirect to='/buyer/login' ></Redirect>
              }
        }
}
export default PreviousBids;