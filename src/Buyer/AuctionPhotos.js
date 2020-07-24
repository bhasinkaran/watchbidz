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
import { AppState } from '../context'

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
                        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 50%)',
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
const AuctionPhotos = ({item}) => {
        const someContext = useContext(AppState);
        const {  listed} = someContext;

        const classes = useStyles();
        const types = ['photoTime', 'photoCrown', 'photoLatch']
        const typesWords = ['General', 'Crown', 'Latch']

        
                return (
                        <div>
                        <div className={classes.root}>
                                <GridList className={classes.gridList} cols={3}>
                                        {/* Object.values(sellers[user]['listed']).length */}
                                        {types.map((type, index) => (
                                                <GridListTile key={item[type]}>
                                                        <img src={item[type]} alt={item[type]} />
                                                        <GridListTileBar
                                                                title={typesWords[index]}
                                                                classes={{
                                                                        root: classes.titleBar,
                                                                        title: classes.title,
                                                                }}
                                                                // actionIcon={
                                                                //         <IconButton aria-label={`star `}>
                                                                //                 {/* ${item.item}  */}
                                                                //                 <StarBorderIcon className={classes.title} />
                                                                //         </IconButton>
                                                                // }
                                                        />
                                                </GridListTile>
                                        ))}
                                </GridList>
                        </div>
                        </div>
                );
}
export default AuctionPhotos;