import React, {useState, useContext} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Redirect} from 'react-router-dom'
import { AppState } from '../context';
import { dbBuyers } from '../firebase/firebase';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        WatchBidz
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const  SignUpBuyer = ()=> {
  const someContext = useContext(AppState);
  const { buyers , user, setUser} = someContext;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const[username, setUsername]=useState("");
  const [confirmpassword, setConfirmPassword]=useState("");
  const[businessLink,setBusinessLink] = useState("");  
  const[businessName,setBusinessName] = useState("");
  const [businessYelp, setBusinessYelp]=useState("");
  const [boolMember, setMember]=useState("");

  // const [redirect, setRedirect]= useState("");

  function writeFirebase(){
    if(!buyers[username]){
      dbBuyers.child(username).set({
        email: email,
        password: password,
        firstName: fname,
        lastName: lname,
        username: username,
        businessLink: businessLink,
        businessName: businessName, 
        businessYelp: businessYelp,
        memberIWJG: boolMember ,
        current: "None"
      })
      setUser(username);
    }
  }

  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={fname}
                onChange = {(event) => {
                  setFname(event.target.value)
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange = {(event) => {
                  setLname(event.target.value)
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange = {(event) => {
                  setEmail(event.target.value)
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="username"
                label="Username"
                id="username"
                autoComplete="current-password"
                onChange = {(event, newVal) => {
                  setUsername(event.target.value)
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange = {(event) => {
                  setPassword(event.target.value)
                }}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Confirm Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange = {(event) => {
                  setConfirmPassword(event.target.value)
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Business Name"
                id="password"
                autoComplete="current-password"
                onChange = {(event) => {
                  setBusinessName(event.target.value)
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                name="password"
                placeholder="If there is one"
                label="Business Website Link"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange = {(event) => {
                  setBusinessLink(event.target.value)
                }}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="password"
                placeholder="If there is one"
                label="Link to Business Yelp Review"
                id="password"
                autoComplete="current-password"
                onChange = {(event) => {
                  setBusinessYelp(event.target.value)
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                onChange={(e)=>setMember(e.target.checked)}
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I am a member of the IWJG (International Watch and Jewelry Guild Show)"
              />
            </Grid>
            
          </Grid>
          <Button
        //     type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick = {()=> writeFirebase()}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
        {user ? <Redirect to='/buyer/home' /> : ""}
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default SignUpBuyer;