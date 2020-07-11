import React, { useState, useContext } from 'react';
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

import { AppState } from '../context';
import { dbSellers } from '../firebase/firebase';

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

const ListWatch = () => {
        const someContext = useContext(AppState);
        const { sellers } = someContext;
        const header = 'Shop your piece to +20 dealers, get and we’ll find the highest offer in 3 days.';
        const [manufacturer, setManufacturer] = useState("");
        const [modelNo, setModelNo] = useState("");
        const [year, setYear] = useState("");
        const [boxBool, setBoxBool] = useState(null)
        const [minimumAsk, setMinimumAsk] = useState("");
        const [photoCrown, setPhotoCrown] = useState(null);
        const [photoTime, setPhototime] = useState(null);
        const [photoGeneral, setPhotoGeneral] = useState(null);




        function writeFirebase() {
                //     if(!sellers[username]){
                //       dbSellers.child(username).set({
                //         email: email,
                //         password: password,
                //         firstName: fname,
                //         lastName: lname,
                //         username: username,
                //       })
                //     }
        }

        const classes = useStyles();
        return (
                <Container component="main" maxWidth="xs">
                        <CssBaseline />
                        <div className={classes.paper}>
                                <Avatar className={classes.avatar}>
                                        <LockOutlinedIcon />
                                </Avatar>
                                <Typography component="h1" variant="h4">
                                        {header}
                                </Typography>
                                <form className={classes.form} noValidate>
                                        <Grid container spacing={2}>
                                                <Grid item xs={12} sm={6}>
                                                        <TextField
                                                                autoComplete="manufacturer"
                                                                name="manufacturer"
                                                                variant="outlined"
                                                                required
                                                                fullWidth
                                                                id="manufacturer"
                                                                label="Manufacturer"
                                                                autoFocus
                                                                value={manufacturer}
                                                                onChange={(event) => {
                                                                        setManufacturer(event.target.value)
                                                                }}
                                                        />
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                        <TextField
                                                                variant="outlined"
                                                                required
                                                                fullWidth
                                                                id="modelNo"
                                                                label="Model Number"
                                                                name="modelNo"
                                                                autoComplete="modelNo"
                                                                onChange={(event) => {
                                                                        setModelNo(event.target.value)
                                                                }}
                                                        />
                                                </Grid>
                                                <Grid item xs={12}>
                                                        <TextField
                                                                variant="outlined"
                                                                required
                                                                fullWidth
                                                                id="year"
                                                                label="Year of Purchase"
                                                                name="year"
                                                                autoComplete="year"
                                                                onChange={(event) => {
                                                                        setYear(event.target.value)
                                                                }}
                                                        />
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                        {/* <TextField
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
              /> */}
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                        <TextField
                                                                variant="outlined"
                                                                required
                                                                fullWidth
                                                                name="minAsk"
                                                                label="Minimum Ask"
                                                                id="minAsk"
                                                                onChange={(event) => {
                                                                        setMinimumAsk(event.target.value)
                                                                }}
                                                        />
                                                </Grid>
                                                <Grid item xs={12}>
                                                        <FormControlLabel
                                                                control={<Checkbox value={boxBool} color="primary" onChange={(event) => setBoxBool(event.target.checked)} />}
                                                                label="I have the box and papers from the manfucaturing company."
                                                        />
                                                </Grid>
                                        </Grid>
                                        <Button
                                                type="submit"
                                                fullWidth
                                                variant="contained"
                                                color="primary"
                                                className={classes.submit}
                                                onClick={() => writeFirebase()}
                                        >
                                                Sign Up
          </Button>
                                </form>
                        </div>
                        <Box mt={5}>
                                <Typography component="h1" variant="h4">
                                        I certify that all information provided here is accurate to the best of my knowledge.
                                </Typography>
                        </Box>
                </Container>
        );
}

export default ListWatch;