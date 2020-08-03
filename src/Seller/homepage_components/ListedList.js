import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import {Button} from 'semantic-ui-react';
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
const ListedList = () => {
        const someContext = useContext(AppState);
        const { sellers, user, listed } = someContext;

        const classes = useStyles();
        if (sellers[user] && sellers[user]['listed'] && listed) {
                return (
                        <div>
                        <div className={classes.root}>
                                <GridList className={classes.gridList} cols={Math.min(Object.values(sellers[user]['listed']).length,5)}>
                                        {/* Object.values(sellers[user]['listed']).length */}
                                        {Object.values(sellers[user]['listed']).map((item) => (
                                               
                                               
                                                <GridListTile key={listed[item].modelNo}>
                                                         <Link to={`/seller/auction/${item}`} push={true}>
                                                        <img src={listed[item].photoTime} alt={listed[item].modelNo} />
                                                        </Link>
                                                        <GridListTileBar
                                                                title={listed[item].modelNo}
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
                                <Button as={Link} to={`/seller/listwatch`} variant="contained" color="primary" disableElevation>
                                        List a Watch
                        </Button>
                        </div>
                        </div>
                );
        }
        else {
              if(user) {
                return (
                        <div>

                                None listed as of now!
                                <Divider />
                                <Button as={Link} to={`/seller/listwatch`} variant="contained" color="primary" disableElevation>
                                        List a Watch
                        </Button>
                        </div>
                )
              } 
              else{
                      return <Redirect to='/seller/login' ></Redirect>
              }
        }

}
export default ListedList;