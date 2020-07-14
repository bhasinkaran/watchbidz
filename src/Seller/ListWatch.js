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
import { dbListed, dbSellers } from '../firebase/firebase'
import { AppState } from '../context';
import { InputLabel, MenuItem, FormControl, Select, Menu } from '@material-ui/core';

import storage from '../firebase/firebase'
import { Redirect } from 'react-router-dom';

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
        button: {
                display: 'block',
                marginTop: theme.spacing(2),
        },
        formControl: {
                margin: theme.spacing(2),
                minWidth: 400,
                
        },
}));

const ListWatch = () => {

        const someContext = useContext(AppState);
        const { user } = someContext;
        const header = 'Shop your piece to +20 dealers, get and we’ll find the highest offer in 3 days.';
        const [manufacturer, setManufacturer] = useState("");
        const [modelNo, setModelNo] = useState("");
        const [year, setYear] = useState("");
        const [boxBool, setBoxBool] = useState(null)
        const [minimumAsk, setMinimumAsk] = useState("");
        const [photoCrown, setPhotoCrown] = useState(null);
        const [photoTime, setPhototime] = useState(null);
        const [photoLatch, setPhotoLatch] = useState(null);
        const [urlCrown, setUrlCrown] = useState("");
        const [urlTime, setUrlTime] = useState("");
        const [urlLatch, setUrlLatch] = useState("");
        const [age, setAge] = React.useState('');
        const [open, setOpen] = React.useState(false);
        const brands=["Rolex", "Seiko", "Patek Phelippe"]

        const handleChange = (event) => {
                setManufacturer(event.target.value);
        };

        const handleClose = () => {
                setOpen(false);
        };

        const handleOpen = () => {
                setOpen(true);
        };




        function writeFirebase() {
                const k = dbListed.push({
                        modelNo: modelNo,
                        manufacturer: manufacturer,
                        year: year,
                        boxBool: boxBool,
                        minimumAsk: minimumAsk,
                })
                const key = k.getKey();
                console.log(key);
                dbSellers.child(user).child('listed').push(key);
                const uploadCrown = storage.ref(`watches/${key}/crown`).put(photoCrown);
                uploadCrown.on(
                        "state_changed",
                        snapshot => {
                                const progress = Math.round(
                                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                                );
                                // setProgress(progress);
                        },
                        error => {
                                console.log(error);
                        },
                        () => {
                                storage
                                        .ref("watches")
                                        .child(key)
                                        .child('crown')
                                        .getDownloadURL()
                                        .then(url => {
                                                dbListed.child(key).child('photoCrown').set(url);
                                        });
                        }
                );
                const uploadTime = storage.ref(`watches/${key}/time`).put(photoTime);
                uploadTime.on(
                        "state_changed",
                        snapshot => {
                                const progress = Math.round(
                                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                                );
                                // setProgress(progress);
                        },
                        error => {
                                console.log(error);
                        },
                        () => {
                                storage
                                        .ref("watches")
                                        .child(key)
                                        .child('time')
                                        .getDownloadURL()
                                        .then(url => {

                                                dbListed.child(key).child('photoTime').set(url);
                                        });
                        }
                );
                const uploadLatch = storage.ref(`watches/${key}/latch`).put(photoLatch);
                uploadLatch.on(
                        "state_changed",
                        snapshot => {
                                const progress = Math.round(
                                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                                );
                                // setProgress(progress);
                        },
                        error => {
                                console.log(error);
                        },
                        () => {
                                storage
                                        .ref("watches")
                                        .child(key)
                                        .child('latch')
                                        .getDownloadURL()
                                        .then(url => {
                                                dbListed.child(key).child('photoLatch').set(url);
                                        });
                        }
                );
        }


        const classes = useStyles();
        if (user)
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
                                                        <Grid item xs={12} sm={12}>
                                                                {/* <TextField
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
                                                                /> */}
                                                                <FormControl className={classes.formControl}>
                                                                                <InputLabel variant='h3' id="demo-controlled-open-select-label">Manufacturer</InputLabel>
                                                                                <Select
                                                                                        labelId="demo-controlled-open-select-label"
                                                                                        id="demo-controlled-open-select"
                                                                                        open={open}
                                                                                        onClose={handleClose}
                                                                                        onOpen={handleOpen}
                                                                                        value={age}
                                                                                        onChange={handleChange}
                                                                                       required
                                                                                       fullWidth
                                                                                >
                                                                                        <MenuItem value="">
                                                                                                <em>Select</em>
                                                                                        </MenuItem>
                                                                                        {
                                                                                                brands.map(id=>
                                                                                                        <MenuItem value={id}>{id}</MenuItem>
                                                                                                        )
                                                                                        }
                                                                                </Select>
                                                                        </FormControl>
                                                        </Grid>
                                                        <Grid item xs={12} sm={12}>
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
                                                        <Grid item xs={12} sm={12}>
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
                                                        <Grid item xs={12} sm={6}>
                                                                <Typography style={{ marginTop: "20px" }} component="h5" variant="body1" >Upload Crown Photo:</Typography>
                                                        </Grid>
                                                        <Grid item xs={12} sm={6}>
                                                                <TextField
                                                                        variant="outlined"
                                                                        required
                                                                        type='file'
                                                                        fullWidth

                                                                        onChange={(e) => {
                                                                                setPhotoCrown(e.target.files[0])
                                                                        }}
                                                                />
                                                        </Grid>
                                                        <Grid item xs={12} sm={6}>
                                                                <Typography style={{ marginTop: "20px" }} component="h5" variant="body1" >Upload Photo With Clock @ 11:40:</Typography>
                                                        </Grid>
                                                        <Grid item xs={12} sm={6}>
                                                                <TextField
                                                                        variant="outlined"
                                                                        required
                                                                        type='file'
                                                                        fullWidth

                                                                        onChange={(e) => {
                                                                                setPhototime(e.target.files[0])
                                                                        }}
                                                                />
                                                        </Grid>
                                                        <Grid item xs={12} sm={6}>
                                                                <Typography style={{ marginTop: "20px" }} component="h5" variant="body1" >Upload Photo of Latch:</Typography>
                                                        </Grid>
                                                        <Grid item xs={12} sm={6}>
                                                                <TextField
                                                                        variant="outlined"
                                                                        required
                                                                        type='file'
                                                                        fullWidth
                                                                        onChange={(e) => {
                                                                                console.log(e.target.files[0]);
                                                                                setPhotoLatch(e.target.files[0])
                                                                        }}
                                                                />
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                                <FormControlLabel
                                                                        control={<Checkbox value={boxBool} color="primary" onChange={(event) => setBoxBool(event.target.checked)} />}
                                                                        label="I have the box and papers from the manfucaturing company."
                                                                />
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                                <div>
                                                                        {/* <Button className={classes.button} onClick={handleOpen}>
                                                                                Open the select
      </Button> */}
                                                                        
                                                                </div>
                                                        </Grid>
                                                </Grid>
                                                <Button
                                                        // type="submit"
                                                        fullWidth
                                                        variant="contained"
                                                        color="primary"
                                                        className={classes.submit}
                                                        onClick={() => writeFirebase()}
                                                >
                                                        List
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
        else {
                return <Redirect to='/seller/login' />
        }
}

export default ListWatch;