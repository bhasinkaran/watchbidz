import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Collapse } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 545,
    background:'rgba(0,0,0,.5)',
    margin: '25px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  media: {
    height: 340,
  },
  title:{
          fontSize:'3rem',
          fontFamily:'Nunito',
          fontWeight: 'bold',
          color:'#fff'       
  },
  desc:{
        fontSize:'1.5rem',
        fontFamily:'Nunito',
        color:'#ddd'       
        },
  button:{
          
  },
  actionArea:{
          alignItems: 'center',
          justifyContent:'center'
  }
});

export default function ImageCard({role, checked}) {
  const classes = useStyles();

  return (
   <Collapse in={checked} {... (checked ? {timeout:2000}:{})}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={role.url}
          title={role.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
            {role.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.desc}>
            {role.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.actionArea}>
        <Button className={classes.button} variant = 'contained' size="large" color="black">
          Sign Up
        </Button>
        {/* <Button size="small" color="primary">
          Learn More
        </Button> */}
      </CardActions>
    </Card>
    </Collapse>
  );
}